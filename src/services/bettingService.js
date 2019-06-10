import store from '../store';
import UIHelper from '../helpers/UIHelpers';
import DividendContract from '../contracts/dividendContract';
import Cache from '../cache/localCache';
import options from '../options';
import eventBus from '../eventBus/eventBus';
import UltimateDiceContract from '../contracts/ultimateDiceContract';
import Helper from '../helpers/Helper';
import constants from '../constants';

class BettingService {

    static setBettingSidePotSize(jackpotSize) {
        store.commit('SET_SIDEBET_JACKPOT', jackpotSize);
    }

    static setBetFromTo(betFrom, betTo) {
        let obj = {
            from: betFrom,
            to: betTo
        };
        store.commit('SET_BET_FROM_TO', obj);

    }

    static setWinChance(winChance) {
        store.commit('SET_BET_WIN_CHANCE', winChance);
    }

    static setMultiplier(multiplier) {
        store.commit('SET_BET_MULTIPLIER', multiplier);
    }

    static setBetPayout(payout) {
        store.commit('SET_BET_PAYOUT', payout);
    }


    static rollDiceFailed(msg) {
        eventBus.$emit('alertify', {
            type: 'error',
            msg: msg
        });
        eventBus.$emit('diceRollState', false);
        store.commit('SET_ROLLING_STATE', false);
        return false;
    }



    static async rollDice() {
        /////////// Set UI & Store status  /////////// 
        eventBus.$emit('diceRollState', true);
        store.commit('SET_ROLLING_STATE', true);

        //validate user balance

        const userBalance = await window.tronWeb.trx.getBalance(global.userAddress);
        if (userBalance < betAmt) {
            return this.rollDiceFailed('Can not wager more than current Max Payout');
        }

        /////////// set timestamp  /////////// 
        var timestamp = + new Date();

        ///////////  set cookies for finish bet alert /////////// 
        document.cookie = "rollDiceClickTime=" + timestamp;


        //get dividends from contract

        // var dividends = await DividendContract.displayAvailableDividendALL();


        ///////////  sidebet amount  /////////// 




        /////////// VALIDATE BET  /////////// 

        let sidebetAmount = store.state.bet.amount;
        let sidebet = Cache.getSideBets();
        let betAmt = store.state.bet.amount;

        if (betAmt > options.bets.MAX_BET_AMOUNT) {
            return this.rollDiceFailed('The max bet amount is currently ' + options.bets.MAX_BET_AMOUNT);
        }
        if (betAmt < options.bets.MIN_BET_AMOUNT) {
            return this.rollDiceFailed('The min bet amount is currently ' + options.bets.MIN_BET_AMOUNT);
        }
        if (sidebet != '') {
            if (sidebetAmount < options.bets.MIN_SIDEBET_AMOUNT) {
                return this.rollDiceFailed('The min side bet amount is currently ' + options.bets.MIN_SIDEBET_AMOUNT);
            }
        }
        if (sidebetAmount > options.bets.MAX_SIDEBET_AMOUNT) {
            return this.rollDiceFailed('The max side bet amount is currently ' + options.bets.MAX_SIDEBET_AMOUNT);
        }


        /////////// VALIDATE PAYOUT  ///////////

        let diceContractBalance = await UltimateDiceContract.getContractBalance();
        let totalMaxAmount = parseFloat(diceContractBalance) / options.bets.MAX_WIN_DIVISIBLE_AMOUNT;

        var PAYOUT_WIN_AMOUNT = parseFloat(store.state.bet.payout);

        var SIDEBET_PAYOUT_WIN_AMOUNT = $('#sidebet-payout').val();
        if (sidebet != "") {
            betAmt = betAmt + parseFloat(sidebetAmount);
            PAYOUT_WIN_AMOUNT = PAYOUT_WIN_AMOUNT + parseFloat(SIDEBET_PAYOUT_WIN_AMOUNT)
        }

        var PAYOUT_WIN_AMOUNT = PAYOUT_WIN_AMOUNT - betAmt;

        if (PAYOUT_WIN_AMOUNT > totalMaxAmount) {
            return this.rollDiceFailed('Can not wager more than current Max Payout');
        }

        //generate random seed for bet
        let seed = Cache.getSeedValue();

        if (!seed || seed.length == 0) {
            let tSeed = await Helper.getRandomSeedHash();
            seed = tSeed.toLowerCase();
        }
        else {
            seed = seed.toLowerCase();
            if (seed.startsWith("0x")) seed = seed.substring(2);
        }

        //convert sidebet to int

        let sidebetInt = 0;
        if (sidebet && sidebet.length > 0) {
            sidebetInt = constants.sidebetToInt[sidebet];
        }

        //generate rollIntegerVariables
        const rollIntegerVariables = [store.state.bet.from, store.state.bet.to, store.state.bet.amount, sidebetInt, sidebetAmount];

        //get previousFinishBet from local storage
        let betToFinish = null;

        let betDataReceivedFunc = null;

        let previousBet = Cache.getPreviousBet();

        let finishBet_gambler = "0x0000000000000000000000000000000000000000";
        let finishBet_uniqueBetId = tronWeb.sha3("0", true);
        let finishBet_userSeed = finishBet_uniqueBetId;
        let finishBet_blockNumber = 0;
        let finishBet_rollIntegerVariables = [0, 0, 0, 0, 0];

        if (previousBet && previousBet.length > 0) {

            let finishBetData = JSON.parse(previousBet);

            betToFinish = finishBetData.shift();

            finishBet_gambler = betToFinish[0];
            finishBet_uniqueBetId = betToFinish[1];
            finishBet_userSeed = betToFinish[2];
            finishBet_blockNumber = betToFinish[3];
            finishBet_rollIntegerVariables = betToFinish[4];
        }

        //set bet seed in state for events search
        store.commit('SET_CURRENT_BET_UNIQUEID', seed);

        //start watching events
        UltimateDiceContract.watchEvents();

        //call finishBet_and_startBet contract method
        try {
            var result = await UltimateDiceContract.finishBet_and_startBet(finishBet_gambler, finishBet_uniqueBetId, finishBet_userSeed, finishBet_blockNumber, finishBet_rollIntegerVariables, rollIntegerVariables, seed, seed);
            console.log("startBetTxid=" + result);
        }
        catch (err) {
            console.log("tx failed");

            if (betToFinish !== null) {
                let finishBetData = JSON.parse(localStorage.getItem('previousFinishBet'));
                if (localStorage.hasOwnProperty("DebugLog")) {
                    console.log("Added back unfinished bet to local storage:");
                    console.log(betToFinish);
                }
                finishBetData.unshift(betToFinish);
                localStorage.setItem('previousFinishBet', JSON.stringify(finishBetData));
            }

            return this.rollDiceFailed(err);
        }
        //listen to events with uniqueId
    }
}


export default BettingService;