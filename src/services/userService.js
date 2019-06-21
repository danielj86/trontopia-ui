import store from '../store';
import HTTP from '../helpers/HTTP';
import constants from '../constants';
import DividentContract from '../contracts/dividendContract';

class UserHelper {

    static async getgameStats() {
        let betsWinResult = await HTTP.GET("https://www.trontopia.co/api/getBetsWin.php");
        store.commit('SET_TOTAL_BETS',{
            totalbets:data.totalbets,
            totalWin:data.totalWin
        });
    }


    static getMultiplier(start, end) {
        let differ = parseInt(end) - parseInt(start);
        let _returnValue;
        differ = differ + 1;


        for (let i = 0; i < constants.multiplierJSON.length; i++) {
            if (differ == constants.multiplierJSON[i].win_val) {
                _returnValue = constants.multiplierJSON[i].value;
            }
        }

        return _returnValue;
    }

    static async getDivCountdown() {
        let timeRes = await HTTP.GET("https://www.trontopia.co/api/gettime.php");
        var countDownDate = timeRes;
        var x = setInterval(function () {
            // Get todays date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            if (distance == 0) { location.reload(); }
            //comment line no 793 to remvoe 80 hours countdown and remove comment from line 794
            var hours = parseInt(Math.abs((distance / 36e5)));
            //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));                
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (seconds < 10) {
                seconds = '0' + seconds;
            }


            store.state.dividendTimeout = hours + ": " + minutes + ": " + seconds;;

            // // Output the result in an element with id="demo"
            // document.getElementById("demo").innerHTML = hours + ": " + minutes + ": " + seconds;
            // document.getElementById("demo2").innerHTML = hours + ": " + minutes + ": " + seconds;
            // document.getElementById("dividendCountdown").innerHTML = hours + ": " + minutes + ": " + seconds;

            // // If the count down is over, write some text 
            // if (distance < 0) {
            //     clearInterval(x);
            //     document.getElementById("demo").innerHTML = "EXPIRED";
            //     document.getElementById("demo2").innerHTML = "EXPIRED";
            //     document.getElementById("dividendCountdown").innerHTML = "EXPIRED";
            // }
        }, 1000);
    }

    static async getLeaderBoard() {
        let leaderBoardRes = await HTTP.GET("https://www.trontopia.co/api/getleaderboard.php");
        let data = leaderBoardRes.data;
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            if (item.image.length > 0) {
                item.image = item.image.replace('images/levels/', '');
            }
        }

        return data;
        // if(leaderBoardRes.result){
        //     let leaderboardData = leaderBoardRes.data;
        //     for(let i=0;i<leaderboardData.length;i++){
        //         let item = leaderboardData[i];

        //         let user = item.user;
        //         let image = item.image;
        //         let color = item.color;
        //         let level = item.level;
        //         if (level == 9999) {
        //             level = " [Lvl MOD]";
        //         } else {
        //             level = " [Lvl " + obj.level + "]";
        //         }
        //     }
        // }


        // $.get("api/getleaderboard.php", function (data, status) {
        //     data = JSON.parse(data);
        //     if (data.result == true) {
        //         var leaderboardHtml = '<li class="head-at"> <div class="row">  <div class="col-md-2 col-sm-2 col-xs-2">      <div class="head-th no-padding">   <p>Rank</p>   </div>   </div>   <div class="col-md-6 col-sm-6 col-xs-6">    <div class="head-th no-padding text-center">         <p>Player</p>     </div>      </div>     <div class="col-md-4 col-sm-4 col-xs-4">   <div class="head-th no-padding">     <p>Wagered</p>  </div>     </div>     </div>  </li>';
        //         var counterX = 0;
        //         var leaderboardData = data.data;

        //         $.each(leaderboardData, function (key, obj) {
        //             key = parseInt(key) + 1;
        //             var user = obj.user;
        //             var image = obj.image;
        //             var color = obj.color;
        //             var level = obj.level;
        //             if (level == 9999) {
        //                 level = " [Lvl MOD]";
        //             } else {
        //                 level = " [Lvl " + obj.level + "]";
        //             }

