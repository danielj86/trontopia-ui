import options from '../options';

let ultimateDiceContractInstance = {};

class UltimateDiceContract {

     static async Init() {
        let ultimateDiceContractInfo = await tronWeb.trx.getContract(options.testnet.ultimateDiceContractAddress);
        ultimateDiceContractInstance = await tronWeb.contract(ultimateDiceContractInfo.abi.entrys, ultimateDiceContractInfo.contract_address);
    }


}

export default UltimateDiceContract;