import options from '../options';
import TronService from '../services/tronService';
import store from '../store';
let dividendContractInstance = {};

class DividendContract {

    static async getContractInstance() {
        let contractInfo = await window.tronWeb.trx.getContract(options.testnet.dividendContractAddress);
        return await window.tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);
    }

    static async displayAvailableDividendALL() {
        let divContractInstance = this.getContractInstance();
        let dividends = await divContractInstance.displayAvailableDividendALL().call();
        var val = Object.values(dividends);
        var divNumber = TronService.toDecimal(val[1]);
        var dividend = TronService.fromSun(divNumber);

        return dividend;
    }

    static async referrers() {
        let divContractInstance = await this.getContractInstance();
        let ref = await divContractInstance.referrers(store.state.userAddress).call();
        ref = TronService.fromHex(ref);
        return ref;
    }
}

export default DividendContract;