<template>
<div id="refer" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content referrals-pop">
          <button type="button" class="close" data-dismiss="modal">
            <img src="../assets/images/close-po.png" alt>
          </button>

          <h6>Get rewarded just by referring your friends!</h6>

          <a href="./TRONTOPIAMarketingPack.zip" class="dwnld">download our marketing package here</a>

          <div class="refre-data">
            <p>
              We offer a lifetime referral rewards program. Just simply refer your friends and family, you will
              receive up to 0.30% of all their wins!
            </p>

            <p>You will receive the referral rewards automatically, and it will be withdrawable instantly.</p>

            <p>Copy your unique referral link below, and share!</p>
          </div>

          <div class="progress-step refer-progres">
            <h4>
              Current Level:
              <span id="ref-cur-lvl">Bronze Referral(0.20%)</span>
            </h4>

            <div class="referpr">
              <div class="icnbxon">
                <img id="ref-left-image" src="../assets/images/nut1.png" alt>
              </div>

              <div class="progress">
                <div
                  class="progress-bar"
                  id="referral_progress"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="max-width:0%"
                >
                  <span class="title">
                    <span id="ref_wager">0</span> /
                    <span id="ref_wager_to">100,000,000</span>
                  </span>
                </div>
              </div>

              <div class="icnbxon">
                <img id="ref-right-image" src="../assets/images/nut2.png" alt>
              </div>
            </div>

            <p id="till_what_reward_ref">Till Silver Referral(0.25%)</p>
          </div>

          <div class="refre-links">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <div class="link-bx">
                  <h6>Your personal referral link</h6>

                  <input type="text" name id="refLink" placeholder="https://trontopia.co" readonly>
                  <div class="tooltip">
                    <a
                      href="#"
                      class="btn-main"
                      style="background:#0CD6CF"
                      onclick="myFunction()"
                      onmouseout="outFunc()"
                    >
                      <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                      Copy Link
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="link-bx">
                  <h6 for="seeds">Referral bonus</h6>

                  <input
                    type="text"
                    name
                    placeholder="0 Topia"
                    id="my_bonus"
                    aria-describedby="seed"
                    value
                    disabled
                  >

                  <button
                    class="btn-main"
                    id="withdrawReferralBonus"
                    style="border: 0; background: #01f593"
                  >Withdraw</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "RefrealsPopup",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
