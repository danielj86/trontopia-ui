import options from '../options';

let dividendContractInstance = {};

class DividendContract {

     static async Init() {
        let dividendContractInfo = await tronWeb.trx.getContract(options.testnet.dividendContractAddress);
        dividendContractInstance = await tronWeb.contract(dividendContractInfo.abi.entrys, dividendContractInfo.contract_address);
    }


}

export default DividendContract;