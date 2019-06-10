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

    <DividendPopup/>
    <RefrealsPopup/>
    <HowToPlay/>
    <FairPopup/>

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
            <BestTabuler/>
          </div>
        </div>

        <!-- End Main Content -->

        <!-- Footer      -->

        <Footer/>
      </div>

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
      </ul>
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
    <LogedOutPopup/>
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
import RefrealsPopup from "./ReferalsPopup";
import LogedOutPopup from "./LogedOutPopup";
import FairPopup from "./FairPopup";
import BestTabuler from "./BestTabuler";

import TronService from "../services/tronService";
import LocalCache from "../cache/localCache";
import SoundService from "../services/soundsService";
import UserService from "../services/userService";
import BettingService from "../services/bettingService";

import UltimateDiceContract from "../contracts/ultimateDiceContract";
import TokenContract from "../contracts/tokenContract";
import DividendContract from "../contracts/dividendContract";

import eventBus from "../eventBus/eventBus";

export default {
  name: "HelloWorld",
  components: {
    FairPopup,
    LogedOutPopup,
    DividendPopup,
    RefrealsPopup,
    HowToPlay,
    Navigation,
    DiceHeader,
    BettingBox,
    LeaderBoard,
    BestTabuler,
    Footer
  },
  mounted: async function() {

    eventBus.$on("alertify", function(msgobj) {
      if (msgobj.type == "error") {
        this.$alertify.error(msgobj.msg);
      }
    });
    
    //clear sidebets
    LocalCache.clearSideBets();

    //set sounds preferences
    SoundService.initSound();

    UltimateDiceContract.watchEvents();

    try {
      //wait 5 secs for tronweb or else catch
      await TronService.waitForTronWeb(5000);

      TronService.onUserAddressChange(() => {
        alert("address changed");
      });

      let userAddress = await TronService.getMyAddress();
      let userAddressHex = await TronService.getMyAddressHex();

      this.$store.commit("SET_USER_ADDRESS", userAddress);
      this.$store.commit("SET_USER_ADDRESS_HEX", userAddressHex);
      this.$store.commit("SET_IS_LOGGEDIN", true);

      //get user token balance
      let userBalance = await TokenContract.balanceOf(userAddress);
      UserService.setMyTotalTokens(userBalance);

      /* For getting user available tokens to  */
      let userAvailableToken = await TokenContract.getAvailabletoWithdrawTOPIA();
      UserService.setMyAvaliableTokens(userAvailableToken);

      //fetch TRX balance
      await TronService.fetchMyTRXBalance();

      //update sidebet jackpot size
      let jackpot = await UltimateDiceContract.currentSideBetJackpotSize();
      BettingService.setBettingSidePotSize(jackpot);
    } catch (ex) {
      console.log(JSON.stringify(ex));
      this.$store.commit("SET_IS_LOGGEDIN", false);
      this.$store.commit("SET_USER_ADDRESS_HEX", "");
      this.$store.commit("SET_USER_ADDRESS", "");
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
