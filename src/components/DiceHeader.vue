<template>
  <div class="row">
    <div class="col-md-4 col-sm-5">
      <div class="headlines-box headlines-box-first dice-hedln">
        <div class="dice-nav">
          <center>
            <img src="../assets/images/ultimate_dice.png" alt height="45px">
          </center>
        </div>
      </div>
    </div>

    <div class="col-md-8 col-sm-7">
      
      <div class="headlines-box dice-hedln desktopmode">
        <div class="headline-bx dice-head">
          <p>BETS MADE</p>
          <label id="myBetVals">{{$store.state.totals.myTotalBets}}</label>

          <p>TOPIA</p>
          <label id="myTotalToken">{{$store.state.totals.myTotalToken}}</label>

          <p>Total Won</p>
          <label id="myTotalWon">{{$store.state.totals.myTotalWon}}</label>
          <p>
            <img v-if="$store.state.soundIsOn" src='../assets/images/sound_on.png' id="sound-icon" @click="toggleSound">
             <img v-if="!$store.state.soundIsOn" src='../assets/images/sound_off.png' id="sound-icon" @click="toggleSound">
          </p>
        </div>
      </div>

      <div class="headlines-box respon-mode">
        <div class="headline-bx">
          <a href="javascript:void(0);" class="openc">
            <p>BETS MADE</p>
            <label id="myBetVals2">Loading..</label>
          </a>
          <div class="sond">
            <img src="../assets/images/sound_on.png" id="sound-icon">
          </div>
        </div>

        <div class="show-items">
          <div class="headline-bx">
            <p>TOPIA</p>
            <label id="myTotalToken2">Loading..</label>
          </div>

          <div class="headline-bx">
            <p>Total Won</p>
            <label id="myTotalWon2">Loading..</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import SoundService from '../services/soundsService';

export default {
  name: "Header",
  props: {},
  computed:{},
  methods:{
    toggleSound(){
      SoundService.toggleSound();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