        //             user = '<span style="color:' + color + '">' + user + level + ' </span>';
        //             if (image != '') {
        //                 image = '<img src="' + image + '" height="30" width="30">';
        //             }
        //             if (key == 1) {
        //                 key = '<img src="images/ranks/1.png" height="30" width="30">';
        //                 //key += image;
        //                 leaderboardHtml += ' <li class="dt-tbs"> <div class="row">    <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th number-b act1">    ' + key + ' </div>  </div>   <div class="col-md-6 col-sm-6 col-xs-6">      <div class="head-th">   <p> ' + user + ' </p>    </div>     </div>  <div class="col-md-4 col-sm-4 col-xs-4">   <div class="head-th">   <p>' + obj.total + ' TRX</p>    </div>    </div>  </div>   </li> ';
        //             } else if (key == 2) {
        //                 key = '<img src="images/ranks/2.png" height="30" width="30">';
        //                 //key += image;
        //                 leaderboardHtml += ' <li class="dt-tbs"> <div class="row">    <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th number-b act1">    ' + key + ' </div>  </div>   <div class="col-md-6 col-sm-6 col-xs-6">      <div class="head-th">   <p> ' + user + ' </p>    </div>     </div>  <div class="col-md-4 col-sm-4 col-xs-4">   <div class="head-th">   <p>' + obj.total + ' TRX</p>    </div>    </div>  </div>   </li> ';
        //             } else if (key == 3) {
        //                 key = '<img src="images/ranks/3.png" height="30" width="30">';
        //                 //key += image;
        //                 leaderboardHtml += ' <li class="dt-tbs"> <div class="row">    <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th number-b act1">    ' + key + ' </div>  </div>   <div class="col-md-6 col-sm-6 col-xs-6">      <div class="head-th">   <p> ' + user + ' </p>    </div>     </div>  <div class="col-md-4 col-sm-4 col-xs-4">   <div class="head-th">   <p>' + obj.total + ' TRX</p>    </div>    </div>  </div>   </li> ';
        //             } else {
        //                 key = image;
        //                 leaderboardHtml += ' <li class="dt-tbs"> <div class="row">    <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th number-b act1">    ' + key + ' </div>  </div>   <div class="col-md-6 col-sm-6 col-xs-6">      <div class="head-th">   <p> ' + user + ' </p>    </div>     </div>  <div class="col-md-4 col-sm-4 col-xs-4">   <div class="head-th">   <p>' + obj.total + ' TRX</p>    </div>    </div>  </div>   </li> ';
        //             }

        //             counterX++;
        //         });

