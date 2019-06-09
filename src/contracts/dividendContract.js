import options from '../options';

let dividendContractInstance = {};

class DividendContract {

    static async getContractInstance(){
        let contractInfo = await tronWeb.trx.getContract(options.testnet.dividendContractAddress);
        return await tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);
    }
}

export default DividendContract;