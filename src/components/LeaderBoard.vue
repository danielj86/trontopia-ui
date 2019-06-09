<template>
  <div class="col-lg-4 col-md-5 col-sm-12">
    <div id="chat-scroll" class="sider-bar">
      <ul class="nav nav-tabs" style="padding-top:10px;">
        <li>
          <a data-toggle="tab" href="#tab1">Leaderboards</a>
        </li>

        <li class="active">
          <a data-toggle="tab" href="#tab9">Chat</a>
        </li>

        <li>
          <a data-toggle="tab" href="#tab6">Global Rank</a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="tab1" class="tab-pane fade">
          <div class="king-wrp">
            <ul class="nav nav-tabs">
              <li>
                <div class="row">
                  <!--<div class="col-md-4 col-sm-4 col-xs-4" style="padding: 0;text-align: -webkit-right;">
                                            		<img class="jackpotbag" src="images/JackpotBag.png" style="width: 85%;">
                  </div>-->
                  <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: -webkit-center;">
                    <span style="vertical-align: -webkit-baseline-middle;">
                      <span
                        style="display: block;font-size: 12px;color: #fff;text-transform: uppercase;letter-spacing: 9px;text-align: center; padding-left:12px"
                      >Side Bet</span>
                      <!--                                             			<span style="display: block;font-size: 24px;text-transform: uppercase;font-style: italic;font-weight: 900;background: linear-gradient(to bottom, #ffff00 0%, #ffa500 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-family: fantasy;letter-spacing: 3px;">Jackpot</span> -->
                      <img
                        src="images/Cool Text - JACKPOT 319957269967239.png"
                        alt="jackpot bag"
                        style="width: 80%;"
                      >
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <!--                                                 		<input class="form-control trx-value-in" value="123,780" style="position: relative;"> -->
                    <span style="position: relative;top: 0px;">
                      <span
                        id="sidebet-span-info"
                        class="trx-value-lable"
                        style="color: #fff;position: relative;top: 0px;display: block;font-size: 13px; text-align: left;"
                      >
                        <i class="fa fa-question-circle">
                          <div class="ques-bx" style="width: 190px;">
                            <p>
                              PROGRESSIVE JACKPOT
                              <br>
                              <br>Side Bet wager
                              <strong>REQUIRED</strong>.
                              <br>EVERY ROLL CAN WIN
                              <br>
                              <br>100 TRX Minimum
                              <br>
                              <br>On Win:
                              <br>5% Player
                              <br>5% to Dividends
                              <br>90% to next Jackpot
                              <br>Odds: 1 in 50,000
                            </p>
                          </div>
                        </i>
                        Enable Side Bet to Win:
                      </span>
                      <span id="sidebet-jackpot" class="trx-value-in glow">{{$store.state.sidebetJackpot}}</span>

                      <span class="trx-text">TRX</span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>

            <ul class="nav nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="#tab3">Top Topian</a>
              </li>
              <li>
                <a data-toggle="tab" href="#tab5">Top Miners</a>
              </li>
              <!--<li><a data-toggle="tab" href="#tab4" disabled>Lucky Ones</a></li>-->
            </ul>

            <div class="tab-content">
              <div id="tab3" class="tab-pane fade in active" style="height: 650px;">
                <div class="counter-bx">
                  <p>
                    Countdown:
                    <span id="demo">00:00:00</span>
                    <br>
                    <strong>
                      Prize 0.5% of Dividend Pool
                      <br>Minimum 50 TRX Mainbet
                      Wager
                    </strong>
                  </p>
                </div>

                <div class="main-coutn" style="height: 567px;overflow-y: auto;">
                  <ul id="kingtopianLeaderboardX"></ul>

                  <h6>Data fetched every minute</h6>
                </div>
              </div>

              <div id="tab4" class="tab-pane fade">
                <div class="counter-bx">
                  <p>
                    Countdown:
                    <span id="demo2">00:00:00</span>
                    <br>
                    <strong>
                      Prize 0.5% of Dividend Pool
                      <br>Minimum 100 TRX Side Bet
                      Wager
                    </strong>
                  </p>
                </div>

                <div class="main-coutn" style="height: 567px;overflow-y: auto;">
                  <ul id="sideBetWarriorsLeaderboard"></ul>

                  <h6>Data fetched every minute</h6>
                </div>
              </div>

              <div id="tab5" class="tab-pane fade">
                <div class="counter-bx">
                  <p>
                    Total Minted :
                    <span id="minedTotalTokan"></span>
                    <br>
                    <strong>
                      Total Minted :
                      <span id="minedToken">0</span>
                    </strong>
                    <br>Prizes paid out every 100K TOPIA mined
                  </p>
                </div>

                <div class="main-coutn" style="height: 567px;overflow-y: auto;">
                  <ul id="minersLeaderboard"></ul>

                  <h6>Data fetched every minute</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="tab9" class="tab-pane fade active in">
          <div class="tab-content">
            <div
              id="tab7"
              class="chet-bx scroll-touch tab-pane fade in active"
              style="height: 732px;overflow-x: hidden; overflow-y: auto;"
            >
              <!-- <ul>
                                            <li class="reci" style="border-radius: 15px 15px 15px 15px;text-align: center;">Coming Soon!</li>
              </ul>-->
              <ul id="chatDiv"></ul>

              <!--<div class="write-msg">

                                            <input id="message" type="text" name="" placeholder="Write something..." class="form-control" maxlength = "150">

                                            <button id="sendChat"><img src="images/send.png" alt=""></button>

              </div>-->
            </div>
          </div>
          <div class="write-msg">
            <input
              id="message"
              type="text"
              name
              placeholder="Write something..."
              class="form-control"
              maxlength="150"
            >

            <button id="sendChat">
              <img src="../assets/images/send.png" alt>
            </button>
          </div>
        </div>

        <div
          id="tab6"
          class="chet-bx scroll-touch tab-pane fade"
          style="height: 813px; overflow-x: hidden;overflow-y: auto;padding: 0;"
        >
          <div class="main-coutn">
            <ul id="globalLeaderboard"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>

 
</template>
<script>
export default {
  name: "LeaderBoard",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
