import store from '../store';
import TronService from '../services/tronService';

class UserHelper {

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