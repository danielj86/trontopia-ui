import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions/actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userAddress: "",
    userAddressHex: "",
    loggedIn: false,
    soundIsOn: false,
    myAvaliableToken: 0.0,
    myTRXBalance: 0.0,
    totals: {
      myTotalWon: 0,
      myTotalToken: 0,
      myTotalToken2: 0,
      myTotalBets: 0,
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
    }
  },
  actions
});
