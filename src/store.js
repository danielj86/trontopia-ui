import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions/actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userAddress: "",
    userAddressHex: "",
    loggedIn: false,
    diceRolling: false,
    soundIsOn: false,
    myAvaliableToken: 0.0,
    sidebetJackpot: 0.0,
    myTRXBalance: 0.0,
    referId: 0,
    rollButtonLabel:'Roll',
    extraBetsToDisplayAtTopOfMyBets: [],
    totals: {
      myTotalWon: 0,
      myTotalToken: 0,
      myTotalToken2: 0,
      myTotalBets: 0,
    },
    bet: {
      from: 25,
      to: 75,
      winChance: 0,
      multiplier: 0,
      amount: 50,
      payout: 0,
      uniqueid: '',
      betHash: '',
      blockNumber: 0,
      eventGambler: '',
      txId: '',
      betStartedTimestamp: '',
      integrerVals: [],
      luckyNumber: "00",
    }
  },
  mutations: {
    SET_USER_ADDRESS: (state, userAddress) => {
      state.userAddress = userAddress;
    },
    SET_USER_ADDRESS_HEX: (state, userAddressHex) => {
      state.userAddressHex = userAddressHex;
    },
    SET_IS_LOGGEDIN: (state, isLoggedIn) => {
      state.loggedIn = isLoggedIn;
    },
    SET_SOUND_STATE: (state, soundIsOn) => {
      state.soundIsOn = soundIsOn;
    },
    SET_MY_AVALIABLE_TOKENS: (state, avaliableTokens) => {
      state.myAvaliableToken = avaliableTokens;
    },
    SET_MY_TOTAL_TOKENS: (state, totalTokens) => {
      state.totals.myTotalToken = totalTokens;
      state.totals.myTotalToken2 = totalTokens;
    },
    SET_MY_TRX_BALANCE: (state, balance) => {
      state.myTRXBalance = balance;
    },
    SET_SIDEBET_JACKPOT: (state, jackpot) => {
      state.sidebetJackpot = jackpot;
    },
    SET_BET_FROM_TO(state, bets) {
      state.bet.from = bets.from;
      state.bet.to = bets.to;
    },
    SET_BET_WIN_CHANCE(state, winChance) {
      state.bet.winChance = winChance;
    },
    SET_BET_MULTIPLIER(state, multiplier) {
      state.bet.multiplier = multiplier;
    },
    SET_BET_PAYOUT(state, payout) {
      state.bet.payout = payout;
    },
    SET_ROLLING_STATE(state, rollingStatus) {
      state.diceRolling = rollingStatus;
    },
    SET_CURRENT_BET_UNIQUEID(state, uniqueID) {
      state.bet.uniqueid = uniqueID;
    },
    SET_CURRENT_BET_HASH(state, betHash) {
      state.bet.betHash = betHash;
    },
    SET_CURRENT_BET_BLOCKNUMBER(state, blockNumber) {
      state.bet.blockNumber = blockNumber;
    },
    SET_CURRENT_BET_TXID(state, txId) {
      state.bet.txId = txId;
    },
    SET_CURRENT_BET_EVENT_GAMBLER(state, eventGambler) {
      state.bet.eventGambler = eventGambler;
    },
    SET_CURRENT_BET_STARTED_TIMESTAMP(state, betStartedTimestamp) {
      state.bet.betStartedTimestamp = betStartedTimestamp;
    },
    SET_REFERAL_ID(state, referId) {
      state.referId = referId;
    },
    SET_CURRENT_BET_INTEGER_VALUES(state, integrerVals) {
      state.bet.integrerVals = integrerVals;
    },
    PUSH_TO_EXTRA_BETS(state, extraBet) {
      state.extraBetsToDisplayAtTopOfMyBets.push(extraBet);
    },
    SET_LUCKY_NUMBER(state, luckyNumber) {
      state.bet.luckyNumber = luckyNumber;
    },
    SET_ROLL_BUTTON_LABEL(state, rollButtonLabel){
      state.rollButtonLabel = rollButtonLabel;
    }
  },
  actions
});
