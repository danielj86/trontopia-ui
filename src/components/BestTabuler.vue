<template>
  <div class="bets-tabuler-data">
    <div class="bets-tabs-dt">
      <ul class="nav nav-tabs">
        <li
          id="myBetTableBottom"
          :class="{active:$data.selectedTab == 1}"
          @click="$data.selectedTab=1"
        >
          <a data-toggle="tab">My Bets</a>
        </li>

        <li
          id="allBetTableButton"
          :class="{active:$data.selectedTab == 2}"
          @click="$data.selectedTab=2"
        >
          <a data-toggle="tab">All Bets</a>
        </li>

        <li
          id="highRollersTableBottom"
          :class="{active:$data.selectedTab == 3}"
          @click="$data.selectedTab=3"
        >
          <a data-toggle="tab">High Rollers</a>
        </li>

        <li
          id="rareWinsTableBottom"
          :class="{active:$data.selectedTab == 4}"
          @click="$data.selectedTab=4"
        >
          <a data-toggle="tab">Rare Wins</a>
        </li>

        <li
          id="allSideBetsTableBottom"
          :class="{active:$data.selectedTab == 5}"
          @click="$data.selectedTab=5"
        >
          <a data-toggle="tab">All Side Bets</a>
        </li>

        <li
          id="mySideBetsTableBottom"
          :class="{active:$data.selectedTab == 6}"
          @click="$data.selectedTab=6"
        >
          <a data-toggle="tab">My Side Bets</a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="bet1" class="tab-pane" :class="{active:$data.selectedTab == 1}">
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
              <li
                v-for="bet in $store.state.myBetsHistory"
                v-bind:key="bet.id"
                :class="{'dt-tbs':true, 'rowBoarderColorClass':true, 'safe':true}"
              >
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
        <div id="bet2" class="tab-pane" :class="{active:$data.selectedTab == 2}">
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
              <li
                class="dt-tbs"
                v-for="item in $data.allBets"
                :class="{safe:item.result, redalt:item.result == false}"
              >
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.timestamp}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.user.substring(20)}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.startNumber}} - {{item.endNumber}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.winningNumber}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>
                        {{item.bet}}
                        <span>TRX</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>{{item.payout}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="bet3" class="tab-pane" :class="{active:$data.selectedTab == 3}">
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
              <li
                class="dt-tbs"
                v-for="item in $data.highRollers"
                :class="{safe:item.result, redalt:item.result == false}"
              >
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.timestamp}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.user.substring(20)}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.startNumber}} - {{item.endNumber}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.winningNumber}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>
                        {{item.bet}}
                        <span>TRX</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>{{item.payout}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="bet4" class="tab-pane" :class="{active:$data.selectedTab == 4}">
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
                <li
                class="dt-tbs"
                v-for="item in $data.rareWins"
                :class="{safe:item.result, redalt:item.result == false}"
              >
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.timestamp}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.user.substring(20)}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.startNumber}} - {{item.endNumber}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.winningNumber}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>
                        {{item.bet}}
                        <span>TRX</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>{{item.payout}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="bet5" class="tab-pane" :class="{active:$data.selectedTab == 5}">
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
               <li
                class="dt-tbs"
                v-for="item in $data.allSideBets"
                :class="{safe:item.result, redalt:item.result == false}"
              >
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.timestamp}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.user.substring(20)}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.startNumber}} - {{item.endNumber}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th">
                      <p>{{item.winningNumber}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>
                        {{item.bet}}
                        <span>TRX</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th poit">
                      <p>{{item.payout}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="bet6" class="tab-pane" :class="{active:$data.selectedTab == 6}">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userService from "../services/userService";
import { async } from "q";

export default {
  name: "BestTabuler",
  props: {},
  data: function() {
    return {
      allBets: [],
      highRollers:[],
      allSideBets:[],
      rareWins:[],
      selectedTab: 2
    };
  },
  created: function() {
    let self = this;

    setInterval(async () => {
      let data = await userService.allBetsData();
      self.$data.allBets = data;
    }, 5000);

    setInterval(async () => {
      let data = await userService.highRollersData();
      self.$data.highRollers = data;
    }, 5000);

    setInterval(async () => {
      let data = await userService.rareWinsData();
      self.$data.rareWins = data;
    }, 5000);

    setInterval(async () => {
      let data = await userService.allSideBetsData();
      self.$data.allSideBets = data;
    }, 5000);



  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bets-tabs-dt li {
  cursor: pointer;
}
</style>
