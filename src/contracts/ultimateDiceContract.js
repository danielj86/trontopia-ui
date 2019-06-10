import options from '../options';
import TronService from '../services/tronService';
import store from '../store';


let eventWatcherContractInstance = {};
let betStartedEvent = {};
let betFinishedEvent = {};

class UltimateDiceContract {

    static async getContractInstance() {
        let contractInfo = await window.tronWeb.trx.getContract(options.testnet.ultimateDiceContractAddress);
        return await window.tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);
    }

    static async currentSideBetJackpotSize() {
        let ultimateDiceContractInstance = await this.getContractInstance();
        let currentSideBetJackpotSize = await ultimateDiceContractInstance.currentSideBetJackpotSize().call();
        return TronService.fromSun(currentSideBetJackpotSize);
    }

    static async getContractBalance() {
        let contractBalance = await TronService.getBalance(options.testnet.ultimateDiceContractAddress);
        contractBalance = TronService.fromSun(contractBalance);
    }

    static async finishBet_and_startBet(finishBet_gambler, finishBet_uniqueBetId, finishBet_userSeed, finishBet_blockNumber, finishBet_rollIntegerVariables, rollIntegerVariables, seed, uniqueString) {
        eventWatcherContractInstance = await this.getContractInstance();
       
        try { betStartedEvent.stop(); } catch (ee) { }
        try { betFinishedEvent.stop(); } catch (ee) { }

        try {
            // Start watching BetStarted events
            betStartedEvent = await eventWatcherContractInstance.BetStarted().watch(
                {},
                async (err, res) => {
                    console.log('betStartedEvent event');
                    if (err !== null) {
                        console.error("Error while received BetStarted event:", err);
                        // setTimeout(initBetStartedEventWatcher, 1000);
                        return;
                    }

                    // receivedEvent(res, true);
                }
            );


            // Start watching BetStarted events
            betFinishedEvent = await eventWatcherContractInstance.BetFinished().watch(
                {},
                async (err, res) => {
                    console.log('betFinishedEvent event');
                    if (err !== null) {
                        console.error("Error while received BetFinished event:", err);
                        // setTimeout(initBetStartedEventWatcher, 1000);
                        return;
                    }

                    // receivedEvent(res, true);
                }
            );
        }
        catch (e) {
            // setTimeout(initBetStartedEventWatcher, 1000);
            return;
        }

        return await eventWatcherContractInstance.finishBet_and_startBet(finishBet_gambler, finishBet_uniqueBetId, finishBet_userSeed, finishBet_blockNumber, finishBet_rollIntegerVariables, rollIntegerVariables, store.state.referId, seed, uniqueString).send({
            shouldPollResponse: false,
            feeLimit: options.bets.FEE_LIMIT,
            callValue: store.state.bet.amount * 1000000,
            from: store.state.userAddress
        });
    }
    static async watchEvents() {

    }
}

export default UltimateDiceContract;