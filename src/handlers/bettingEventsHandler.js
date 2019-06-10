import store from '../store';

class BettingEventsHandler {

    static async HandleBetStartEvent(ev) {
        let uniqueId = store.state.bet.uniqueid;

        if (ev.result._uniqueBetId == uniqueId) {
            store.commit('SET_CURRENT_BET_UNIQUEID', '');
            console.log('bet started event received');
        }
    }

}

export default BettingEventsHandler;