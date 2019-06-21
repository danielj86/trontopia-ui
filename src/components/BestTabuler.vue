<template>
  <div class="bets-tabuler-data">
    <div class="bets-tabs-dt">
      <ul class="nav nav-tabs">
        <li id="myBetTableBottom">
          <a data-toggle="tab" href="#bet1">My Bets</a>
        </li>

        <li id="allBetTableButton" class="active">
          <a data-toggle="tab" href="#bet2">All Bets</a>
        </li>

        <li id="highRollersTableBottom">
          <a data-toggle="tab" href="#bet3">High Rollers</a>
        </li>

        <li id="rareWinsTableBottom">
          <a data-toggle="tab" href="#bet4">Rare Wins</a>
        </li>

        <li id="allSideBetsTableBottom">
          <a data-toggle="tab" href="#bet5">All Side Bets</a>
        </li>

        <li id="mySideBetsTableBottom">
          <a data-toggle="tab" href="#bet6">My Side Bets</a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="bet1" class="tab-pane fade">
          <div class="text-center" style="color: #fff; padding: 60px;">' + data.msg + '</div>

          <div class="table-bets">
            <ul>
              <li class="head-at">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>Time</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>Player</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>Prediction</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>Lucky Number</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>Bets</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>Payout</p>
                    </div>
                  </div>
                </div>
              </li>
              <li v-for="bet in $store.state.myBetsHistory" v-bind:key="bet.id" :class="{'dt-tbs':true, 'rowBoarderColorClass':true, 'safe':true}">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>' + obj.timestamp + '</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>' + user + '</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>' + obj.startNumber + " - " + obj.endNumber + '</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>' + obj.winningNumber + '</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>
                        ' + obj.bet + '
                        <span>TRX</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>' + payout + '</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div id="bet2" class="tab-pane fade in active"></div>

        <div id="bet3" class="tab-pane fade"></div>

        <div id="bet4" class="tab-pane fade"></div>

        <div id="bet5" class="tab-pane fade"></div>

        <div id="bet6" class="tab-pane fade"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BestTabuler",
  props: {},
  mounted:()=>{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
