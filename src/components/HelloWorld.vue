<template>
  <div>
    <!-- Preloader 
    <div id="preloader">
      <div id="status">
          <!--<video autoplay muted loop>
              <source src="assets/audio/preloader_v2.mp4" type="video/mp4">
    </video>-->
    <!--  </div>
    </div>
    -->

    <!-- Dividend Popup -->

    <DividendPopup/>

    <!-- End Dividend Popup -->

    <!-- Referrals Popup -->

    <RefrealsPopup />

    <!-- End Referrals Popup -->

    <!-- Referrals Popup -->

    <div id="unclaimedWinners" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content gradient-border">
          <!-- Modal Header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <img src="../assets/images/close-po.png" alt="#">
            </button>
            <center>
              <h5>Claim unclaimed winning</h5>
            </center>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <form class="text-left">
                  <div class="form-group">
                    <label for="finishBetGambler">User wallet :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="finishBetGambler"
                      aria-describedby="seed"
                      value
                    >
                  </div>
                  <div class="form-group">
                    <label for="finishBetUniqueID">Unique Bet ID:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="finishBetUniqueID"
                      aria-describedby="seed"
                      value
                    >
                  </div>
                  <div class="form-group">
                    <label for="finishBetUserSeed">User seed :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="finishBetUserSeed"
                      aria-describedby="seed"
                      value
                    >
                  </div>
                  <div class="form-group">
                    <label for="finishBetBlockNumber">Block number :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="finishBetBlockNumber"
                      aria-describedby="seed"
                      value
                    >
                  </div>
                  <div class="form-group">
                    <label for="finishBetParamsArray">Bet Parameters Array :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="finishBetParamsArray"
                      aria-describedby="seed"
                      value
                    >
                  </div>
                  <div class="with-bx container-fluid">
                    <div class="row">
                      <div class="col-xs-4 col-sm-3">
                        <div class="row">
                          <button type="button" class="btn btn-main" id="finishBetBtn">Claim</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-sm-12">
                <p style="margin-top: 20px;" title class="text-left">
                  <span title>
                    In rare circumstances; it is possible for a winning bet to not be finished fully.
                    <br>You can claim your winning bets that have not been paid to you by filling the information out above and clicking CLAIM.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- End Referrals Popup -->

    <!-- How to Play Popup -->

    <HowToPlay/>

    <!-- End How to Play Popup -->

    <div class="main-wrapper">
      <!-- Header  -->

      <Navigation/>

      <!-- End Header -->

      <div class="container">
        <!-- Head Lines -->
        <!-- COMPONENT: DICE HEADER -->
        <DiceHeader/>
        <!-- END COMPONENT: DICE HEADER -->
        <!-- End Head Lines -->

        <!-- Main Content -->

        <div class="main-cont">
          <div class="row" id="numView">
            <BettingBox/>
            <LeaderBoard/>
          </div>
        </div>
      </div>

      <!-- End Main Content -->

      <!-- Footer      -->

      <Footer/>

      <!-- End Footer -->
    </div>

    <div class="notifcatio-bx">
      <ul>
        <li id="sidebetWinNotify" style="display:none;">
          <div class="notify-bx">
            <div class="ic-nit">
              <img src="../assets/images/dimnd-1.png" alt>
            </div>

            <div class="noti-dt">
              <h6>Congratulations!</h6>

              <!-- <p>You won 125.95 TRX.</p>-->
              <p>
                <span id="sidebetWinUser">TWXch...bh882</span> has won the Sidebet Jackpot!
              </p>
              <p>
                Amount:
                <span id="sidebetWinAmount">100000</span>TRX
              </p>

              <a href="javascript:void(0);" class="close-no">
                <img src="../assets/images/close2.png" alt>
              </a>
            </div>
          </div>
        </li>

        <!-- <li>

                    <div class="notify-bx">

                        <div class="ic-nit">

                            <img src="images/dimnd-1.png" alt="">

                        </div>

                        <div class="noti-dt">

                            <h6>Well Played!</h6>

                            <p>You won 1,025.95 TRX.</p>



                            <a href="javascript:void(0);" class="close-no"><img src="images/close2.png" alt=""></a>

                        </div>

                    </div>

        </li>-->

        <!--<li class="alert-noti">

                    <div class="notify-bx">

                        <div class="ic-nit">

                            <img src="images/dimnd-2.png" alt="">

                        </div>

                        <div class="noti-dt">

                            <h6>So close!</h6>

                            <p>You lost 1,000 TOPIA.</p>



                            <a href="javascript:void(0);" class="close-no"><img src="images/close2.png" alt=""></a>

                        </div>

                    </div>

        </li>-->
      </ul>
    </div>

    <div id="fair" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content gradient-border">
          <!-- Modal Header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <img src="../assets/images/close-po.png" alt="#">
            </button>
            <center>
              <h5>Provably Fair Betting</h5>
            </center>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <form class="text-left">
                  <div class="form-group">
                    <label for="seeds">Current Seed (SHA256) :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cur_seeds"
                      aria-describedby="seed"
                      value
                      disabled="disabled"
                    >
                  </div>
                  <div class="form-group">
                    <label for="seeds">Enter Your Custom Seed:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="new_seeds"
                      aria-describedby="seed"
                      value
                    >
                  </div>
                  <div class="form-group">
                    <label for="seeds">New Seed (SHA256) :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="formated_seeds"
                      aria-describedby="seed"
                      value
                      disabled="disabled"
                    >
                  </div>
                  <div class="with-bx container-fluid">
                    <div class="row">
                      <div class="col-xs-4 col-sm-3">
                        <div class="row">
                          <button type="button" class="btn btn-main" id="new_seedValue">Update</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-sm-12">
                <p style="margin-top: 20px;" title class="text-left">
                  <span title>
                    All bets on TRONTOPIA are placed directly to our Smart Contracts on the blockchain. The wager results are verifiable on the blockchain by viewing the transaction ID's for your wagers.
                    <br>
                    <br>You can enter your own seed above, to be utilized for your wagers. This can be changed at your own will. If you do not enter your own seed, then a random seed will be used.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- For if user is not loged in and click on Roll Over button -->

    <div
      class="modal fade"
      id="not_log_in"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content gradient-border" style="background: rgba(0, 0, 0, 0.85);">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLongTitle" style="width: 100%;"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="font-size: 30px;color: #bbb!important;">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <p
                  title
                >Please login to your TRONLink wallet. If you do not have TRONLink wallet installed please visit http://u6.gg/gmc5D and download the chrome extension. (TronTopia is only availble using Chrome browser for the time being)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- For showing the DICE Rolling status -->
    <div
      class="modal"
      id="roll_status"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content gradient-border" style="background: rgba(0, 0, 0, 0.85);">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLongTitle" style="width: 100%;"></h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              id="rollPopClose"
            >
              <span aria-hidden="true" style="font-size: 30px;color: #bbb!important;">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <p title></p>
                <div id="rollStatus" style="font-size: 28px;text-align: center;"></div>
                <div id="roll_number" style="font-size: 28px;text-align: center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- For showing If user is not loged In -->
    <div
      class="modal"
      id="notSignIn"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            id="rollPopClose"
          >
            <img src="../assets/images/close-po.png" alt id="closeNotSignIn">
          </button>

          <div class="login-wrps">
            <img src="../assets/images/wel-pop.png" alt>
            <h3>Please Login to Tronlink</h3>

            <p>
              tronlink wallet installed please visit
              <a
                href="https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec"
              >Tronlink</a> and download the chrome extension.
            </p>
            <p>(trontopia is only availble using chrome browser for the time being)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import DiceHeader from "./DiceHeader";
import BettingBox from "./BettingBox";
import LeaderBoard from "./LeaderBoard";
import Footer from "./Footer";
import HowToPlay from "./HowToPlay";
import DividendPopup from "./DividendPopup";
import RefrealsPopup from './ReferalsPopup';

export default {
  name: "HelloWorld",
  components: {
    DividendPopup,
    RefrealsPopup,
    HowToPlay,
    Navigation,
    DiceHeader,
    BettingBox,
    LeaderBoard,
    Footer
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
