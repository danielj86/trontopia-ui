<template>
 <div id="dividend" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content dividend-pop">
          <button type="button" class="close" data-dismiss="modal">
            <img src="../assets/images/close-po.png" alt>
          </button>

          <div class="logo-bx">
            <span>
              <img src="../assets/images/topia-min.png" alt> TOPIA
            </span>
          </div>

          <h6>
            Stage:
            <span id="stageNumber">1</span> (Play
            <span id="stageTRX">833</span> TRX to mine 1 TOPIA)
          </h6>

          <div class="progress-step">
            <div class="progress">
              <div
                class="progress-bar"
                id="topia-progress"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span class="title" id="ante-jd-text">Loading..</span>
              </div>
            </div>
          </div>

          <h6 class="step-note">
            Next Stage:
            <span id="stageNumber2">2</span> (Play
            <span id="stageTRX2">1000</span> TRX to mine 1 TOPIA)
          </h6>

          <div class="available-bx">
            <h3>Available Dividends</h3>

            <input type="text" style="color: #01f593" placeholder="0 TRX" id="dividends" disabled>

            <p>
              A total of
              <span id="totalFrozenTopia">0</span> TOPIA is frozen across the network - You will receive
              <span id="approxUserDividends">0</span> TRX Dividends Countdown:
              <span id="dividendCountdown"></span>
            </p>
            <p id="frzDiv" style="display:none;">
              A total of
              <span id="myUnFrozenTopia"></span> is being Unfrozen. Unfreeze Countdown:
              <span id="unFreezeCountDown"></span>
            </p>
          </div>

          <!--             new row -->
          <div class="row" style="padding-top: 30px;">
            <div class="col-md-9 col-sm-9 col-xs-12 progress-bar-left-padding">
              <div class="progress-step refer-progres">
                <h4>
                  Current Level:
                  <span id="freeze-tier-lvl">Bronze Freeze(75% Reward)</span>
                </h4>

                <div class="referpr">
                  <div class="icnbxon">
                    <img
                      id="div-left-image"
                      src="../assets/images/freeze1.png"
                      alt
                      style="width: 70%;"
                    >
                  </div>

                  <div class="progress">
                    <div
                      class="progress-bar"
                      id="freeze-progress"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="max-width:0%"
                    >
                      <span class="title">
                        <span id="days">0</span> /
                        <span id="days-to-complete">0</span>
                      </span>
                    </div>
                  </div>

                  <div class="icnbxon">
                    <img
                      id="div-right-image"
                      src="../assets/images/freeze2.png"
                      alt
                      style="width: 70%;"
                    >
                  </div>
                </div>

                <p id="till_what_reward">Till Silver Freeze(85% Reward)</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12">
              <a
                href="#"
                class="btn btn-success"
                id="upgrade"
                style="background: #0cd6cf;padding: 8px 15px;border-radius: 10px;font-size: 18px;font-weight: 500;color: #fff;display: block;width: 100%;text-align: center;margin-top: 35px;border-color: #0cd6cf"
              >UPGRADE</a>
            </div>
          </div>

          <!--             new row -->

          <!-- 				<div class="progress-step refer-progres" style="padding-top: 30px;">

                   <h4>Current Level: <span id="freeze-tier-lvl">Bronze Freeze(75% Reward)</span></h4>

                    <div class="referpr">

                        <div class="icnbxon">

                            <img id="div-left-image" src="images/freeze1.png" alt="" style="width: 70%;">

                        </div>

                        <div class="progress">

                            <div class="progress-bar" id="freeze-progress" role="progressbar" aria-valuenow="80" aria-valuemin="0"

                                aria-valuemax="100" style="max-width:0%">

                                <span class="title"><span id="days">0</span> / <span id="days-to-complete">0</span></span>

                            </div>

                        </div>

                        <div class="icnbxon">

                            <img id="div-right-image" src="images/freeze2.png" alt="" style="width: 70%;">

                        </div>

                    </div>

                    <p id="till_what_reward">Till Silver Freeze(85% Reward)</p>

          </div>-->

          <div class="withdr-bx">
            <div class="row">
              <div class="col-md-3 col-sm-3">
                <div class="with-bx with-bx1">
                  <!--  <h5 style="text-align: left;color: #0cd6cf;margin-top: 16px; font-size: 20px;">
                                	<img src="images/topia.png" alt="" style="width: 10%;margin-right: 6px;display: inline-block;" />  
                                	<span id="myAvailableToken" style="color: #fff;"></span>
                                	TOPIA
                  </h5>-->
                  <h5>WITHDRAW DIVIDEND</h5>
                  <input type name id="myAvailableDividend" placeholder="0.00" disabled>
                  <a
                    href="#"
                    class="btn-main"
                    style="background: #ef0c0c"
                    id="withdrawTrxBtn"
                  >Withdraw</a>
                </div>
              </div>
              <div class="col-md-3 col-sm-3">
                <div class="with-bx with-bx1">
                  <h5>WITHDRAW TOPIA</h5>
                  <!--	<h5 style="text-align: left;color: #e80505; font-size: 20px;">
                                 	<img src="images/tron_logo.png" alt="tron logo" style="width: 10%;margin-right: 6px;display: inline-block;" /> 
                                	<span id="myAvailableDividend" style="color: #fff;">0</span>
                                	TRX
                  </h5>-->
                  <input type name id="myAvailableToken" placeholder="0.00" disabled>
                  <a
                    href="#"
                    class="btn-main"
                    style="background: #01f593"
                    id="withdrawTopiaBtn"
                  >Withdraw</a>
                </div>
              </div>

              <div class="col-md-3 col-sm-3">
                <div class="with-bx">
                  <h5>
                    <!--<i class="fa fa-question-circle"></i>-->
                    FREEZE TOPIA
                  </h5>

                  <input type name id="myAvailableToken2" placeholder="0 Topia" disabled>

                  <a href="#" class="btn-main frebtn" id="freezeTopia">Freeze</a>
                </div>
                <!--                             <p>* TOPIA will be frozen for 24 hours.</p> -->
              </div>

              <div class="col-md-3 col-sm-3">
                <div class="with-bx no-ar">
                  <h5>FROZEN TOPIA</h5>

                  <input
                    type
                    name
                    id="myFreezeToken"
                    placeholder="0 Topia"
                    style="color: #0cd6cf;"
                    disabled
                  >

                  <a
                    href="#"
                    class="btn-main"
                    id="unfreezeTopia"
                    style="color: #0cd6cf;background: #ffffff;"
                  >Unfreeze</a>
                </div>
                <p style="text-align: center;">*The unfreeze process cannot be cancelled*</p>
              </div>
            </div>
          </div>

          <img src="../assets/images/divi-img.png" alt class="divi-img">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "DividendPopup",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>