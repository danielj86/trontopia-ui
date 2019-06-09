import options from '../options';

let ultimateDiceContractInstance = {};

class UltimateDiceContract {

    static async getContractInstance(){
        let contractInfo = await tronWeb.trx.getContract(options.testnet.ultimateDiceContractAddress);
        return await tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);
    }


}

export default UltimateDiceContract;