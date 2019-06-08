<template>
  <div class="row">
    <div class="col-md-4 col-sm-5">
      <div class="headlines-box headlines-box-first dice-hedln">
        <div class="dice-nav">
          <center>
            <img
              src="../assets/images/ultimate_dice.png"
              alt=""
              height="45px"
            />
          </center>
        </div>
      </div>
    </div>

    <div class="col-md-8 col-sm-7">
      <div class="headlines-box dice-hedln desktopmode">
        <div class="headline-bx dice-head">
          <p>BETS MADE</p>
          <label id="myBetVals">Loading..</label>

          <p>TOPIA</p>
          <label id="myTotalToken">Loading..</label>

          <p>Total Won</p>
          <label id="myTotalWon">Loading..</label>
          <p><img src="../assets/images/sound_on.png" id="sound-icon" /></p>
        </div>
      </div>

      <div class="headlines-box respon-mode">
        <div class="headline-bx">
          <a href="javascript:void(0);" class="openc"
            ><p>BETS MADE</p>
            <label id="myBetVals2">Loading..</label></a
          >
          <div class="sond">
            <img src="../assets/images/sound_on.png" id="sound-icon" /><a
              href="javascript:void(0);"
              class="openc"
              ><i class="fa fa-angle-down"></i
            ></a>
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
export default {
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
