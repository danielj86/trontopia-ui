<template>
  <div class="col-lg-8 col-md-7 col-sm-12">
    <div class="rang-bx" id="number">
      <div class="row">
        <div class="col-12 col-xs-8 col-md-8 slider-padding-left">
          <div class="box predictbox" style="padding-top: 10px">
            <input type="hidden" id="startVal" v-bind:value="$store.state.bet.from">
            <input type="hidden" id="endVal" v-bind:value="$store.state.bet.to">
            <span>{{$store.state.bet.from}} - {{$store.state.bet.to}}</span>
            <p>Prediction</p>
          </div>
        </div>
        <div class="col-12 col-xs-4 col-md-4 lucky-no-padding">
          <div class="box luckybox" style="padding-top: 10px;">
            <span id="rollNum">
              <span id="lucky_no">{{$store.state.bet.luckyNumber}}</span>
            </span>
            <!--<p id="bouncingLetterStatic">Lucky Number</p>-->
            <span
              id="bouncingLetterStatic_mobile"
              class="bouncing-latter bouncing-latter-mobile"
              style="font-size: 16px; line-height: 5px; position: relative;top: 14px;color: #fff;letter-spacing: 0.7px;"
              title
            >
              <br>Lucky#
            </span>
            <span
              id="bouncingLetterStatic1"
              class="bouncing-latter bouncing-latter-desktop"
              style="font-size: 16px; line-height: 5px; position: relative;top: 14px;color: #fff;letter-spacing: 0.7px;"
              title
            >
              <br>Lucky Number
            </span>
            <!-- 
            <span
              id="bouncingLetterMooving"
              class="bouncing-latter"
              style="font-size: 16px; line-height: 16px;display: none;position: absolute;top: 106px;left: 24%;font-weight: 500;"
              title
            >
              <br>
              <span class="ud_bounce ud_1">L</span>
              <span class="ud_bounce ud_2">u</span>
              <span class="ud_bounce ud_3">c</span>
              <span class="ud_bounce ud_4">k</span>
              <span class="ud_bounce ud_5">y</span>
              <span class="ud_bounce ud_6">N</span>
              <span class="ud_bounce ud_7">u</span>
              <span class="ud_bounce ud_8">m</span>
              <span class="ud_bounce ud_9">b</span>
              <span class="ud_bounce ud_10">e</span>
              <span class="ud_bounce ud_11">r</span>
            </span>-->

            <span
              id="bouncingLetterMooving_mobile_view"
              class="bouncing-latter"
              style="font-size: 16px; line-height: 16px;display: none;position: absolute;top: 62px;left: 15%;font-weight: 500;"
              title
            >
              <br>
              <span class="ud_bounce ud_1">L</span>
              <span class="ud_bounce ud_2">u</span>
              <span class="ud_bounce ud_3">c</span>
              <span class="ud_bounce ud_4">k</span>
              <span class="ud_bounce ud_5">y</span>
              <span class="ud_bounce ud_61">#</span>
              <!--<span class="ud_bounce ud_7">u</span>
                                          <span class="ud_bounce ud_8">m</span>
                                          <span class="ud_bounce ud_9">b</span>
                                          <span class="ud_bounce ud_10">e</span>
              <span class="ud_bounce ud_11">r</span>-->
            </span>
          </div>
        </div>
      </div>
      <div id="slider-range" class="price-filter-range" name="rangeInput"></div>
    </div>

    <div class="main-bet">
      <div class="row">
        <div class="col-md-5 col-sm-4 col-xs-7">
          <label>TRX Balance</label>
          <br>

          <div class="form-group">
            <div class="ic-dim">
              <img src="../assets/images/stone.png" alt>
            </div>

            <div class="frm-gt">
              <div class="text-center" id="bounce_num_div">
                <span class="bounce_number colorGreen" id="bounce_num" style></span>
                <span class="bounce_number colorGreen" id="bounce_num2" style></span>
              </div>
              <!--<div id="trx">Loading...</div>-->
              <input
                type="text"
                id="trxBalance"
                style
                name="number"
                class="form-control"
                disabled
                v-bind:value="$store.state.myTRXBalance"
              >

              <span class="trx-txt">trx</span>
            </div>
          </div>
        </div>

        <form class="col-md-7 col-sm-8 col-xs-5">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <label>auto betting</label>

              <div class="dic-bs">
                <div class="toogle-bx">
                  <label class="switch">
                    <input type="checkbox" class="actdctbtn" id="autoCallRoll">

                    <span class="slider round"></span>
                  </label>

                  <p>deactivated</p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <label class="roll-m">Roll</label>

              <input
                type="button"
                class="btn-main roll-btn"
                v-bind:value="$store.state.rollButtonLabel"
                id="rollDice"
                v-bind:disabled="$store.state.diceRolling"
                @click="rollDice()"
              >
              <!-- <input type="button" class="btn-main roll-btn" value="rolling..." id="rollBtn"> -->
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="main-bet">
      <label>
        <i class="fa fa-question-circle">
          <div class="ques-bx">
            <p>"Main bet" wager is required in order to roll. A minimum main bet wager of 50 TRX is required.</p>
          </div>
        </i>Main bet
      </label>

      <div class="row">
        <div class="col-md-5 col-sm-4">
          <div class="form-group">
            <div class="ic-dim">
              <img src="../assets/images/stone.png" alt>
            </div>

            <div class="frm-gt">
              <input
                type="number"
                autocomplete="off"
                class="form-control"
                @keyup="betAmountChanged()"
                id="betAmt"
                v-model="$store.state.bet.amount"
                aria-describedby="emailHelp"
                name="number"
                placeholder="0.00"
              >

              <span>trx</span>
            </div>
          </div>
        </div>

        <div class="col-md-7 col-sm-8">
          <div class="selct-size">
            <ul>
              <li>
                <a href="javascript:void(0);" @click="updateBetAmount('min')" unselectable="on">
                  <label class="checkbx">
                    <input type="radio" name="r1">

                    <span class="checkmark"></span>
                  </label>
                  min
                </a>
              </li>

              <li>
                <a href="javascript:void(0);" @click="updateBetAmount('half')" unselectable="on">
                  <label class="checkbx">
                    <input type="radio" name="r1">

                    <span class="checkmark"></span>
                  </label>
                  1/2
                </a>
              </li>

              <li>
                <a href="javascript:void(0);" @click="updateBetAmount('double')" unselectable="on">
                  <label class="checkbx">
                    <input type="radio" name="r1">

                    <span class="checkmark"></span>
                  </label>
                  x2
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" @click="updateBetAmount('max')" unselectable="on">
                  <label class="checkbx">
                    <input type="radio" name="r1">

                    <span class="checkmark"></span>
                  </label>
                  max
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5 col-sm-4">
          <label>payout on win</label>

          <div class="form-group">
            <div class="ic-dim">
              <img src="../assets/images/stone.png" alt>
            </div>

            <div class="frm-gt" aria-describedby="emailHelp">
              <input
                type="text"
                id="payout"
                name
                v-bind:value="$store.state.bet.payout"
                placeholder="0.00"
                class="form-control"
                disabled
              >

              <span>trx</span>
            </div>
          </div>
        </div>

        <div class="col-md-7 col-sm-8">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <label>multiplier</label>

              <div class="form-group" aria-describedby="emailHelp">
                <input
                  type="text"
                  v-bind:value="$store.state.bet.multiplier"
                  name
                  id="multiplier"
                  class="form-control"
                  disabled
                >
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <label>win chance</label>

              <div class="form-group" aria-describedby="emailHelp">
                <input
                  type="text"
                  name
                  id="winChance"
                  v-bind:value="$store.state.bet.winChance"
                  class="form-control"
                  disabled
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-bet">
      <div class="accordion active">
        <label>
          <i class="fa fa-question-circle">
            <div class="ques-bx">
              <p>
                "Side Bet" wager is OPTIONAL and has a minimum of 100 TRX.
                <br>You may select one, and only one side bet option and will be paid the appropriate multiplier for the respective side bet selected.
                <br>
                <br>Odd = Lucky Number is Odd
                <br>Even = Lucky Number is Even
                <br>Yin = First digit > Second digit
                <br>Yang = Second digit > First digit
                <br>Bang = First digit = Second digit
                <br>Zero = Lucky Number is 00
                <br>
                <br>Progressive Jackpot: See Details in Leaderboard Panel!
              </p>
            </div>
          </i>side bet
        </label>

        <!-- <a href="#" class="minimize"><i class="fa fa-minus"></i></a> -->
      </div>

      <div class="panel mz-mnix" style="max-height: 368px;">
        <div class="row">
          <div class="col-md-5 col-sm-4">
            <div class="form-group">
              <div class="ic-dim">
                <img src="../assets/images/stone.png" alt>
              </div>

              <div class="frm-gt" aria-describedby="emailHelp">
                <input
                  type="number"
                  name="number"
                  placeholder="0.00"
                  id="sidebetAmount"
                  class="form-control"
                  v-model="$store.state.bet.sidebetAmount"
                  @keyup="calculateSideBetPayout()"
                >

                <span>trx</span>
              </div>
            </div>
          </div>

          <div class="col-md-7 col-sm-8">
            <div class="od-ec">
              <div id="sidebet">
                <ul>
                  <li>
                    <a
                      href="javascript:void(0);"
                      id="odd"
                      class="btn"
                      @click="setSideBetType(5)"
                      :class="{selected:$store.state.bet.sidebetType == 5}"
                      style="font-size: 12px"
                    >
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      odd
                    </a>
                  </li>

                  <li>
                    <a
                      href="javascript:void(0);"
                      id="even"
                      class="btn"
                      @click="setSideBetType(6)"
                      :class="{selected:$store.state.bet.sidebetType == 6}"
                      style="font-size: 12px"
                    >
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      even
                    </a>
                  </li>

                  <li>
                    <a
                      href="javascript:void(0);"
                      id="yin"
                      class="btn"
                      @click="setSideBetType(1)"
                      :class="{selected:$store.state.bet.sidebetType == 1}"
                      style="font-size: 12px"
                    >
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      yin
                    </a>
                  </li>

                  <li>
                    <a
                      href="javascript:void(0);"
                      id="yang"
                      class="btn"
                      @click="setSideBetType(2)"
                      :class="{selected:$store.state.bet.sidebetType == 2}"
                      style="font-size: 12px"
                    >
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      yang
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      id="bang"
                      class="btn"
                      @click="setSideBetType(3)"
                      :class="{selected:$store.state.bet.sidebetType == 3}"
                      style="font-size: 12px"
                    >
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      bang
                    </a>
                  </li>

                  <li>
                    <a
                      href="javascript:void(0);"
                      id="zero"
                      class="btn"
                      @click="setSideBetType(4)"
                      :class="{selected:$store.state.bet.sidebetType == 4}"
                      style="font-size: 12px"
                    >
                      <label class="checkbx">
                        <input type="radio" name="r2">
                        <span class="checkmark"></span>
                      </label>
                      zero
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5 col-sm-4">
            <label>side bet payout on win</label>

            <div class="form-group">
              <div class="ic-dim">
                <img src="../assets/images/stone.png" alt>
              </div>

              <div class="frm-gt">
                <input
                  type="text"
                  name="number"
                  aria-describedby="emailHelp"
                  placeholder
                  id="sidebet-payout"
                  value="0"
                  v-model="this.$store.state.bet.sideBetPayout"
                  class="form-control"
                  disabled
                >

                <span>trx</span>
              </div>
            </div>
          </div>

          <div class="col-md-7 col-sm-8">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <label>multiplier</label>

                <div class="form-group" aria-describedby="emailHelp">
                  <input
                    type="text"
                    name
                    id="sidebet-multiplier"
                    class="form-control"
                    v-model="$data.sideBetMultiplier"
                    disabled
                  >
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <label>win chance</label>

                <div class="form-group" aria-describedby="emailHelp">
                  <input
                    type="text"
                    id="sidebet-winChance"
                    class="form-control"
                    v-model="$data.setSideBeWinChance"
                    disabled
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";

