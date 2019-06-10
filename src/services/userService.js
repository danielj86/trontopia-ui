import store from '../store';
import TronService from '../services/tronService';

class UserHelper {

    static initUser(address, addressHex, referalId, trxBalance,totalTokens,avaliableTokens) {
        store.commit("SET_USER_ADDRESS", address);
        store.commit("SET_USER_ADDRESS_HEX", addressHex);
        store.commit("SET_IS_LOGGEDIN", true);
        store.commit("SET_REFERAL_ID", referalId);
        store.commit('SET_MY_TRX_BALANCE', trxBalance);
        store.commit('SET_MY_TOTAL_TOKENS', totalTokens);
        store.commit('SET_MY_AVALIABLE_TOKENS', avaliableTokens);
    }

    static Logout(){
        store.commit("SET_USER_ADDRESS", "");
        store.commit("SET_USER_ADDRESS_HEX", "");
        store.commit("SET_IS_LOGGEDIN", false);
        store.commit("SET_REFERAL_ID", "");
        store.commit('SET_MY_TRX_BALANCE', 0);
        store.commit('SET_MY_TOTAL_TOKENS', 0);
        store.commit('SET_MY_AVALIABLE_TOKENS', 0);
    }

    static getUserAddress() {
        if (store.state.userAddress) {
            const userAddress = store.state.userAddress;

            let firstFive = userAddress.substring(0, 5);
            let lastFive = userAddress.substr(userAddress.length - 5);
            return firstFive + '...' + lastFive;
        }

        return null;
    }

    static setMyTotalTokens(totalTokens) {
        store.commit('SET_MY_TOTAL_TOKENS', totalTokens);
    }

    static setMyAvaliableTokens(avaliableTokens) {
        store.commit('SET_MY_AVALIABLE_TOKENS', avaliableTokens);
    }


}

export default UserHelper