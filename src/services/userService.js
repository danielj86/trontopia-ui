import store from '../store';

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


}

export default UserHelper