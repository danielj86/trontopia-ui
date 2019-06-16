import store from '../store';
import HTTP from '../helpers/HTTP';

class UserHelper {

    static async myBetsData(userAddress) {
        let data = await HTTP.GET("https://www.trontopia.co/api/mybets.php?user=" + store.state.userAddress);
        //data = JSON.parse(data);
        try {
            data = JSON.parse(data);
            if (data.result == true) {
                for (let i = 0; i < extraBetsToDisplayAtTopOfMyBets.length; i++) {
                    const extraBet = extraBetsToDisplayAtTopOfMyBets[i];
                    if (extraBet.timestampMs < Date.now() - 30 * 1000) {
                        console.log("extraBetsToDisplayAtTopOfMyBets is too old: ", extraBet);
                        extraBetsToDisplayAtTopOfMyBets.splice(i, 1);
                        i--;
                    }
                    else {
                        let found = false;
                        for (let j = 0; j < data.data.length; j++) {
                            //console.log("Comparing", data.data[j], " to ", extraBet, "t1="+data.data[j].timestamp.substring(data.data[j].timestamp.length-5)+" t2="+extraBet.timestamp.substring(extraBet.timestamp.length-5));

                            if (parseInt(data.data[j].startNumber) == parseInt(extraBet.startNumber) &&
                                parseInt(data.data[j].endNumber) == parseInt(extraBet.endNumber) &&
                                parseInt(data.data[j].bet) == parseInt(extraBet.bet) &&
                                parseInt(data.data[j].winningNumber) == parseInt(extraBet.winningNumber) &&
                                data.data[j].timestamp.substring(data.data[j].timestamp.length - 5) == extraBet.timestamp.substring(extraBet.timestamp.length - 5)) {
                                console.log("extraBetsToDisplayAtTopOfMyBets already exists: ", extraBet);
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            console.log("prepending from extraBetsToDisplayAtTopOfMyBets: ", extraBet);
                            data.data.unshift(extraBet);
                        }
                    }
                }

                //$('#tab_1').empty();
                var resultking = data.data;

                var rowBoarderColorClass;
                var myBetTableHTML = ' <div class="table-bets"><ul>    <li class="head-at"><div class="row">   <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Time</p>      </div>    </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Player</p>     </div>     </div>  <div class="col-md-2 col-sm-2 col-xs-2">   <div class="head-th">  <p>Prediction</p>     </div>  </div>   <div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th">   <p>Lucky Number</p>     </div>   </div>     <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">   <p>Bets</p>     </div>    </div>    <div class="col-md-2 col-sm-2 col-xs-2">    <div class="head-th">      <p>Payout</p>        </div>     </div>   </div>   </li>';
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

                    myBetTableHTML += '<li class="dt-tbs ' + rowBoarderColorClass + '"><div class="row"><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.timestamp + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + user + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.startNumber + " - " + obj.endNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th"><p>' + obj.winningNumber + '</p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + obj.bet + ' <span>TRX</span></p></div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="head-th poit"><p> ' + payout + ' </p></div></div></div></li>';
                });

                myBetTableHTML += '</ul></div>';

                $("#bet1").html(myBetTableHTML);

            }
            else {
                $("#bet1").html('<div class="text-center" style="color: #fff; padding: 60px;">' + data.msg + '</div>');
            }
        }
        catch (e) {
            console.error(e);
            console.error("Loading my bets data failed. Retrying in 2 seconds...");
            setTimeout(mybetsData, 2000);
        }
        mybetsData_running = false;
    }

    static initUser(address, addressHex, referalId, trxBalance, totalTokens, avaliableTokens) {
        store.commit("SET_USER_ADDRESS", address);
        store.commit("SET_USER_ADDRESS_HEX", addressHex);
        store.commit("SET_IS_LOGGEDIN", true);
        store.commit("SET_REFERAL_ID", referalId);
        store.commit('SET_MY_TRX_BALANCE', trxBalance);
        store.commit('SET_MY_TOTAL_TOKENS', totalTokens);
        store.commit('SET_MY_AVALIABLE_TOKENS', avaliableTokens);
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