        //         $("#globalLeaderboard").html(leaderboardHtml);
        //     } else {
        //         $('#globalLeaderboard').html(data.msg);
        //     }
        // });

    }

    static async getChat() {

        let chatReponse = await HTTP.GET("https://www.trontopia.co/api/getchat.php?id=" + store.state.lastChatId);

        if (chatReponse.result) {
            let chatData = chatReponse.data;
            chatData.reverse();

            for (let i = 0; i < chatData.length; i++) {
                let item = chatData[i];
                if (item.image.length > 0) {
                    item.image = item.image.replace('images/levels/', '');
                }
            }

            return chatData;
        }

        return null;
    }

    static async mybsidebetsData() {
        if (mysidebetsData_running) return;
        mysidebetsData_running = true;

        try {
            //$("#bet6").empty();
            var userAddress = global.userAddressHex;
            userAddress = userAddress.substring(2);
            $.get("https://www.trontopia.co/api/mysidebets.php?user=" + userAddress, function (data, status) {
                try {
                    data = JSON.parse(data);
                    if (data.result == true) {
                        var resultking = data.data;

                        var rowBoarderColorClass;
                        var mySideBetsTableHTML = ' <div class="table-bets"><ul>    <li class="head-at"><div class="row">   <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Time</p>      </div>    </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Player</p>     </div>     </div>  <div class="col-md-2 col-sm-2 col-xs-2">   <div class="head-th">  <p>Prediction</p>     </div>  </div>   <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th">   <p>Lucky Number</p>     </div>   </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Bets</p>     </div>    </div>    <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">      <p>Payout</p>        </div>     </div>   </div>   </li>';

                        $.each(resultking, function (key, obj) {
                            var result = obj.result;
                            if (result == "true") {
                                rowBoarderColorClass = "safe";
                                payout = obj.winamount / 1000000;
                                payout = payout.toFixed(2);
                                //payout = payout.toString(); 
                                //payout = payout.slice(0, (payout.indexOf("."))+3);
                            }
                            else {
                                rowBoarderColorClass = "redalt";
                                payout = '-' + obj.bet;
                            }


                            let user = getUserAddress(tronWeb.address.fromHex(obj.user));
                            mySideBetsTableHTML += '<li class="dt-tbs ' + rowBoarderColorClass + '"><div class="row"><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.timestamp + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + user + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.sidebet + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.winningNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + obj.bet + ' <span>TRX</span></p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + payout + ' <span>TRX</span></p></div></div></div></li>';
                        });

                        mySideBetsTableHTML += '</ul></div>';

                        $("#bet6").html(mySideBetsTableHTML);

                    }
                    else {
                        $("#bet6").html('<div class="text-center" style="color: #fff; padding: 60px;">' + data.msg + '</div>');
                    }
                }
                catch (e) {
                    console.error(e);
                    console.error("Failed to parse mysidebets.php, retrying in 2 seconds...");
                }
                mysidebetsData_running = false;
            });
        }
        catch (e) {
            console.error(e);
            console.error("Failed to fetch mysidebets.php, retrying in 2 seconds...");
            setTimeout(mybsidebetsData, 2000);
            mysidebetsData_running = false;
        }
    }

    static async allSideBetsData() {
        if (allSideBetsData_running) return;
        allSideBetsData_running = true;

        try {
            $.get("api/allsidebets.php", function (data, status) {
                try {
                    data = JSON.parse(data);
                    if (data.result == true) {
                        var resultking = data.data;

                        var rowBoarderColorClass;
                        var allSideBetsTableHTML = ' <div class="table-bets"><ul>    <li class="head-at"><div class="row">   <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Time</p>      </div>    </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Player</p>     </div>     </div>  <div class="col-md-2 col-sm-2 col-xs-2">   <div class="head-th">  <p>Prediction</p>     </div>  </div>   <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th">   <p>Lucky Number</p>     </div>   </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Bets</p>     </div>    </div>    <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">      <p>Payout</p>        </div>     </div>   </div>   </li>';

                        $.each(resultking, function (key, obj) {
                            var result = obj.result;
                            if (result == "true") {
                                rowBoarderColorClass = "safe";
                                payout = obj.winamount / 1000000;
                                payout = payout.toFixed(2);
                                //payout = payout.toString(); 
                                //payout = payout.slice(0, (payout.indexOf("."))+3);
                                payout += " <span>TRX</span>";
                            } else {
                                rowBoarderColorClass = "redalt";
                                payout = '-';
                            }

                            let user = getUserAddress(tronWeb.address.fromHex(obj.user));
                            if (obj.bet != 0) {

                                allSideBetsTableHTML += '<li class="dt-tbs ' + rowBoarderColorClass + '"><div class="row"><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.timestamp + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + user + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.sidebet + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.winningNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + obj.bet + ' <span>TRX</span></p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + payout + ' </p></div></div></div></li>';

                            }
                        });

                        allSideBetsTableHTML += '</ul></div>';

                        $("#bet5").html(allSideBetsTableHTML);

                    } else {

                        $("#bet5").html('<div class="text-center" style="color: #fff; padding: 60px;">' + data.msg + '</div>');
                    }
                }
                catch (e) {
                    console.error(e);
                    console.error("Failed to parse all side bets data");
                }
                allSideBetsData_running = false;
            });
        }
        catch (e) {
            console.error(e);
            console.error("Failed to fetch all side bets data");
            allSideBetsData_running = false;
        }
    }

    static async rareWinsData() {
        if (rareWinsData_running) return;
        rareWinsData_running = true;

        try {
            $.get("api/rarewins.php", function (data, status) {
                try {
                    data = JSON.parse(data);
                    if (data.result == true) {
                        var resultking = data.data;

                        var rowBoarderColorClass;
                        var rareWinsTableHTML = ' <div class="table-bets"><ul>    <li class="head-at"><div class="row">   <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Time</p>      </div>    </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Player</p>     </div>     </div>  <div class="col-md-2 col-sm-2 col-xs-2">   <div class="head-th">  <p>Prediction</p>     </div>  </div>   <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th">   <p>Lucky Number</p>     </div>   </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Bets</p>     </div>    </div>    <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">      <p>Payout</p>        </div>     </div>   </div>   </li>';

                        $.each(resultking, function (key, obj) {
                            var result = obj.result;
                            if (result == "true") {
                                rowBoarderColorClass = "safe";
                                let multiplier = getMultiplier(obj.startNumber, obj.endNumber);
                                var payout = multiplier * obj.bet;
                                payout = payout.toFixed(2);
                                //payout = payout.toString(); 
                                //payout = payout.slice(0, (payout.indexOf("."))+3);
                                payout += " <span>TRX</span>";

                            } else {
                                rowBoarderColorClass = "redalt";
                                payout = '-';
                            }

                            let user = getUserAddress(tronWeb.address.fromHex(obj.user));
                            rareWinsTableHTML += '<li class="dt-tbs ' + rowBoarderColorClass + '"><div class="row"><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.timestamp + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + user + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.startNumber + " - " + obj.endNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.winningNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + obj.bet + ' <span>TRX</span></p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + payout + ' </p></div></div></div></li>';

                        });

                        rareWinsTableHTML += '</ul></div>';

                        $("#bet4").html(rareWinsTableHTML);

                    } else {

                        $("#bet4").html('<div class="text-center" style="color: #fff; padding: 60px;">' + data.msg + '</div>');
                    }
                }
                catch (e) {
                    console.error(e);
                    console.error("Failed to parse rare wins data");
                }
                rareWinsData_running = false;
            });
        }
        catch (e) {
            console.error(e);
            console.error("Failed to fetch rare wins data");
            rareWinsData_running = false;
        }
    }

    static levelPercentages(i) {
        if (i == 0) { //level 1
            return 50;
        } else if (i == 1) { //level 2
            return 20;
        } else if (i == 2) { //level 3
            return 10;
        } else if (i == 3 || i == 4) { //level 4 and 5
            return 5;
        } else if (i == 5 || i == 6) { //level 6 and 7
            return 3;
        } else if (i == 7) { //level 8
            return 2;
        } else { //level 9 and 10
            return 1;
        }
    }

    static async getTokenMinters() {

        let tokenMintersResult = await HTTP.GET("https://www.trontopia.co/api/tokenMinters.php");

        var resultminers = tokenMintersResult.data;

        store.commit('SET_TOKEN_MINTERS', {
            totalSupply: tokenMintersResult.totalSupply,
            totalMinted: tokenMintersResult.totalMinted
        });

        return resultminers;

        var counterX = 0;
        var rankVariable;
        var minersLeaderboardHTML = ' <li class="head-at"> <div class="row">  <div class="col-md-2 col-sm-2 col-xs-2">      <div class="head-th">   <p>Rank</p>   </div>   </div>   <div class="col-md-5 col-sm-5 col-xs-5">    <div class="head-th">         <p>Player</p>     </div>      </div>     <div class="col-md-3 col-sm-3 col-xs-3">   <div class="head-th">     <p>Total Mined</p>  </div>     </div>     <div class="col-md-2 col-sm-2 col-xs-2">     <div class="head-th">    <p>Prize</p>   </div>   </div>    </div>  </li>';
        $.each(resultminers, function (key, obj) {

            key = parseInt(key) + 1;
            var payout = 0;

            //code for the 1-2-3 ranks		
            if (counterX == 0) {
                rankVariable = '<div class="head-th number-b act1"> <img src="images/ranks/leaders1.png" height="30" width="30" alt=""> </div>';
            }
            else if (counterX == 1) {
                rankVariable = ' <div class="head-th number-b act2"> <img src="images/ranks/leaders2.png" height="30" width="30" alt=""> </div>';
            }
            else if (counterX == 2) {
                rankVariable = ' <div class="head-th number-b act3">  <img src="images/ranks/leaders3.png" height="30" width="30" alt=""> </div>';
            }
            else {
                rankVariable = '<div class="head-th number-b"> <p>' + (counterX + 1) + '</p></div>';
            }
            //let user = getUserAddress(tronWeb.address.fromHex(obj.user));		
            let user = obj.user;
            var color = obj.color;
            var level = obj.level;
            if (level == 9999) {
                level = " [Lvl MOD]";
            } else {
                level = " [Lvl " + obj.level + "]";
            }
            /* 1st position:  "dividend * 0.5 /100 * 50 /100"  and so on. */
            // if(val[0]==true){		
            //     payout = dividend * 5 * levelPercentages(counterX) / 1000;		
            //     payout = number_to_2decimals(payout.toString());		
            //     //payout = payout.slice(0, (payout.indexOf("."))+3);		
            // }else{		
            //     payout = 0;		
            // }		
            user = '<span style="color:' + color + '">' + user + level + '</span>';
            minersLeaderboardHTML += ' <li class="dt-tbs">     <div class="row">    <div class="col-md-2 col-sm-2 col-xs-2">    ' + rankVariable + '  </div>   <div class="col-md-5 col-sm-5 col-xs-5">      <div class="head-th">   <p> ' + user + ' </p>    </div>     </div>  <div class="col-md-3 col-sm-3 col-xs-3">   <div class="head-th">   <p>' + obj.topia + ' TOPIA</p>    </div>    </div>   <div class="col-md-2 col-sm-2 col-xs-2">   <div class="head-th poit">  <p>' + obj.reward + ' <span>TRX</span></p>   </div>   </div>   </div>   </li> ';


            counterX++;
        });
    }

    static async getKingTopians() {

        //kingtopian table data
        let dividend = await DividentContract.displayAvailableDividendALL();
        let kingTopianResult = await HTTP.GET("https://www.trontopia.co/api/kingtopian2.php");

        var resultking = kingTopianResult.data;
        resultking.sort(function (a, b) {
            return a.trxplayed - b.trxplayed
        });

        for (let i = 0; i < resultking.length; i++) {
            let item = resultking[i];

            if (i <= 10) {
            }
        }

        let payout = dividend * 5 * this.levelPercentages(1) / 1000;

        resultking.reverse();

        return resultking;
        // $.get("api/kingtopian2.php", function (data, status) {
        //     //$("#sr-table").empty();
        //     data = JSON.parse(data);
        //     if (data.result == true) {
        //         var resultking = data.data;
        //         resultking.sort(function (a, b) {
        //             return a.trxplayed - b.trxplayed
        //         });

        //         resultking.reverse();
        //         var counterX = 0;
        //         var rankVariable;
        //         var kingtopianLeaderboardHTML = ' <li class="head-at"> <div class="row">  <div class="col-md-2 col-sm-2 col-xs-2">      <div class="head-th">   <p>Rank</p>   </div>   </div>   <div class="col-md-5 col-sm-5 col-xs-5">    <div class="head-th">         <p>Player</p>     </div>      </div>     <div class="col-md-3 col-sm-3 col-xs-3">   <div class="head-th">     <p>Total Played</p>  </div>     </div>     <div class="col-md-2 col-sm-2 col-xs-2">     <div class="head-th">    <p>Prize</p>   </div>   </div>    </div>  </li> ';

        //         $.each(resultking, function (key, obj) {
        //             key = parseInt(key) + 1;

        //             if (key <= 10) {

        //                 //code for the 1-2-3 ranks
        //                 if (counterX == 0) {
        //                     rankVariable = '<div class="head-th number-b act1"> <img src="images/ranks/leaders1.png" height="30" width="30" alt=""> </div>';
        //                 }
        //                 else if (counterX == 1) {
        //                     rankVariable = ' <div class="head-th number-b act2"> <img src="images/ranks/leaders2.png" height="30" width="30" alt=""> </div>';
        //                 }
        //                 else if (counterX == 2) {
        //                     rankVariable = ' <div class="head-th number-b act3">  <img src="images/ranks/leaders3.png" height="30" width="30" alt=""> </div>';
        //                 }
        //                 else {
        //                     rankVariable = '<div class="head-th number-b"> <p>' + (counterX + 1) + '</p></div>';
        //                 }
        //                 let user = obj.user;

        //                 var color = obj.color;
        //                 var level = obj.level
        //                 if (level == 9999) {
        //                     level = " [Lvl MOD]";
        //                 } else {
        //                     level = " [Lvl " + obj.level + "]";
        //                 }
        //                 //let user = getUserAddress(tronWeb.address.fromHex(obj.user));
        //                 if (val[0] == true) {
        //                     payout = dividend * 5 * levelPercentages(counterX) / 1000;
        //                     payout = number_to_2decimals(payout.toString());
        //                     //payout = payout.slice(0, (payout.indexOf("."))+3);
        //                 } else {
        //                     payout = 0;
        //                 }


        //                 user = '<span style="color:' + color + '">' + user + level + '</span>';

        //                 /* 1st position:  "dividend * 0.5 /100 * 50 /100"  and so on. */

        //                 kingtopianLeaderboardHTML += ' <li class="dt-tbs">     <div class="row">    <div class="col-md-2 col-sm-2 col-xs-2">    ' + rankVariable + '  </div>   <div class="col-md-5 col-sm-5 col-xs-5">      <div class="head-th">   <p> ' + user + ' </p>    </div>     </div>  <div class="col-md-3 col-sm-3 col-xs-3">   <div class="head-th">   <p>' + obj.trxplayed + ' TRX</p>    </div>    </div>   <div class="col-md-2 col-sm-2 col-xs-2">   <div class="head-th poit">  <p>' + payout + ' <span>TRX</span></p>   </div>   </div>   </div>   </li> ';

        //             }
        //             counterX++;
        //         });


        //         $("#kingtopianLeaderboardX").html(kingtopianLeaderboardHTML);

        //     } else {
        //         $("#kingtopianLeaderboardX").html(data.msg);
        //     }
        // })
    }

    static async highRollersData() {
        if (highRollersData_running) return;
        highRollersData_running = true;

        try {
            $.get("api/highrollers.php", function (data, status) {
                try {
                    data = JSON.parse(data);
                    if (data.result == true) {
                        var resultking = data.data;

                        var rowBoarderColorClass;
                        var highRollersTableHTML = ' <div class="table-bets"><ul>    <li class="head-at"><div class="row">   <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Time</p>      </div>    </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Player</p>     </div>     </div>  <div class="col-md-2 col-sm-2 col-xs-2">   <div class="head-th">  <p>Prediction</p>     </div>  </div>   <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th">   <p>Lucky Number</p>     </div>   </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Bets</p>     </div>    </div>    <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">      <p>Payout</p>        </div>     </div>   </div>   </li>';

                        $.each(resultking, function (key, obj) {
                            var result = obj.result;
                            if (result == "true") {
                                rowBoarderColorClass = "safe";
                                let multiplier = getMultiplier(obj.startNumber, obj.endNumber);
                                var payout = multiplier * obj.bet;
                                payout = payout.toFixed(2);
                                //payout = payout.toString(); 
                                //payout = payout.slice(0, (payout.indexOf("."))+3);
                                payout += " <span>TRX</span>";

                            } else {
                                rowBoarderColorClass = "redalt";
                                payout = '-';
                            }

                            let user = getUserAddress(tronWeb.address.fromHex(obj.user));

                            /* 1st position:  "dividend * 0.5 /100 * 50 /100"  and so on. */

                            highRollersTableHTML += '<li class="dt-tbs ' + rowBoarderColorClass + '"><div class="row"><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.timestamp + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + user + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.startNumber + " - " + obj.endNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.winningNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + obj.bet + ' </p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + payout + ' <span>TRX</span></p></div></div></div></li>';

                        });

                        highRollersTableHTML += '</ul></div>';

                        $("#bet3").html(highRollersTableHTML);

                    } else {

                        $("#bet3").html('<div class="text-center" style="color: #fff; padding: 60px;">' + data.msg + '</div>');
                    }
                }
                catch (e) {
                    console.error(e);
                    console.error("Failed to parse high rollers data.");
                }
                highRollersData_running = false;
            });
        }
        catch (e) {
            console.error(e);
            console.error("Failed to fetch high rollers data");
            highRollersData_running = false;
        }
    }

    static async allBetsData() {
        try {
            $.get("api/allbets.php", function (data, status) {
                try {
                    data = JSON.parse(data);
                    if (data.result == true) {
                        $('#tab_2').empty();
                        var resultking = data.data;

                        var rowBoarderColorClass;
                        var allBetTableHTML = ' <div class="table-bets"><ul>    <li class="head-at"><div class="row">   <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Time</p>      </div>    </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Player</p>     </div>     </div>  <div class="col-md-2 col-sm-2 col-xs-2">   <div class="head-th">  <p>Prediction</p>     </div>  </div>   <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th">   <p>Lucky Number</p>     </div>   </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Bets</p>     </div>    </div>    <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">      <p>Payout</p>        </div>     </div>   </div>   </li>';

                        $.each(resultking, function (key, obj) {
                            var result = obj.result;
                            if (result == "true") {
                                rowBoarderColorClass = "safe";
                                let multiplier = getMultiplier(obj.startNumber, obj.endNumber);
                                var payout = multiplier * obj.bet;
                                payout = payout.toFixed(2);
                                //payout = payout.toString(); 
                                //payout = payout.slice(0, (payout.indexOf("."))+3);
                                payout += " <span>TRX</span>";
                            }
                            else {
                                rowBoarderColorClass = "redalt";
                                //payout = '-'+obj.bet;
                                payout = '-';
                            }

                            let user = getUserAddress(tronWeb.address.fromHex(obj.user));

                            allBetTableHTML += '<li class="dt-tbs ' + rowBoarderColorClass + '"><div class="row"><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.timestamp + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + user + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.startNumber + " - " + obj.endNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.winningNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + obj.bet + ' <span>TRX</span></p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + payout + ' </p></div></div></div></li>';
                        });

                        allBetTableHTML += '</ul></div>';

                        $("#bet2").html(allBetTableHTML);
                    }
                    else {
                        $("#bet2").html('<div class="text-center" style="color: #fff; padding: 60px;">' + data.msg + '</div>');
                    }
                }
                catch (e) {
                    console.error(e);
                    console.error("Parsing all bets data failed. Retrying in 2 seconds...");
                    setTimeout(allbetsData, 2000);
                }
                allbetsData_running = false;
            });
        }
        catch (e) {
            console.error(e);
            console.error("Loading all bets data failed. Retrying in 2 seconds...");
            setTimeout(allbetsData, 2000);
            allbetsData_running = false;
        }
    }

    static async myBetsData() {
        let address = 'TDgXW4khtUe1eEKDhEC6p7PEeLNNLUCVMZ'; // let address = store.state.userAddress.substring(2);
        let response = await HTTP.GET("https://www.trontopia.co/api/mybets.php?user=" + address);
        //data = JSON.parse(data);
        try {
            if (response.result == true) {
                // for (let i = 0; i < extraBetsToDisplayAtTopOfMyBets.length; i++) {
                //     const extraBet = extraBetsToDisplayAtTopOfMyBets[i];
                //     if (extraBet.timestampMs < Date.now() - 30 * 1000) {
                //         console.log("extraBetsToDisplayAtTopOfMyBets is too old: ", extraBet);
                //         extraBetsToDisplayAtTopOfMyBets.splice(i, 1);
                //         i--;
                //     }
                //     else {
                //         let found = false;
                //         for (let j = 0; j < data.data.length; j++) {
                //             //console.log("Comparing", data.data[j], " to ", extraBet, "t1="+data.data[j].timestamp.substring(data.data[j].timestamp.length-5)+" t2="+extraBet.timestamp.substring(extraBet.timestamp.length-5));

                //             if (parseInt(data.data[j].startNumber) == parseInt(extraBet.startNumber) &&
                //                 parseInt(data.data[j].endNumber) == parseInt(extraBet.endNumber) &&
                //                 parseInt(data.data[j].bet) == parseInt(extraBet.bet) &&
                //                 parseInt(data.data[j].winningNumber) == parseInt(extraBet.winningNumber) &&
                //                 data.data[j].timestamp.substring(data.data[j].timestamp.length - 5) == extraBet.timestamp.substring(extraBet.timestamp.length - 5)) {
                //                 console.log("extraBetsToDisplayAtTopOfMyBets already exists: ", extraBet);
                //                 found = true;
                //                 break;
                //             }
                //         }
                //         if (!found) {
                //             console.log("prepending from extraBetsToDisplayAtTopOfMyBets: ", extraBet);
                //             data.data.unshift(extraBet);
                //         }
                //     }
                // }

                let rowBoarderColorClass;

                let myBets = [];

                for (let i = 0; i < result.data.length; i++) {

                    let item = result.data[i];
                    let result = item.result;
                    if (result == "true") {
                        rowBoarderColorClass = "safe";
                        let multiplier = this.getMultiplier(item.startNumber, item.endNumber);
                        let payout = multiplier * item.bet;
                        payout = payout.toFixed(2);

                    } else {
                        rowBoarderColorClass = "redalt";
                    }

                    myBets.push({
                        timestamp: item.timestamp,
                        user: '',
                        startNumber: item.startNumber,
                        endNumber: item.endNumber,
                        winningNumber: item.winningNumber,
                        bet: item.bet,
                        payout: payout,
                        rowBoarderColorClass: rowBoarderColorClass
                    });

                    // let user = getUserAddress(tronWeb.address.fromHex(obj.user));
                    // myBetTableHTML += '<li class="dt-tbs ' + rowBoarderColorClass + '"><div class="row"><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.timestamp + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + user + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.startNumber + " - " + obj.endNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.winningNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + obj.bet + ' <span>TRX</span></p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + payout + ' </p></div></div></div></li>';

                }

                $store.state.myBetsHistory = myBets;

                return myBets;
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    static initUser(address, addressHex, referalId, trxBalance, totalTokens, avaliableTokens) {
        store.commit("SET_USER_ADDRESS", address);
        store.commit("SET_USER_ADDRESS_HEX", addressHex);
        store.commit("SET_IS_LOGGEDIN", true);
        store.commit("SET_REFERAL_ID", referalId);
        store.commit('SET_MY_TRX_BALANCE', trxBalance);
        store.commit('SET_MY_TOTAL_TOKENS', totalTokens);
        store.commit('SET_MY_AVALIABLE_TOKENS', avaliableTokens);

        setTimeout(this.myBetsData, 3000);
    }

    static Logout() {
        store.commit("SET_USER_ADDRESS", "");
        store.commit("SET_USER_ADDRESS_HEX", "");
        store.commit("SET_IS_LOGGEDIN", false);
        store.commit("SET_REFERAL_ID", "");
        store.commit('SET_MY_TRX_BALANCE', 0);
        store.commit('SET_MY_TOTAL_TOKENS', 0);
        store.commit('SET_MY_AVALIABLE_TOKENS', 0);
    }

    static getUserAddress() {
        if (store.state.userAddress) {
            const userAddress = store.state.userAddress;

            let firstFive = userAddress.substring(0, 5);
            let lastFive = userAddress.substr(userAddress.length - 5);
            return firstFive + '...' + lastFive;
        }

        return null;
    }

    static setMyTRXBalance(trxBalance) {
        store.commit('SET_MY_TRX_BALANCE', trxBalance);
    }

    static setMyTotalTokens(totalTokens) {
        store.commit('SET_MY_TOTAL_TOKENS', totalTokens);
    }

    static setMyAvaliableTokens(avaliableTokens) {
        store.commit('SET_MY_AVALIABLE_TOKENS', avaliableTokens);
    }
}

export default UserHelper