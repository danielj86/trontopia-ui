import store from '../store';

class BettingService {

    static setBettingSidePotSize(jackpotSize) {
        store.commit('SET_SIDEBET_JACKPOT', jackpotSize);
    }

    static setBetFromTo(betFrom, betTo){
        let obj = {
            from:betFrom,
            to:betTo
        };
        store.commit('SET_BET_FROM_TO', obj);
      
    }
}


export default BettingService;