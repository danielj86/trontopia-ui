import TextHelper from '../helpers/textHelper';
import HTTP from '../helpers/HTTP';
import store from '../store';

class TronHelper {

    static toDecimal(number) {
        return window.tronWeb.toDecimal(number);
    }

    static onUserAddressChange(callback) {
        window.tronWeb.on("addressChanged", callback);
    }

    static sunToTrx(sun) {
        const str = window.tronWeb.fromSun(sun).toString();
        return TextHelper.number_to_2decimals(str);
    }

    static async getMyAddress() {
        return await window.tronWeb.defaultAddress.base58;
    }

    static async getMyAddressHex() {
        return await window.tronWeb.defaultAddress.hex;
    }

    static async fetchMyTRXBalance() {

        let res = await HTTP.POST("https://api.shasta.trongrid.io/wallet/getaccount", { address: store.state.userAddressHex });
        let trxBal = res['balance'];
        let balance = this.sunToTrx(trxBal);

        store.commit('SET_MY_TRX_BALANCE', balance);
    }

    static waitForTronWeb(interval) {
        return new Promise((resolve, reject) => {

            let rounds = interval / 500;
            let i = 0;

            let tronCheckTimeout = window.setTimeout(() => {

                if (window.tronWeb && window.tronWeb.ready) {
                    window.clearTimeout(tronCheckTimeout);
                    resolve(true);
                }
                else {
                    if (i < rounds) {
                        reject({});
                    }
                }
                i++;
            }, 500);

        });
    }
}


export default TronHelper;