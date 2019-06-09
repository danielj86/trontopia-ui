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
              <span id="lucky_no">00</span>
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
              id="bouncingLetterStatic"
              class="bouncing-latter bouncing-latter-desktop"
              style="font-size: 16px; line-height: 5px; position: relative;top: 14px;color: #fff;letter-spacing: 0.7px;"
              title
            >
              <br>Lucky Number
            </span>

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
            </span>

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

              <input type="button" class="btn-main roll-btn" value="roll" id="rollDice">
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
                type="text"
                autocomplete="off"
                class="form-control"
                id="betAmt"
                v-model="$store.state.bet.amount"
                aria-describedby="emailHelp"
                value="50"
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
                <a href="javascript:void(0);" onclick="updateBetAmount('min')" unselectable="on">
                  <label class="checkbx">
                    <input type="radio" name="r1">

                    <span class="checkmark"></span>
                  </label>
                  min
                </a>
              </li>

              <li>
                <a href="javascript:void(0);" onclick="updateBetAmount('hlf')" unselectable="on">
                  <label class="checkbx">
                    <input type="radio" name="r1">

                    <span class="checkmark"></span>
                  </label>
                  1/2
                </a>
              </li>

              <li>
                <a href="javascript:void(0);" onclick="updateBetAmount('dbl')" unselectable="on">
                  <label class="checkbx">
                    <input type="radio" name="r1">

                    <span class="checkmark"></span>
                  </label>
                  x2
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="updateBetAmount('max')" unselectable="on">
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
                  type="text"
                  name="number"
                  placeholder="0.00"
                  id="sidebetAmount"
                  class="form-control"
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
                    <a href="javascript:void(0);" id="odd" class="btn" style="font-size: 12px">
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      odd
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);" id="even" class="btn" style="font-size: 12px">
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      even
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);" id="yin" class="btn" style="font-size: 12px">
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      yin
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);" id="yang" class="btn" style="font-size: 12px">
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      yang
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" id="bang" class="btn" style="font-size: 12px">
                      <label class="checkbx">
                        <input type="radio" name="r2">

                        <span class="checkmark"></span>
                      </label>
                      bang
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);" id="zero" class="btn" style="font-size: 12px">
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
                    value
                    disabled
                  >
                  <input
                    style="border:2px solid #18cae6"
                    type="hidden"
                    id="hidden_sidebetmultiplier"
                    value
                    disabled
                  >
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <label>win chance</label>

                <div class="form-group" aria-describedby="emailHelp">
                  <input type="text" id="sidebet-winChance" class="form-control" value disabled>
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

export default {
  name: "BettingBox",
  props: {},
  methods: {
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
      var winChance = parseInt(differ);

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
    }
  },
  mounted: function() {
    let sliderEl = document.getElementById("slider-range");
    let start, end;
    let self = this;
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
</style>