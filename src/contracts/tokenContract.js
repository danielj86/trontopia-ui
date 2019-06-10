import options from '../options';
import TronService from '../services/tronService';

class TokenContract {

    static async getContractInstance(){
        let tokenContractInfo = await window.tronWeb.trx.getContract(options.testnet.tokenContractAddress);
        return await window.tronWeb.contract(tokenContractInfo.abi.entrys, tokenContractInfo.contract_address);
    }

    static async balanceOf(wallet) {
       let tokenContractInstance = await this.getContractInstance();
        let tokens = await tokenContractInstance.balanceOf(wallet).call();
        let val = Object.values(tokens);
        let decimalVal = TronService.toDecimal(val[0]);

        return decimalVal / 100000000;
    }

    static async totalSupply(){
        let tokenContractInstance = await this.getContractInstance();
        return await tokenContractInstance.totalSupply().call();
    }

    static async getAvailabletoWithdrawTOPIA() {
        let tokenContractInstance = await this.getContractInstance();
        let tokens = await tokenContractInstance.displayAvailabletoWithdrawTOPIA().call();
        let val = Object.values(tokens);
        let decimalVal = TronService.toDecimal(val[0]);

        return decimalVal / 100000000;
    }

}

export default TokenContract;