import store from '../store';
import UIHelper from '../helpers/UIHelpers';
import DividendContract from '../contracts/dividendContract';
import Cache from '../cache/localCache';
import options from '../options';
import eventBus from '../eventBus/eventBus';
import UltimateDiceContract from '../contracts/ultimateDiceContract';
import Helper from '../helpers/Helper';
import constants from '../constants';
import { setTimeout } from 'core-js';
import EventHandler from '../handlers/bettingEventsHandler';

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

    static clearCurrentBetUniqueId() {
        store.commit('SET_CURRENT_BET_UNIQUEID', '');
    }

    static setCurrentBetUniqueId(uniqueId) {
        if (uniqueId.startsWith("0x")) uniqueId = uniqueId.substring(2);
        //set bet seed in state for events search
        store.commit('SET_CURRENT_BET_UNIQUEID', uniqueId);
    }

    static async tryGetStartEventForBet(tx_hash, timeout) {
        let self = this;
        async function fetchFunc() {
            try {
                if (tx_hash !== null) {
                    const events = await tronWeb.getEventByTransactionID(tx_hash);

                    for (let i = 0; i < events.length; i++) {
                        if (events[i].name == "BetStarted") {
                            clearInterval(interval);
                           EventHandler.HandleBetStartEvent(events[i]);
                        }
                    }

                    if (events.length >= 1) {
                        clearInterval(interval);
                    }
                }
            }
            catch (e) {
                clearInterval(interval);
                console.error(e);
            }
        }

        let interval = setInterval(fetchFunc, 500);

        setTimeout(() => {
            clearInterval(interval);
        }, timeout);
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
        if (sidebet && sidebet.length > 0) {
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
            seed = await Helper.getRandomSeedHash();
        }
        seed = seed.toLowerCase();


        //convert sidebet to int

        let sidebetInt = 0;
        if (sidebet && sidebet.length > 0) {
            sidebetInt = constants.sidebetToInt[sidebet];
        }

        //generate rollIntegerVariables
        const rollIntegerVariables = [store.state.bet.from * 1, store.state.bet.to * 1, store.state.bet.amount * 1, 0, 0];

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

        //set bet seed in store
        this.setCurrentBetUniqueId(seed);

        //call finishBet_and_startBet contract method
        try {
            var betTx = await UltimateDiceContract.finishBet_and_startBet(finishBet_gambler, finishBet_uniqueBetId, finishBet_userSeed, finishBet_blockNumber, finishBet_rollIntegerVariables, rollIntegerVariables, seed, seed);
            console.log("new bet TX=" + betTx);

            //try fetching tx events for 10 secs
            this.tryGetStartEventForBet(betTx, options.bets.BETSTART_EVENT_WATCH_TIMEOUT);
        }
        catch (err) {
            console.log("bet TX failed");

            if (betToFinish !== null) {
                let finishBetData = Cache.getPreviousBet();
                finishBetData.unshift(betToFinish);
                Cache.setPreviousBet(finishBetData);
            }

            return this.rollDiceFailed("Failed to generate bet TX");
        }
    }
}


export default BettingService;