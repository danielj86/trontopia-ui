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

    static rollBet(){

        //set rolling state to true

        //set timestamp

        //disable slider

        //cookie

        //get game contract

        //clear style for bounce num

        //is mobile

        //get dividends from contract

        //sidebet amount

        //validate bet

        //validate payout

        //generate random seed for bet

        //validate user balance

        //convert sidebet to int

        //generate rollIntegerVariables

        //get previousFinishBet from local storage

        //start watching events

        //call finishBet_and_startBet contract method

        //listen to events with uniqueId
    }
}


export default BettingService;