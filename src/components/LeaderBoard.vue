<template>
  <div class="col-lg-4 col-md-5 col-sm-12">
    <div id="chat-scroll" class="sider-bar">
      <ul class="nav nav-tabs" style="padding-top:10px;">
        <li v-bind:class="{'active':$store.state.leaderTabs.activeTab == 'leaders'}">
          <a data-toggle="tab" @click="$store.state.leaderTabs.activeTab = 'leaders'">Leaderboards</a>
        </li>

        <li v-bind:class="{'active':$store.state.leaderTabs.activeTab == 'chat'}">
          <a data-toggle="tab" @click="$store.state.leaderTabs.activeTab = 'chat'">Chat</a>
        </li>

        <li v-bind:class="{'active':$store.state.leaderTabs.activeTab == 'globalRank'}">
          <a data-toggle="tab" @click="$store.state.leaderTabs.activeTab = 'globalRank'">Global Rank</a>
        </li>
      </ul>

      <div class="tab-content">
        <div
          id="leaderboardTab"
          class="tab"
          v-show="$store.state.leaderTabs.activeTab == 'leaders'"
        >
          1
          <div class="king-wrp">
            <ul class="nav nav-tabs">
              <li>
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: -webkit-center;">
                    <span style="vertical-align: -webkit-baseline-middle;">
                      <span
                        style="display: block;font-size: 12px;color: #fff;text-transform: uppercase;letter-spacing: 9px;text-align: center; padding-left:12px"
                      >Side Bet</span>
                      <img
                        src="../assets/images/Cool Text - JACKPOT 319957269967239.png"
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
                      <span
                        id="sidebet-jackpot"
                        class="trx-value-in glow"
                      >{{$store.state.sidebetJackpot}}</span>

                      <span class="trx-text">TRX</span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>

            <ul class="nav nav-tabs">
              <li :class="{active:$store.state.topLeaders.activeTab == 'topian'}">
                <a
                  data-toggle="tab"
                  @click="$store.state.topLeaders.activeTab = 'topian'"
                >Top Topian</a>
              </li>
              <li :class="{active:$store.state.topLeaders.activeTab == 'miner'}">
                <a data-toggle="tab" @click="$store.state.topLeaders.activeTab = 'miner'">Top Miners</a>
              </li>
            </ul>

            <div class="tab-content">
              <div
                id="tab3"
                class="tab-pane fade in"
                style="height: 650px;"
                :class="{active:$store.state.topLeaders.activeTab == 'topian'}"
              >
                <div class="counter-bx">
                  <p>
                    Countdown:
                    <span id="demo">{{$store.state.dividendTimeout}}</span>
                    <br>
                    <strong>
                      Prize 0.5% of Dividend Pool
                      <br>Minimum 50 TRX Mainbet
                      Wager
                    </strong>
                  </p>
                </div>

                <div class="main-coutn" style="height: 567px;overflow-y: auto;">
                  <ul id="kingtopianLeaderboardX">
                    <li class="head-at">
                      <div class="row">
                        <div class="col-md-2 col-sm-2 col-xs-2">
                          <div class="head-th">
                            <p>Rank</p>
                          </div>
                        </div>
                        <div class="col-md-5 col-sm-5 col-xs-5">
                          <div class="head-th">
                            <p>Player</p>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                          <div class="head-th">
                            <p>Total Played</p>
                          </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-2">
                          <div class="head-th">
                            <p>Prize</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="dt-tbs" v-for="(item,index) in $data.topianLeaders">
                      <div class="row">
                        <div class="col-md-2 col-sm-2 col-xs-2">
                          <div class="head-th number-b act1" v-if="index == 0">
                            <img
                              src="../assets/images/ranks/leaders1.png"
                              height="30"
                              width="30"
                              alt
                            >
                          </div>
                          <div class="head-th number-b act2" v-if="index == 1">
                            <img
                              src="../assets/images/ranks/leaders2.png"
                              height="30"
                              width="30"
                              alt
                            >
                          </div>
                          <div class="head-th number-b act3" v-if="index == 2">
                            <img
                              src="../assets/images/ranks/leaders3.png"
                              height="30"
                              width="30"
                              alt
                            >
                          </div>
                          <div class="head-th number-b" v-if="index > 2">
                            <p>{{index+1}}</p>
                          </div>
                        </div>
                        <div class="col-md-5 col-sm-5 col-xs-5">
                          <div class="head-th">
                            <p
                              :style="{color:item.color}"
                            >{{item.user}} [Lvl {{(item.level == 9999) ? "MOD" : item.level}}]</p>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                          <div class="head-th">
                            <p>{{item.trxplayed}} TRX</p>
                          </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-2">
                          <div class="head-th poit">
                            <p>
                              0
                              <span>TRX</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <h6>Data fetched every minute</h6>
                </div>
              </div>

              <div id="tab4" class="tab-pane fade">
                <div class="counter-bx">
                  <p>
                    Countdown:
                    <span id="demo2">{{$store.state.dividendTimeout}}</span>
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

              <div
                id="tab5"
                class="tab-pane"
                :class="{active:$store.state.topLeaders.activeTab == 'miner'}"
              >
                <div class="counter-bx">
                  <p>
                    Total Minted :
                    <span
                      id="minedTotalTokan"
                    >{{$store.state.tokenMinters.totalSupply}}</span>
                    <br>
                    <strong>
                      Total Minted :
                      <span id="minedToken">{{$store.state.tokenMinters.totalMinted}}</span>
                    </strong>
                    <br>Prizes paid out every 100K TOPIA mined
                  </p>
                </div>

                <div class="main-coutn" style="height: 567px;overflow-y: auto;">
                  <ul id="minersLeaderboard">
                    <li class="head-at">
                      <div class="row">
                        <div class="col-md-2 col-sm-2 col-xs-2">
                          <div class="head-th">
                            <p>Rank</p>
                          </div>
                        </div>
                        <div class="col-md-5 col-sm-5 col-xs-5">
                          <div class="head-th">
                            <p>Player</p>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                          <div class="head-th">
                            <p>Total Mined</p>
                          </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-2">
                          <div class="head-th">
                            <p>Prize</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="dt-tbs" v-for="(item,index) in $data.topMinters">
                      <div class="row">
                        <div class="col-md-2 col-sm-2 col-xs-2">
                          <div class="head-th number-b act1" v-if="index ==0">
                            <img
                              src="../assets/images//ranks/leaders1.png"
                              height="30"
                              width="30"
                              alt
                            >
                          </div>
                          <div class="head-th number-b act2" v-if="index ==1">
                            <img
                              src="../assets/images//ranks/leaders2.png"
                              height="30"
                              width="30"
                              alt
                            >
                          </div>
                          <div class="head-th number-b act3" v-if="index ==2">
                            <img
                              src="../assets/images//ranks/leaders3.png"
                              height="30"
                              width="30"
                              alt
                            >
                          </div>
                          <div class="head-th number-b" v-if="index > 2">
                            <p>{{index+1}}</p>
                          </div>
                        </div>
                        <div class="col-md-5 col-sm-5 col-xs-5">
                          <div class="head-th">
                            <p
                              :style="{color:item.color}"
                            >{{item.user}} [Lvl {{(item.level == 9999) ? "MOD" : item.level}}]</p>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                          <div class="head-th">
                            <p>{{item.topia}} TOPIA</p>
                          </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-2">
                          <div class="head-th poit">
                            <p>
                              {{item.reward}}
                              <span>TRX</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <h6>Data fetched every minute</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="chatTab"
          class="active in tab"
          v-show="$store.state.leaderTabs.activeTab == 'chat'"
        >
          <div class="tab-content">
            2
            <div
              id="tab7"
              class="chet-bx scroll-touch tab-pane fade in active"
              style="height: 732px;overflow-x: hidden; overflow-y: auto;"
            >
              <ul id="chatDiv">
                <li v-for="item in $data.chatTable" class="reci" v-bind:key="item.id">
                  <div>
                    <!-- All image types in DOM for webpack to load it all to /dist -->
                    <img
                      src="../assets/images/levels/100.png"
                      v-if="item.image.length && item.image  == '100.png'"
                    >
                    <img
                      src="../assets/images/levels/blue1.png"
                      v-if="item.image.length && item.image  == 'blue1.png'"
                    >
                    <img
                      src="../assets/images/levels/blue2.png"
                      v-if="item.image.length && item.image  == 'blue2.png'"
                    >
                    <img
                      src="../assets/images/levels/blue3.png"
                      v-if="item.image.length && item.image  == 'blue3.png'"
                    >
                    <img
                      src="../assets/images/levels/green1.png"
                      v-if="item.image.length && item.image  == 'green1.png'"
                    >
                    <img
                      src="../assets/images/levels/green2.png"
                      v-if="item.image.length && item.image  == 'green2.png'"
                    >
                    <img
                      src="../assets/images/levels/green3.png"
                      v-if="item.image.length && item.image  == 'green3.png'"
                    >
                    <img
                      src="../assets/images/levels/mods.png"
                      v-if="item.image.length && item.image  == 'mods.png'"
                    >
                    <img
                      src="../assets/images/levels/modsbk.png"
                      v-if="item.image.length && item.image  == 'modsbk.png'"
                    >
                    <img
                      src="../assets/images/levels/orange1.png"
                      v-if="item.image.length && item.image  == 'orange1.png'"
                    >
                    <img
                      src="../assets/images/levels/orange2.png"
                      v-if="item.image.length && item.image  == 'orange2.png'"
                    >
                    <img
                      src="../assets/images/levels/orange3.png"
                      v-if="item.image.length && item.image  == 'orange3.png'"
                    >
                    <img
                      src="../assets/images/levels/purple1.png"
                      v-if="item.image.length && item.image  == 'purple1.png'"
                    >
                    <img
                      src="../assets/images/levels/purple2.png"
                      v-if="item.image.length && item.image  == 'purple2.png'"
                    >
                    <img
                      src="../assets/images/levels/purple3.png"
                      v-if="item.image.length && item.image  == 'purple2.png'"
                    >
                    <strong>{{item.username}} [Lvl {{item.level}}]:</strong>
                    {{item.message}}
                  </div>
                  <div>
                    <span class="chat-time">{{item.time}}</span>
                  </div>
                </li>
              </ul>
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

            <button id="sendChat" @click="sendChat($event)">
              <img src="../assets/images/send.png">
            </button>
          </div>
        </div>

        <div
          id="globalRankTab"
          v-show="$store.state.leaderTabs.activeTab == 'globalRank'"
          class="chet-bx scroll-touch tab"
          style="height: 813px; overflow-x: hidden;overflow-y: auto;padding: 0;"
        >
          <div class="main-coutn">
            <ul id="globalLeaderboard">
              <li class="head-at">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th no-padding">
                      <p>Rank</p>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="head-th no-padding text-center">
                      <p>Player</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <div class="head-th no-padding">
                      <p>Wagered</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="dt-tbs" v-for="(item,index) in $data.leaderBoardTable">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-2">
                    <div class="head-th number-b">
                      <img width="30" v-if="index == 0" src="../assets/images/ranks/1.png">
                      <img width="30" v-if="index == 1" src="../assets/images/ranks/2.png">
                      <img width="30" v-if="index == 2" src="../assets/images/ranks/3.png">
                      <img
                        src="../assets/images/levels/100.png"
                        v-if="index > 2 && item.image.length && item.image  == '100.png'"
                      >
                      <img
                        src="../assets/images/levels/blue1.png"
                        v-if="index > 2 && item.image.length && item.image  == 'blue1.png'"
                      >
                      <img
                        src="../assets/images/levels/blue2.png"
                        v-if="index > 2 && item.image.length && item.image  == 'blue2.png'"
                      >
                      <img
                        src="../assets/images/levels/blue3.png"
                        v-if="index > 2 && item.image.length && item.image  == 'blue3.png'"
                      >
                      <img
                        src="../assets/images/levels/green1.png"
                        v-if="index > 2 && item.image.length && item.image  == 'green1.png'"
                      >
                      <img
                        src="../assets/images/levels/green2.png"
                        v-if="index > 2 && index > 2 && item.image.length && item.image  == 'green2.png'"
                      >
                      <img
                        src="../assets/images/levels/green3.png"
                        v-if="index > 2 && item.image.length && item.image  == 'green3.png'"
                      >
                      <img
                        src="../assets/images/levels/mods.png"
                        v-if="index > 2 && item.image.length && item.image  == 'mods.png'"
                      >
                      <img
                        src="../assets/images/levels/modsbk.png"
                        v-if="index > 2 && item.image.length && item.image  == 'modsbk.png'"
                      >
                      <img
                        src="../assets/images/levels/orange1.png"
                        v-if="index > 2 && item.image.length && item.image  == 'orange1.png'"
                      >
                      <img
                        src="../assets/images/levels/orange2.png"
                        v-if="index > 2 && item.image.length && item.image  == 'orange2.png'"
                      >
                      <img
                        src="../assets/images/levels/orange3.png"
                        v-if="index > 2 && index > 2 && item.image.length && item.image  == 'orange3.png'"
                      >
                      <img
                        src="../assets/images/levels/purple1.png"
                        v-if="index > 2 && item.image.length && item.image  == 'purple1.png'"
                      >
                      <img
                        src="../assets/images/levels/purple2.png"
                        v-if="index > 2 && index > 2 && item.image.length && item.image  == 'purple2.png'"
                      >
                      <img
                        src="../assets/images/levels/purple3.png"
                        v-if="index > 2 && item.image.length && item.image  == 'purple2.png'"
                      >
                      <p v-if="index > 2 && item.image.length == 0">{{index}}</p>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="head-th">
                      <p :style="{color:item.color}">{{item.user}} [Lvl {{item.level}}]</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <div class="head-th">
                      <p>{{item.total}} TRX</p>
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
import { setInterval } from "timers";

