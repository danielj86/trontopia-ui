import options from '../options';
import TronService from '../services/tronService';
import store from '../store';
import EventHandler from '../handlers/bettingEventsHandler';

let contractInstance = null;
let betStartedEvent = {};
let betFinishedEvent = {};

class UltimateDiceContract {

    static async getContractInstance() {
        if (contractInstance == null) {
            let contractInfo = await window.tronWeb.trx.getContract(options.testnet.ultimateDiceContractAddress);
            contractInstance = await window.tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);
        }
        return contractInstance;
    }

    static async currentSideBetJackpotSize() {
        let ultimateDiceContractInstance = await this.getContractInstance();
        let currentSideBetJackpotSize = await ultimateDiceContractInstance.currentSideBetJackpotSize().call();
        return TronService.fromSun(currentSideBetJackpotSize);
    }

    static async getContractBalance() {
        let contractBalance = await TronService.getBalance(options.testnet.ultimateDiceContractAddress);
        contractBalance = TronService.fromSun(contractBalance);
        return contractBalance;
    }

    static async finishBet_and_startBet(finishBet_gambler, finishBet_uniqueBetId, finishBet_userSeed, finishBet_blockNumber, finishBet_rollIntegerVariables, rollIntegerVariables, seed, uniqueString) {
        let ultimateDiceContractInstance = await this.getContractInstance();

        return await ultimateDiceContractInstance.finishBet_and_startBet(finishBet_gambler, finishBet_uniqueBetId, finishBet_userSeed, finishBet_blockNumber, finishBet_rollIntegerVariables, rollIntegerVariables, store.state.referId, seed, uniqueString).send({
            shouldPollResponse: false,
            feeLimit: options.bets.FEE_LIMIT,
            callValue: store.state.bet.amount * 1000000,
            from: store.state.userAddress
        });
    }

    static async calculateBetResultWithBlockHash(userAddress, uniqueString, seed, blockNumber, rollIntegerVariables, block) {
        let ultimateDiceContractInstance = await this.getContractInstance();

        if(!uniqueString.startsWith("0x")) uniqueString = "0x" + uniqueString;
        if(!seed.startsWith("0x")) seed = "0x" + seed;
        
        return await ultimateDiceContractInstance.calculateBetResultWithBlockHash(userAddress, uniqueString, seed, blockNumber, rollIntegerVariables, block).call();
    }

    static async watchEvents() {

        let ultimateDiceContractInstance = await this.getContractInstance();

        try { betStartedEvent.stop(); } catch (ee) { }
        try { betFinishedEvent.stop(); } catch (ee) { }

        try {

            // Start watching BetStarted events
            betStartedEvent = await ultimateDiceContractInstance.BetStarted().watch(async (err, res) => {
                console.log('betStartedEvent event');
                if (err !== null) {
                    console.error("Error while received BetStarted event:", err);
                    return;
                }

                EventHandler.HandleBetStartEvent(res);
            }
            );

            // Start watching BetStarted events
            betFinishedEvent = await ultimateDiceContractInstance.BetFinished().watch(async (err, res) => {
                console.log('betFinishedEvent event');
                if (err !== null) {
                    console.error("Error while received BetFinished event:", err);
                    // setTimeout(initBetStartedEventWatcher, 1000);
                    return;
                }

                if (res.result._betHash == store.state.bet.betHash) {
                    //clear state
                    store.commit('SET_CURRENT_BET_UNIQUEID', '');
                    receivedEvent(res, true);
                }
            }
            );
        }
        catch (e) {
            // setTimeout(initBetStartedEventWatcher, 1000);
            return;
        }

    }
}

export default UltimateDiceContract;