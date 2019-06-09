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

    static setWinChance(winChance){
        store.commit('SET_BET_WIN_CHANCE', winChance);
    }

    static setMultiplier(multiplier){
        store.commit('SET_BET_MULTIPLIER', multiplier);
    }

    static setBetPayout(payout){
        store.commit('SET_BET_PAYOUT', payout);
    }
}


export default BettingService;