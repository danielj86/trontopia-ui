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
    totals: {
      myTotalWon: 0,
      myTotalToken: 0,
      myTotalToken2: 0,
      myTotalBets:0,
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
    SET_SOUND_STATE(state, soundIsOn) {
      state.soundIsOn = soundIsOn;
    }
  },
  actions
});
