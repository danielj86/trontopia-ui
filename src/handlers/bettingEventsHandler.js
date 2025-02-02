import store from '../store';
import Cache from '../cache/localCache';
import TronService from '../services/tronService';
import UltimateDiceContract from '../contracts/ultimateDiceContract';
import UserService from '../services/userService';
import SoundService from '../services/soundsService';
import BettingService from '../services/bettingService';
import EventBus from '../eventBus/eventBus';


class BettingEventsHandler {

    static async HandleBetEvents(ev) {

        if (ev.name == "BetFinished" && ev.result._betHash == store.state.bet.betHash) {

            console.log('bet finished event');

            let mainBetWin = 0;
            let sideBetWin = 0;
            let newWinningNumber = 0;


            //saving start bet variables in local storage, which would be used by finish bet in subsequent roll.
            let previousBetData = {
                userAddress: store.state.userAddress,
                uniqueBetId: store.state.bet.uniqueid,
                gambler: store.state.bet.eventGambler,
                blockNumber: store.state.bet.blockNumber,
                rollIntegers: [store.state.bet.from, store.state.bet.to, store.state.bet.amount, 0, 0]
            };

            let previousBets = Cache.getPreviousBets();

            if (previousBets && previousBets.length > 0) {
                previousBets.push(previousBetData);
            }
            else {
                previousBets = [previousBetData];
            }

            Cache.setPreviousBets(previousBets);

            const block = await TronService.getBlock(store.state.bet.blockNumber);
            let calculateBetResult = await UltimateDiceContract.calculateBetResultWithBlockHash(store.state.userAddress, store.state.bet.uniqueid, store.state.bet.uniqueid, store.state.bet.blockNumber, store.state.bet.integrerVals, "0x" + block.blockID);

            mainBetWin = TronService.toDecimal(calculateBetResult.mainBetWin)
            mainBetWin = TronService.fromSun(mainBetWin);

            sideBetWin = TronService.toDecimal(calculateBetResult.sideBetWin);
            sideBetWin = TronService.fromSun(sideBetWin);


            store.commit('SET_BET_WINS', {
                mainBetWin: mainBetWin,
                sideBetWin: sideBetWin
            });

            newWinningNumber = TronService.toDecimal(calculateBetResult.winningNumber);
            console.log("Winning number: " + newWinningNumber);

            let isWin = ((newWinningNumber >= store.state.bet.from && newWinningNumber <= store.state.bet.to) ? true : false);

            let extraBet = {
                "user": store.state.userAddress,
                "startNumber": store.state.bet.from,
                "endNumber": store.state.bet.to,
                "winningNumber": newWinningNumber,
                "bet": store.state.bet.amount,
                "result": isWin,
                "timestampMs": Date.now(),
                "timestamp": store.state.bet.betStartedTimestamp.toLocaleString("en-GB", { timeZone: "UTC" })
            };

            store.commit('PUSH_TO_EXTRA_BETS', extraBet);

            //   mybetsData();

            //update user balance
            let newBalance = await TronService.fetchMyTRXBalance();
            UserService.setMyTRXBalance(newBalance);

            EventBus.$emit('haveWinningNumber', newWinningNumber);

            //clear uniqueId
            store.commit('SET_CURRENT_BET_UNIQUEID', '');

            BettingService.setRollDiceFinished();
        }


        else if (ev.name === "BetStarted" && ev.result._uniqueBetId == store.state.bet.uniqueid) {

            EventBus.$emit('betStarted');

            console.log('bet started event received');

            //set betHash
            store.commit('SET_CURRENT_BET_HASH', ev.result._betHash);

            //set bet block number
            store.commit('SET_CURRENT_BET_BLOCKNUMBER', ev.result._blockNumber);

            //set bet eventGambler
            store.commit('SET_CURRENT_BET_EVENT_GAMBLER', ev.result._gambler);

            //set txId
            store.commit('SET_CURRENT_BET_TXID', ev.transaction);

            //set bet started timestamp
            store.commit('SET_CURRENT_BET_STARTED_TIMESTAMP', ev.timestamp);

            //DELAY tx - Handle lastRollResultTimestamp variable
            // const timeToWait = lastRollResultTimestamp + 4000 - Date.now();
            // lastRollResultTimestamp = Date.now();
            // if (timeToWait > 0)
            // {
            //     if (localStorage.hasOwnProperty("DebugLog")) console.log("Artificially slowing down roll result by "+(timeToWait/1000)+"s because it arrived to fast :)");
            //     await new Promise((resolve, reject) => setTimeout(resolve, timeToWait));
            // }
        }
    }
}

export default BettingEventsHandler;