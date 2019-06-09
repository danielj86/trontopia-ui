import options from '../options';
import TronService from '../services/tronService';


let ultimateDiceContractInstance = {};

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


}

export default UltimateDiceContract;