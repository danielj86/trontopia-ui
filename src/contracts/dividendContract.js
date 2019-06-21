import options from '../options';
import TronService from '../services/tronService';

class DividendContract {

    static async getContractInstance() {
        let contractInfo = await window.tronWeb.trx.getContract(options.testnet.dividendContractAddress);
        return await window.tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);
    }

    static async displayAvailableDividendALL() {
        let divContractInstance = await this.getContractInstance();
        let dividends = await divContractInstance.displayAvailableDividendALL().call();
        var dividend = TronService.fromSun(dividends[1]);

        return dividend;
    }

    static async referrers(address) {
        let divContractInstance = await this.getContractInstance();
        let ref = await divContractInstance.referrers(address).call();
        ref = TronService.fromHex(ref);
        return ref;
    }
}

export default DividendContract;