export default {
  name: "LeaderBoard",
  props: {},
  data: function() {
    return {
      leaderBoardTable: {},
      chatTable: {},
      topianLeaders: {},
      topMinters: {}
    };
  },
  methods: {
    async sendChat(e) {
      if (global.level == undefined || global.level == 0) {
        alertify.error(
          "You must wager 300,000 TRX to achieve Level 1 and access the Chat Feature."
        );
        return true;
      }
      var isBanned = false;
      function myCallback(response) {
        result = response;
        console.log("Inside ajax: " + result);
        if (result == true) {
          alertify.error("You are Muted/Banned.");
          isBanned = true;
          return false;
        }
      }

      $.ajax({
        type: "GET",
        url: "api/userBannedMuted.php?address=" + global.userAddress,
        datatype: "json",
        statusCode: {
          400: function() {
            console.log("400 Bad Request");
            return false;
          },
          403: function() {
            console.log("403 Forbidden");
            return false;
          },
          404: function() {
            console.log("404 Not Found");
            return false;
          },
          500: function() {
            console.log("500 Internal Server Error");
          },
          502: function() {
            console.log("502 Bad request");
            return false;
          },
          503: function() {
            console.log("503 Service Unavailable");
            return false;
          },
          504: function() {
            console.log("504 Gateway Timeout");
            return false;
          }
        },
        success: myCallback
      });

       if(global.userSigned==true){
    var message = $('#message').val();
    if(message==''){
        return true;
    }
    if(message!='' || message.length==0){
       
        var user,useraddress;
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc);
        if(global.username!=''){
            user = global.username;
            useraddress = global.userAddress;
        }else{
            user = getUserAddress(global.userAddress);
            useraddress = global.userAddress;
        }
        

        var postData = 'useraddress='+ useraddress +'&user='+ user + '&message='+message;
        //var d = new Date();
        var h = nd.getHours();
        var m = nd.getMinutes();
        if(m<10){m='0'+m;}
        var s = nd.getSeconds();
        if(s<10){s='0'+s;}
        var time = h+':'+m+':'+s;
        myChatTime = time;
        myLastChat = message;
        if(message!=''){
            var image = '';
            if(global.level==9999){
                level = " [Lvl MOD]";
             }else{
                level = " [Lvl " + global.level + "]";
             }
            username = '<span style="color:'+global.color+'">'+user+level +' : </span>';
            if(global.image_url!=''){
                image = '<img src="'+global.image_url+'" height="40" width="40">';
            }
              var str = '<li id="divsndID" class="snd"><div>'+image+'<strong>'+username+'</strong>'+message+'</div> <div> <span class="chat-time">'+ time + '</span> </div></li>';

            //var str = '<li class="snd"><div><strong>'+user+':</strong>'+message+'</div> <div><span class="chat-time">'+ time + '</span> </div></li>';

            var ban = message.substring(0,4);
            var muted = message.substring(0,5);
            if(ban=='/ban' || muted=='/mute'){
               $('#message').val('');
                alertify.success('User Banned/Muted.');
            }else{
                $('#chatDiv').append(str);
                $('#tab7').scrollTop($('#chatDiv').height());     
            }
            
        }
        $.ajax({
            url: "api/sendchat.php",
            type: "post",
            data: postData,
            statusCode: {
                400: function() {
                    console.log( "400 Bad Request" );
                    return false;
                },
                403: function(){
                    console.log('403 Forbidden');
                    return false;
                },
                404: function() {
                  console.log( "404 Not Found" );
                  return false;
                },
                500: function() {
                    console.log("500 Internal Server Error");
                },
                502: function() {
                  console.log( "502 Bad request" );
                  return false;
                },
                503: function() {
                  console.log( "503 Service Unavailable" );
                  return false;
                },
                504: function() {
                  console.log( "504 Gateway Timeout" );
                  return false;
                }
        
              },
            success: function(data) {
                data = JSON.parse(data);
                if(data.result==true){
                    $('#sendChat').attr('disabled',true);
                    myLastChatID.push(data.lastid);
                    setTimeout(function(){
                        $('#sendChat').attr('disabled',false);
                    },3000);
                }

                if(data.result==false){
                    if(data.msg!=''){
                        alertify.error(data.msg);
                    }
                    $('#divsndID').remove();
                }
                
            }
        }); 
        $('#message').val('');
    }
}else{
    var hex = tronWeb.toHex('trontopia');
    hex = hex.substring(2);
    var signed = await tronWeb.trx.sign(hex);
    if(signed!=''){
        global.userSigned = true;
        $('#sendChat').trigger('click');
    }
}
    }
  },
  mounted: async function() {
    let self = this;

    await userService.getDivCountdown();

    setInterval(async () => {
      let topiaLeaders = await userService.getKingTopians();
      self.$data.topianLeaders = topiaLeaders;
    }, 6000);

    setInterval(async () => {
      let topMinters = await userService.getTokenMinters();
      self.$data.topMinters = topMinters;
    }, 6000);

    setInterval(async () => {
      let table = await userService.getLeaderBoard();
      self.$data.leaderBoardTable = table;
    }, 3000);

    setInterval(async () => {
      let chatTable = await userService.getChat();
      self.$data.chatTable = chatTable;
    }, 3000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav.nav-tabs li {
  cursor: pointer;
}
</style>