import constants from "../constants";
import TextHelper from "../helpers/textHelper";
import BettingService from "../services/bettingService";
import eventBus from "../eventBus/eventBus";
import UIHelper from "../helpers/UIHelpers";
import SoundService from "../services/soundsService";
import options from "../options";
import TronService from "../services/tronService";

let rollInterval = {};

export default {
  name: "BettingBox",
  props: {},
  data: function() {
    return {
      rollInterval: {},
      diceRolling: false,
      sideBetMultiplier: "",
      setSideBeWinChance: ""
    };
  },
  methods: {
    calculateSideBetPayout: function() {
      var sidebetAmount = this.$store.state.bet.sidebetAmount;

      let res = parseInt(sidebetAmount) * this.$data.sideBetMultiplier;
      res = res.toString();
      let decimalPointindex = res.indexOf(".");
      if (decimalPointindex != -1) {
        res = res.slice(0, decimalPointindex + 3);
      }
      this.$store.state.bet.sideBetPayout = res;
    },
    disableSlider: function(disabled) {
      const el = document.getElementById("slider-range");
      jQuery(el).slider({ disabled: disabled });
    },
    rollDice: async function() {
      // this.disableSlider(true);

      this.$store.state.bet.luckyNumber = "00";
      $("#lucky_no").removeClass("win");
      $("#lucky_no").removeClass("loose");

      await BettingService.rollDice();
    },
    betAmountChanged: function() {
      const MAX_BET_AMOUNT = options.bets.MAX_BET_AMOUNT;
      const betAmt = this.$store.state.bet.amount;

      if (isNaN(betAmt)) {
        this.$alertify.error("Input must be Numeric");
        BettingService.setBetPayout(0);
        return false;
      } else if (betAmt < 0) {
        this.$alertify.error("Wager amount must be Positive");
        this.$store.state.bet.amount = 50;
        BettingService.setBetPayout(0);
        return false;
      } else {
        if (betAmt > MAX_BET_AMOUNT) {
          this.$alertify.error("Max Bet Amount is " + MAX_BET_AMOUNT);
          this.$store.state.bet.amount = 50;
        }
      }

      this.getMultiplierValue(
        this.$store.state.bet.from,
        this.$store.state.bet.to
      );
    },
    updateBetAmount: function(val) {
      if (val == "min") {
        this.$store.state.bet.amount = options.bets.MIN_BET_AMOUNT;
      } else if (val == "max") {
        this.$store.state.bet.amount = options.bets.MAX_BET_AMOUNT;
      } else if (val == "double") {
        let doubleAmount = this.$store.state.bet.amount * 2;
        if (doubleAmount > options.bets.MAX_BET_AMOUNT)
          this.$store.state.bet.amount = options.bets.MAX_BET_AMOUNT;
        else this.$store.state.bet.amount = doubleAmount;
      } else if (val == "half") {
        let halfAmount = this.$store.state.bet.amount / 2;
        if (halfAmount < options.bets.MIN_BET_AMOUNT)
          this.$store.state.bet.amount = options.bets.MIN_BET_AMOUNT;
        else this.$store.state.bet.amount = halfAmount;
      }

      this.betAmountChanged();
    },
    getMultiplierValue: function(start, end) {
      let self = this;
      var differ = parseInt(end) - parseInt(start);

      if (differ == 0) {
        differ = 1;
      } else if (differ == 1) {
        differ = 2;
      } else {
        differ = differ + 1;
      }
      var winChance = differ;

      BettingService.setWinChance(winChance + "%");

      $.each(constants.multiplierJSON, function(key, value) {
        if (differ == value.win_val) {
          var multiplier = value.value;

          BettingService.setMultiplier(multiplier + " x");

          let fixedPayOut = parseInt(self.$store.state.bet.amount) * multiplier;

          BettingService.setBetPayout(
            TextHelper.number_to_2decimals(fixedPayOut)
          );
        }
      });
    },
    rollLuckNumber() {
      let self = this;

      if (this.$data.diceRolling == false) {
        this.$data.diceRolling = true;
        window.rollIntervalID = window.setInterval(() => {
          let num = self.$store.state.bet.luckyNumber * 1;
          num += 1;

          if (num.toString() >= "99") num = "0";
          if (num < 10) num = "0" + num;

          self.$store.state.bet.luckyNumber = num;
        }, 60);
      }
    },
    stopRollLuckNumber(winningNumber) {
      window.clearInterval(window.rollIntervalID);

      //from current point to zero
      while (this.$store.state.bet.luckyNumber != "00") {
        let tempnum = this.$store.state.bet.luckyNumber * 1;
        tempnum += 1;

        if (tempnum >= "100") tempnum = "0";
        if (tempnum < 10) tempnum = "0" + tempnum;
        this.$store.state.bet.luckyNumber = tempnum;
      }

      for (let i = 0; i < winningNumber; i++) {
        let num = this.$store.state.bet.luckyNumber * 1;
        num += 1;

        if (num.toString() >= "99") num = "0";
        if (num < 10) num = "0" + num;

        this.$store.state.bet.luckyNumber = num;
      }

      this.$store.state.bet.luckyNumber = winningNumber;

      let isWin =
        winningNumber >= this.$store.state.bet.from &&
        winningNumber <= this.$store.state.bet.to;

      if (isWin) {
        //for win
        $("#lucky_no").addClass("win");

        let mainBetWin = this.$store.state.bet.mainBetWin;

        let rollWinAmt = "+" + mainBetWin;

        $("#bounce_num").css({ color: "#01f593", top: "-40px" });
        $("#bounce_num").text(rollWinAmt + " TRX");

        try {
          SoundService.playWinSound();
        } catch (e) {
          console.error("Failed to play win sound:", e);
        }
      } else {
        //for loss
        $("#lucky_no").addClass("loose");
        let rollWinAmt = "-" + this.$store.state.bet.amount;

        $("#bounce_num").css({ color: "#ff006c", top: "-40px" });
        $("#bounce_num").text(rollWinAmt + " TRX");

        try {
          SoundService.playLossSound();
        } catch (e) {
          console.error("Failed to play loss sound:", e);
        }
      }

      $("#bounce_num").show();
      $("#bounce_num").animate({ top: "0px", opacity: "0" }, 3000);

      this.$data.diceRolling = false;
    },
    setSideBetType(type) {
      if (this.$store.state.bet.sidebetAmount == 0)
        this.$store.state.bet.sidebetAmount = 100;
      this.$data.sideBetMultiplier = constants.sideBetMultiplier[type];
      this.$data.setSideBeWinChance = constants.sideBetWinChance[type];
      this.$store.commit("SET_SIDE_BET_TYPE", type);
      this.calculateSideBetPayout();
    }
  },
  mounted: function() {
    let self = this;

    eventBus.$on("betStarted", this.rollLuckNumber);
    eventBus.$on("haveWinningNumber", this.stopRollLuckNumber);

    eventBus.$on("diceRollState", function(diceRollState) {
      self.disableSlider(diceRollState);

      if (diceRollState) {
        //clear style for bounce num
        setTimeout(function() {
          $("#bounce_num").removeAttr("style");
          $("#bounce_num2").removeAttr("style");
        }, 3000);

        //is mobile
        if (UIHelper.isMobile()) {
          $("#bouncingLetterStatic_mobile").hide();
          $("#bouncingLetterMooving_mobile_view").show();
        } else {
          if (UIHelper.getWindowSize().width < 758) {
            $("#bouncingLetterStatic_mobile").hide();
            $("#bouncingLetterMooving_mobile_view").show();
          } else {
            $("#bouncingLetterStatic").hide();
            $("#bouncingLetterStatic_mobile").hide();
            $("#bouncingLetterMooving").show();
          }
        }
      } else {
        $("#bouncingLetterStatic").show();
        $("#bouncingLetterMooving").hide();
      }
    });

    let sliderEl = document.getElementById("slider-range");
    let start, end;

    jQuery.ui.slider(
      {
        range: true,
        orientation: "horizontal",
        min: 0,
        max: 99,
        values: [25, 75],
        step: 1,
        slide: function(event, ui) {
          if (ui.values[1] - ui.values[0] > 94) {
            if (ui.values[1] > 94) {
              let val_0 = ui.values[1] - 94;
              $("#slider-range").slider("values", 0, val_0);
            }
            if (ui.values[0] < 5) {
              let val_1 = 94 + ui.values[0];
              ui.values[1] = val_1;
              $("#slider-range").slider("values", 1, val_1);
            }
          }

          ui.values[0] >= 10
            ? (start = ui.values[0])
            : (start = "0" + ui.values[0]);
          ui.values[1] >= 10
            ? (end = ui.values[1])
            : (end = "0" + ui.values[1]);

          BettingService.setBetFromTo(start, end);
          self.getMultiplierValue(start, end);
        }
      },
      sliderEl
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#lucky_no.win {
  color: rgb(1, 245, 147);
  text-shadow: rgb(1, 245, 147) 0px 0px 10px;
}

#lucky_no.loose {
  color: rgb(255, 0, 108);
  text-shadow: rgb(255, 0, 108) 0px 0px 10px;
}

#sidebet li a.selected {
  color: #0cd6cf !important;
  background-color: transparent !important;
}
</style>