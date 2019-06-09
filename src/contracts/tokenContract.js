import options from '../options';

let tokenContractInstance = {};

class TokenContract {

     static async Init() {
        let tokenContractInfo = await tronWeb.trx.getContract(options.testnet.tokenContractAddress);
        tokenContractInstance = await tronWeb.contract(tokenContractInfo.abi.entrys, tokenContractInfo.contract_address);
    }


}

export default TokenContract;