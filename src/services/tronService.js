import TextHelper from '../helpers/textHelper';
import store from '../store';

class TronHelper {

    static toDecimal(number) {
        return window.tronWeb.toDecimal(number);
    }

    static onUserAddressChange(callback) {
        window.tronWeb.on("addressChanged", callback);
    }

    static async getBlock(blockNumber){
        return await window.tronWeb.trx.getBlock(blockNumber);
    }

    static fromSun(sun) {
        const str = window.tronWeb.fromSun(sun).toString();
        return TextHelper.number_to_2decimals(str);
    }

    static fromHex(hex) {
        return window.tronWeb.address.fromHex(hex);
    }

    static sha3(str) {
        return window.tronWeb.sha3(str, true);
    }

    static async getMyAddress() {
        return await window.tronWeb.defaultAddress.base58;
    }

    static async getMyAddressHex() {
        return await window.tronWeb.defaultAddress.hex;
    }

    static async getBalance(wallet) {
        return await window.tronWeb.trx.getBalance(wallet);
    }

    static async fetchMyTRXBalance() {
        let trxBal = await this.getBalance(store.state.userAddress);
        let balance = this.fromSun(trxBal);
        return balance;
    }

    static waitForTronWeb(interval) {
        return new Promise((resolve, reject) => {

            let rounds = interval / 500;
            let i = 0;

            let tronWebCheckInterval = window.setInterval(() => {
                
                if (window.tronWeb && window.tronWeb.ready) {
                    window.clearInterval(tronWebCheckInterval);
                    resolve(true);
                }
                else {
                    if (i >= rounds) {
                        window.clearInterval(tronWebCheckInterval);
                        reject({});
                    }
                }
                i++;
            }, 700);

        });
    }
}


export default TronHelper;