import options from '../options';
import TronService from '../services/tronService';

let eventWatcherContractInstance = {};
let betStartedEvent = {};
let betFinishedEvent = {};

class UltimateDiceContract {

    static async getContractInstance() {
        let contractInfo = await tronWeb.trx.getContract(options.testnet.ultimateDiceContractAddress);
        return await tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);
    }

    static async currentSideBetJackpotSize() {
        let ultimateDiceContractInstance = await this.getContractInstance();
        let currentSideBetJackpotSize = await ultimateDiceContractInstance.currentSideBetJackpotSize().call();
        return TronService.fromSun(currentSideBetJackpotSize);
    }

    static async watchEvents(){

        eventWatcherContractInstance =  await this.getContractInstance();

        try {betStartedEvent.stop(); } catch (ee) {}
        try {betFinishedEvent.stop(); } catch (ee) {}
        
        try
        {
            // Start watching BetStarted events
            betStartedEvent = await eventWatcherContractInstance.BetStarted().watch(
                {},
                async (err, res) => {
                    if (err !== null)
                    {
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
                    if (err !== null)
                    {
                        console.error("Error while received BetFinished event:", err);
                        // setTimeout(initBetStartedEventWatcher, 1000);
                        return;
                    }
                    
                    // receivedEvent(res, true);
                }
            );
        }
        catch (e)
        {
            // setTimeout(initBetStartedEventWatcher, 1000);
            return;
        }
    }
}

export default UltimateDiceContract;