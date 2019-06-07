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

    <div id="dividend" class="modal fade" role="dialog">

        <div class="modal-dialog">

            <div class="modal-content dividend-pop">

                <button type="button" class="close" data-dismiss="modal"><img src="../assets/images/close-po.png" alt=""></button>



                <div class="logo-bx">

                    <span><img src="../assets/images/topia-min.png" alt=""> TOPIA</span>

                </div>



                <h6>Stage: <span id="stageNumber">1</span> (Play <span id="stageTRX">833</span> TRX to mine 1 TOPIA)</h6>



                <div class="progress-step">

                    <div class="progress">

                        <div class="progress-bar" id="topia-progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">

                            <span class="title" id="ante-jd-text">Loading..</span>

                        </div>

                    </div>

                </div>



                <h6 class="step-note">Next Stage: <span id="stageNumber2">2</span> (Play <span id="stageTRX2">1000</span> TRX to mine 1 TOPIA)</h6>



                <div class="available-bx">

                    <h3>Available Dividends</h3>

                    <input type="text" style="color: #01f593" placeholder="0 TRX" id="dividends" disabled>

                    <p>A total of <span id="totalFrozenTopia">0</span> TOPIA is frozen across the network - You will receive <span id="approxUserDividends">0</span> TRX Dividends Countdown: <span id="dividendCountdown"></span></p>
                    <p id="frzDiv" style="display:none;">A total of <span id="myUnFrozenTopia"></span> is being Unfrozen. Unfreeze Countdown: <span id="unFreezeCountDown"></span></p>

                </div>
            
			<!--             new row -->
            	<div class="row" style="padding-top: 30px;">
                	<div class="col-md-9 col-sm-9 col-xs-12 progress-bar-left-padding">
                		<div class="progress-step refer-progres">

                   <h4>Current Level: <span id="freeze-tier-lvl">Bronze Freeze(75% Reward)</span></h4>

                    <div class="referpr">

                        <div class="icnbxon">

                            <img id="div-left-image" src="../assets/images/freeze1.png" alt="" style="width: 70%;">

                        </div>

                        <div class="progress">

                            <div class="progress-bar" id="freeze-progress" role="progressbar" aria-valuenow="80" aria-valuemin="0"

                                aria-valuemax="100" style="max-width:0%">

                                <span class="title"><span id="days">0</span> / <span id="days-to-complete">0</span></span>

                            </div>

                        </div>

                        <div class="icnbxon">

                            <img id="div-right-image" src="../assets/images/freeze2.png" alt="" style="width: 70%;">

                        </div>

                    </div>

                    <p id="till_what_reward">Till Silver Freeze(85% Reward)</p>

                </div>
                	</div>
                	<div class="col-md-3 col-sm-3 col-xs-12">
                		<a href="#" class="btn btn-success" id="upgrade" style="background: #0cd6cf;padding: 8px 15px;border-radius: 10px;font-size: 18px;font-weight: 500;color: #fff;display: block;width: 100%;text-align: center;margin-top: 35px;border-color: #0cd6cf">UPGRADE</a>
                	</div>
            	</div>
            
            <!--             new row -->
            
<!-- 				<div class="progress-step refer-progres" style="padding-top: 30px;">

                   <h4>Current Level: <span id="freeze-tier-lvl">Bronze Freeze(75% Reward)</span></h4>

                    <div class="referpr">

                        <div class="icnbxon">

                            <img id="div-left-image" src="images/freeze1.png" alt="" style="width: 70%;">

                        </div>

                        <div class="progress">

                            <div class="progress-bar" id="freeze-progress" role="progressbar" aria-valuenow="80" aria-valuemin="0"

                                aria-valuemax="100" style="max-width:0%">

                                <span class="title"><span id="days">0</span> / <span id="days-to-complete">0</span></span>

                            </div>

                        </div>

                        <div class="icnbxon">

                            <img id="div-right-image" src="images/freeze2.png" alt="" style="width: 70%;">

                        </div>

                    </div>

                    <p id="till_what_reward">Till Silver Freeze(85% Reward)</p>

                </div> -->

                <div class="withdr-bx">

                    <div class="row">
                        <div class="col-md-3 col-sm-3">

                            <div class="with-bx with-bx1">                                
                               <!--  <h5 style="text-align: left;color: #0cd6cf;margin-top: 16px; font-size: 20px;">
                                	<img src="images/topia.png" alt="" style="width: 10%;margin-right: 6px;display: inline-block;" />  
                                	<span id="myAvailableToken" style="color: #fff;"></span>
                                	TOPIA
                            	</h5>-->
								<h5>WITHDRAW DIVIDEND</h5>
                            	<input type="" name="" id="myAvailableDividend" placeholder="0.00" disabled>
                                <a href="#" class="btn-main" style="background: #ef0c0c" id="withdrawTrxBtn">Withdraw</a>

                            </div>

                        </div>
                        <div class="col-md-3 col-sm-3">

                            <div class="with-bx with-bx1">                                
                                <h5>WITHDRAW TOPIA</h5>
							<!--	<h5 style="text-align: left;color: #e80505; font-size: 20px;">
                                 	<img src="images/tron_logo.png" alt="tron logo" style="width: 10%;margin-right: 6px;display: inline-block;" /> 
                                	<span id="myAvailableDividend" style="color: #fff;">0</span>
                                	TRX
                            	</h5> -->
                            	<input type="" name="" id="myAvailableToken" placeholder="0.00" disabled>
                                <a href="#" class="btn-main" style="background: #01f593" id="withdrawTopiaBtn">Withdraw</a>

                            </div>

                        </div>
                        

                        <div class="col-md-3 col-sm-3">

                            <div class="with-bx">

                                <h5><!--<i class="fa fa-question-circle"></i>-->FREEZE TOPIA</h5>

                                <input type="" name="" id="myAvailableToken2" placeholder="0 Topia" disabled>



                                <a href="#" class="btn-main frebtn" id="freezeTopia">Freeze</a>

                            </div>
<!--                             <p>* TOPIA will be frozen for 24 hours.</p> -->

                        </div>

                        <div class="col-md-3 col-sm-3">

                            <div class="with-bx no-ar">

                                <h5>FROZEN TOPIA</h5>

                                <input type="" name="" id="myFreezeToken" placeholder="0 Topia" style="color: #0cd6cf;" disabled>



                                <a href="#" class="btn-main" id="unfreezeTopia" style="color: #0cd6cf;background: #ffffff;">Unfreeze</a>

                            </div>
                            <p style="text-align: center;">*The unfreeze process cannot be cancelled*</p>

                        </div>

                    </div>



                    

                </div>



                <img src="../assets/images/divi-img.png" alt="" class="divi-img">

            </div>

        </div>

    </div>

    <!-- End Dividend Popup -->



    <!-- Referrals Popup -->

    <div id="refer" class="modal fade" role="dialog">

        <div class="modal-dialog">

            <div class="modal-content referrals-pop">

                <button type="button" class="close" data-dismiss="modal"><img src="../assets/images/close-po.png" alt=""></button>



                <h6>Get rewarded just by referring your friends!</h6>



                <a href="./TRONTOPIAMarketingPack.zip" class="dwnld">download our marketing package here</a>



                <div class="refre-data">

                    <p>We offer a lifetime referral rewards program. Just simply refer your friends and family, you will

                        receive up to 0.30% of all their wins!</p>

                    <p>You will receive the referral rewards automatically, and it will be withdrawable instantly.</p>

                    <p>Copy your unique referral link below, and share!</p>


                </div>



                <div class="progress-step refer-progres">

                    <h4>Current Level: <span id="ref-cur-lvl">Bronze Referral(0.20%)</span></h4>

                    <div class="referpr">

                        <div class="icnbxon">

                            <img id="ref-left-image" src="../assets/images/nut1.png" alt="">

                        </div>

                        <div class="progress">

                            <div class="progress-bar" id="referral_progress" role="progressbar" aria-valuenow="80" aria-valuemin="0"

                                aria-valuemax="100" style="max-width:0%">

                                <span class="title"><span id="ref_wager">0</span> / <span id="ref_wager_to">100,000,000</span> </span>

                            </div>

                        </div>

                        <div class="icnbxon">

                            <img id="ref-right-image" src="../assets/images/nut2.png" alt="">

                        </div>

                    </div>

                    <p id="till_what_reward_ref">Till Silver Referral(0.25%)</p>

                </div>



                <div class="refre-links">

                    <div class="row">

                        <div class="col-md-6 col-sm-6">

                            <div class="link-bx">

                                <h6>Your personal referral link</h6>

                                <input type="text" name="" id="refLink" placeholder="https://trontopia.co" readonly>
                                <div class="tooltip">    
                                    <a href="#" class="btn-main" style="background:#0CD6CF" onclick="myFunction()" onmouseout="outFunc()">
                                        <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                                        Copy Link
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-6 col-sm-6">

                            <div class="link-bx">

                                <h6 for="seeds">Referral bonus</h6>

                                <input type="text" name="" placeholder="0 Topia" id="my_bonus" aria-describedby="seed" value="" disabled>

                                <button class="btn-main" id="withdrawReferralBonus" style="border: 0; background: #01f593">Withdraw</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <!-- End Referrals Popup -->


<!-- Referrals Popup -->

   
<div id="unclaimedWinners" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content gradient-border">

          <!-- Modal Header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><img src="../assets/images/close-po.png" alt="#"></button>
            <center><h5>Claim unclaimed winning</h5></center>
          </div>
          <div class="modal-body">
            <div class="row">
                <div class="col-sm-12">
                    <form class="text-left">
                        <div class="form-group">
                            <label for="finishBetGambler">User wallet :</label>
                            <input type="text" class="form-control" id="finishBetGambler" aria-describedby="seed" value="" >
                        </div>
                        <div class="form-group">
                            <label for="finishBetUniqueID">Unique Bet ID:</label>
                            <input type="text" class="form-control" id="finishBetUniqueID" aria-describedby="seed" value="">
                        </div>
                        <div class="form-group">
                            <label for="finishBetUserSeed">User seed :</label>
                            <input type="text" class="form-control" id="finishBetUserSeed" aria-describedby="seed" value="" >
                        </div>
                        <div class="form-group">
                            <label for="finishBetBlockNumber">Block number :</label>
                            <input type="text" class="form-control" id="finishBetBlockNumber" aria-describedby="seed" value="" >
                        </div>
                        <div class="form-group">
                            <label for="finishBetParamsArray">Bet Parameters Array :</label>
                            <input type="text" class="form-control" id="finishBetParamsArray" aria-describedby="seed" value="" >
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
                    <p style="margin-top: 20px;" title="" class="text-left">
                        <span title="">
                        In rare circumstances; it is possible for a winning bet to not be finished fully.
                        <br>
                        You can claim your winning bets that have not been paid to you by filling the information out above and clicking CLAIM.
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

    <div id="hplay" class="modal fade" role="dialog">

        <div class="modal-dialog">

            <div class="modal-content referrals-pop">

                <button type="button" class="close" data-dismiss="modal"><img src="../assets/images/close-po.png" alt=""></button>



                <h6>How To Play</h6>



                <div class="refre-data">

                    <p>1. TRONLink wallet is required! Click <a href="https://bit.ly/TronLink" target="_blank">here</a> to obtain your wallet.</p>

                    <p>2. Our games require TRON (TRX) - to learn how to purchase TRON, click <a href="https://tinyurl.com/y22z5kq8" target="_blank">here</a>.</p>

                    <p>3. Pick a game you wish to play.</p>

                    <p>4. As you play, you will earn TOPIA tokens, which can be used to earn dividends, trade on the

                        open market once the token is listed on a DEX, or in the near future you will be able to play

                        your TOPIA tokens, and win more TOPIA.</p>

                    <h6>If you have any questions, join our Telegram group by clicking <a href="https://t.me/TRONtopia" target="_blank">here</a> and we will

                        be more than happy to help you with your questions. You will also be able to stay in the loop of

                        our future announcements and giveaways.</h6>

                </div>



                <div class="social-ic">

                    <a href="https://t.me/TRONtopia" target="_blank"><i class="fa fa-paper-plane"></i></a>

                    <a href="https://twitter.com/tron_topia" target="_blank"><i class="fa fa-twitter"></i></a>

                </div>



                <img src="../assets/images/playimg1.png" alt="" class="how-img">

                <img src="../assets/images/playimg2.png" alt="" class="how-img-two">

            </div>

        </div>

    </div>

    <!-- End How to Play Popup -->



    <div class="main-wrapper">

        <!-- Header -->

        <nav class="navbar navbar-default">

            <div class="container">

                <div class="navbar-header">
                	
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"

                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">

                        <span class="sr-only">Toggle navigation</span>

                        <span class="icon-bar"></span>

                        <span class="icon-bar"></span>

                        <span class="icon-bar"></span>

                    </button>
					<a href="#chat-scroll" class="navbar-toggle collapsed" style="padding: 0px 0px;font-size: 30px;border: 0;color: #fff;margin: 3px 8px 0px 0px;background: transparent;"><i class="fa fa-comments mv" title=""></i></a>	
                    <a class="navbar-brand" href="index.html">

                        <h1 class="logo-txt"><img src="../assets/images/logo.png" alt="LOGO"> <strong>TRON</strong>TOPIA</h1>

                    </a>

                </div>



                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul class="nav navbar-nav" id="menu">
                        
                        <li class="dropdown"><a href="#" class="dropdown-toggle"

                                data-toggle="dropdown">Games <i

                                    class="fa fa-angle-down"></i></a>

                            <ul class="dropdown-menu">

                                <li><a href="/dice.php"> Ultimate Dice</a></li>

                                <li><a href=""> Lucky One Max (Back Soon!) </a></li>

                            </ul>

                        </li>

                        <li><a id="dividendPopup" href="#" data-toggle="modal" data-target="#dividend">Dividends</a></li>

                        <li><a href="#" data-toggle="modal" data-target="#refer">Referrals</a></li>
                        
                        <!--<li><a href="#" data-toggle="modal" data-target="#unclaimedWinners">Unclaimed Winners</a></li>-->

                        <li><a href="./whitepaper-english.pdf" target="_blank">White Paper</a></li>

                        <li><a href="#" data-toggle="modal" data-target="#fair">Fairness</a></li>

                        <li><a href="#" data-toggle="modal" data-target="#hplay">How To Play</a></li>
                    
                    	<li><a href="https://tronscan.org/#/address/TGpP9GPsjyq2yo4WrwSJvqYwqZLKRnSzE8" target="_blank">Token</a></li>

                        <li class="dropdown">
                            <a  href="#" class="dropdown-toggle user" data-toggle="dropdown">
                                <i class="user_icon fa fa-user"></i><span id="isLogin"></span>
                            </a>

                            <!--<ul class="dropdown-menu tes-block">

                                <li><a href="#">Profile</a></li>

                                <li><a href="#">Profile</a></li>

                            </ul>-->
                        </li>
                        <li class="nav-item" id="login_or_not">
                        <a class="nav-link header-menu-item bg-user" href="#" tabindex="-1" aria-disabled="true" data-toggle="modal" data-target="#not_log_in">
                        <span class="display-block"><span id="isnotLogin"></span></span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- End Header -->



        <div class="container">

            <!-- Head Lines -->

            <div class="row">

                <div class="col-md-4 col-sm-5">

                    <div class="headlines-box headlines-box-first dice-hedln">
                        <div class="dice-nav">
                        <center><img src="../assets/images/ultimate_dice.png" alt="" height="45px"></center>
                        </div>
                    </div>
                </div>

                <div class="col-md-8 col-sm-7">

                    <div class="headlines-box dice-hedln desktopmode">

                        <div class="headline-bx dice-head">
                            <p>BETS MADE</p><label id="myBetVals">Loading..</label>

                            <p>TOPIA</p><label id="myTotalToken">Loading..</label>

                            <p>Total Won</p><label id="myTotalWon">Loading..</label>
                            <p><img src="../assets/images/sound_on.png" id="sound-icon"></p>
                            
                        </div>
                        
                    </div>

                    <div class="headlines-box respon-mode">

                      <div class="headline-bx">
                         <a href="javascript:void(0);" class="openc"><p>BETS MADE</p><label id="myBetVals2">Loading..</label></a> <div class="sond"><img src="../assets/images/sound_on.png" id="sound-icon"><a href="javascript:void(0);" class="openc"><i class="fa fa-angle-down"></i></a></div>
                      </div>



                      <div class="show-items">

                          <div class="headline-bx">
                              <p>TOPIA</p><label id="myTotalToken2">Loading..</label>
                          </div>

                          <div class="headline-bx">
                              <p>Total Won</p><label id="myTotalWon2">Loading..</label>
                          </div>

                      </div>

                  </div>
                </div>

            </div>

            <!-- End Head Lines -->



            <!-- Main Content -->

            <div class="main-cont">

                <div class="row" id="numView">

                    <div class="col-lg-8 col-md-7 col-sm-12">

                        <div class="rang-bx " id="number">
                            <div class="row">
                                <div class="col-12 col-xs-8 col-md-8 slider-padding-left">
                                    <div class="box predictbox" style="padding-top: 10px">
                                        <input type="hidden" id="startVal" value="40">
                                        <input type="hidden" id="endVal" value="77">
                                        <span><text id="min_price">49</text> - <text id="max_price">70</text></span>
                                        <p>Prediction</p>
                                    </div>
                                </div>
                                <div class="col-12 col-xs-4 col-md-4 lucky-no-padding">
                                    <div class="box luckybox" style="padding-top: 10px;">
                                        <span id="rollNum">
                                            <span id="lucky_no">00</span>
                                        </span>
                                        <!--<p id="bouncingLetterStatic">Lucky Number</p>-->
                                        <span id="bouncingLetterStatic_mobile" class="bouncing-latter bouncing-latter-mobile " style="font-size: 16px; line-height: 5px; position: relative;top: 14px;color: #fff;letter-spacing: 0.7px;" title=""><br>Lucky#</span>
                                        <span id="bouncingLetterStatic" class="bouncing-latter bouncing-latter-desktop" style="font-size: 16px; line-height: 5px; position: relative;top: 14px;color: #fff;letter-spacing: 0.7px;" title=""><br>Lucky Number</span>
                                        
                                        <span id="bouncingLetterMooving" class="bouncing-latter" style="font-size: 16px; line-height: 16px;display: none;position: absolute;top: 106px;left: 24%;font-weight: 500;" title=""><br>
                                          <span class="ud_bounce ud_1">L</span>
                                          <span class="ud_bounce ud_2">u</span>
                                          <span class="ud_bounce ud_3">c</span>
                                          <span class="ud_bounce ud_4">k</span>
                                          <span class="ud_bounce ud_5">y</span>
                                          <span class="ud_bounce ud_6">N</span>
                                          <span class="ud_bounce ud_7">u</span>
                                          <span class="ud_bounce ud_8">m</span>
                                          <span class="ud_bounce ud_9">b</span>
                                          <span class="ud_bounce ud_10">e</span>
                                          <span class="ud_bounce ud_11">r</span>
                                        </span>
                                        
                                        <span id="bouncingLetterMooving_mobile_view" class="bouncing-latter" style="font-size: 16px; line-height: 16px;display: none;position: absolute;top: 62px;left: 15%;font-weight: 500;" title=""><br>
                                          <span class="ud_bounce ud_1">L</span>
                                          <span class="ud_bounce ud_2">u</span>
                                          <span class="ud_bounce ud_3">c</span>
                                          <span class="ud_bounce ud_4">k</span>
                                          <span class="ud_bounce ud_5">y</span>
                                          <span class="ud_bounce ud_61">#</span>
                                          <!--<span class="ud_bounce ud_7">u</span>
                                          <span class="ud_bounce ud_8">m</span>
                                          <span class="ud_bounce ud_9">b</span>
                                          <span class="ud_bounce ud_10">e</span>
                                          <span class="ud_bounce ud_11">r</span>-->
                                        </span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div id="slider-range" class="price-filter-range" name="rangeInput"></div>

                        </div>

                        <div class="main-bet">

                            <div class="row">

                                <div class="col-md-5 col-sm-4 col-xs-7">
                                    <label>TRX Balance</label><br>

                                    <div class="form-group">

                                        <div class="ic-dim">

                                            <img src="../assets/images/stone.png" alt="">

                                        </div>

                                        <div class="frm-gt">
                                            <div class="text-center" id="bounce_num_div">
                                                <span class="bounce_number colorGreen" id="bounce_num" style=""></span>
                                                <span class="bounce_number colorGreen" id="bounce_num2" style=""></span>

                                            </div>
                                            <!--<div id="trx">Loading...</div>-->
                                            <input type="text" id="trxBalance" style="" name="number" value="0"

                                                class="form-control" disabled>

                                            <span class="trx-txt">trx</span>

                                        </div>

                                    </div>

                                </div>

                                <form class="col-md-7 col-sm-8 col-xs-5">

                                    <div class="row">

                                        <div class="col-md-6 col-sm-6">

                                            <label>auto betting</label>

                                            <div class="dic-bs">

                                                <div class="toogle-bx">

                                                    <label class="switch">

                                                        <input type="checkbox" class="actdctbtn" id="autoCallRoll">

                                                        <span class="slider round"></span>

                                                    </label>

                                                    <p>deactivated</p>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="col-md-6 col-sm-6">

                                            <label class="roll-m">Roll</label>

                                            <input type="button" class="btn-main roll-btn" value="roll" id="rollDice">
                                            <input type="button" class="btn-main roll-btn" value="rolling..." id="rollBtn">
                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                        <div class="main-bet">

                            <label><i class="fa fa-question-circle">

                                    <div class="ques-bx">

                                        <p>"Main bet" wager is required in order to roll. A minimum main bet wager of 50 TRX is required.</p>

                                    </div>

                                </i>Main bet</label>

                            <div class="row">

                                <div class="col-md-5 col-sm-4">

                                    <div class="form-group">

                                        <div class="ic-dim">

                                            <img src="../assets/images/stone.png" alt="">

                                        </div>

                                        <div class="frm-gt">

                                            <input type="text" autocomplete="off" class="form-control" id="betAmt" aria-describedby="emailHelp" value="50" name="number" placeholder="0.00" >

                                            <span>trx</span>

                                        </div>

                                    </div>

                                </div>

                                <div class="col-md-7 col-sm-8">

                                    <div class="selct-size">

                                        <ul>

                                            <li><a href="javascript:void(0);" onclick="updateBetAmount('min')" unselectable="on">

                                                    <label class="checkbx">

                                                        <input type="radio" name="r1">

                                                        <span class="checkmark"></span>

                                                    </label>

                                                    min</a></li>

                                            <li><a href="javascript:void(0);" onclick="updateBetAmount('hlf')" unselectable="on">

                                                    <label class="checkbx">

                                                        <input type="radio" name="r1">

                                                        <span class="checkmark"></span>

                                                    </label>

                                                    1/2</a></li>

                                            <li><a href="javascript:void(0);" onclick="updateBetAmount('dbl')" unselectable="on">

                                                    <label class="checkbx">

                                                        <input type="radio" name="r1">

                                                        <span class="checkmark"></span>

                                                    </label>

                                                    x2</a></li>

                                            <!--<li><a href="javascript:void(0);">

                                                    <label class="checkbx">

                                                        <input type="radio" name="r1">

                                                        <span class="checkmark"></span>

                                                    </label>

                                                    x4</a></li>

                                            <li><a href="javascript:void(0);">

                                                    <label class="checkbx">

                                                        <input type="radio" name="r1">

                                                        <span class="checkmark"></span>

                                                    </label>

                                                    x8</a></li>-->

                                            <li><a href="javascript:void(0);" onclick="updateBetAmount('max')" unselectable="on">

                                                    <label class="checkbx">

                                                        <input type="radio" name="r1">

                                                        <span class="checkmark"></span>

                                                    </label>

                                                    max</a></li>

                                        </ul>

                                    </div>

                                </div>

                            </div>



                            <div class="row">

                                <div class="col-md-5 col-sm-4">

                                    <label>payout on win</label>

                                    <div class="form-group">

                                        <div class="ic-dim">

                                            <img src="../assets/images/stone.png" alt="">

                                        </div>

                                        <div class="frm-gt" aria-describedby="emailHelp">

                                            <input type="text" id="payout" name="" value="20.10" placeholder="0.00"

                                                class="form-control" disabled>

                                            <span>trx</span>

                                        </div>

                                    </div>

                                </div>

                                <div class="col-md-7 col-sm-8">

                                    <div class="row">

                                        <div class="col-md-6 col-sm-6">

                                            <label>multiplier</label>

                                            <div class="form-group" aria-describedby="emailHelp">

                                                <input type="text" name="" id="multiplier" class="form-control" disabled>
                                                <input style="border:2px solid #01f593" type="hidden" id="hidden_multiplier" value="" disabled>

                                            </div>

                                        </div>

                                        <div class="col-md-6 col-sm-6">

                                            <label>win chance</label>

                                            <div class="form-group" aria-describedby="emailHelp">

                                                <input type="text" name="" id="winChance" class="form-control" disabled>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>



                        <div class="main-bet">

                            <div class="accordion active">

                                <label>

                                    <i class="fa fa-question-circle">

                                        <div class="ques-bx">

                                            <p>"Side Bet" wager is OPTIONAL and has a minimum of 100 TRX. <br>You may select one, and only one side bet option and will be paid the appropriate multiplier for the respective side bet selected.<br>
                                            <br>Odd = Lucky Number is Odd<br>
                                            Even = Lucky Number is Even<br>
                                            Yin = First digit > Second digit<br>
                                            Yang = Second digit > First digit<br>
                                            Bang = First digit = Second digit<br>
                                            Zero = Lucky Number is 00<br>
                                            <br>
                                            Progressive Jackpot: See Details in Leaderboard Panel!</p>

                                        </div>

                                    </i>side bet</label>

                                <!-- <a href="#" class="minimize"><i class="fa fa-minus"></i></a> -->

                            </div>


                            <div class="panel mz-mnix" style="max-height: 368px;">

                                <div class="row">

                                    <div class="col-md-5 col-sm-4">

                                        <div class="form-group">

                                            <div class="ic-dim">

                                                <img src="../assets/images/stone.png" alt="">

                                            </div>

                                            <div class="frm-gt" aria-describedby="emailHelp">

                                                <input type="text" name="number" placeholder="0.00" id="sidebetAmount"

                                                    class="form-control">

                                                <span>trx</span>

                                            </div>

                                        </div>

                                    </div>
								

                                
                                    <div class="col-md-7 col-sm-8">

                                        <div class="od-ec">

                                            <div id="sidebet">
                                                <ul>

                                                    <li><a href="javascript:void(0);" id="odd" class="btn" style="font-size: 12px">

                                                            <label class="checkbx">

                                                                <input type="radio" name="r2">

                                                                <span class="checkmark"></span>

                                                            </label>odd
															
                                                        </a></li>

                                                    <li><a href="javascript:void(0);" id="even" class="btn" style="font-size: 12px">

                                                            <label class="checkbx">

                                                                <input type="radio" name="r2">

                                                                <span class="checkmark"></span>

                                                            </label>even

                                                        </a></li>

                                                    <li><a href="javascript:void(0);" id="yin" class="btn" style="font-size: 12px">

                                                            <label class="checkbx">

                                                                <input type="radio" name="r2">

                                                                <span class="checkmark"></span>

                                                            </label>yin

                                                        </a></li>

                                                    <li><a href="javascript:void(0);" id="yang" class="btn" style="font-size: 12px">

                                                            <label class="checkbx">

                                                                <input type="radio" name="r2">

                                                                <span class="checkmark"></span>

                                                            </label>yang

                                                        </a></li>
                                                    <li><a href="javascript:void(0);" id="bang" class="btn" style="font-size: 12px">

                                                            <label class="checkbx">

                                                                <input type="radio" name="r2">

                                                                <span class="checkmark"></span>

                                                            </label>bang

                                                        </a></li>

                                                    <li><a href="javascript:void(0);" id="zero" class="btn" style="font-size: 12px">

                                                            <label class="checkbx">

                                                                <input type="radio" name="r2">

                                                                <span class="checkmark"></span>

                                                            </label>zero

                                                        </a></li>

                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                </div>



                                <div class="row">

                                    <div class="col-md-5 col-sm-4">

                                        <label>side bet payout on win</label>

                                        <div class="form-group">

                                            <div class="ic-dim">

                                                <img src="../assets/images/stone.png" alt="">

                                            </div>

                                            <div class="frm-gt">

                                                <input type="text" name="number"  aria-describedby="emailHelp" placeholder="" id="sidebet-payout" value="0" class="form-control" disabled>

                                                <span>trx</span>

                                            </div>

                                        </div>

                                    </div>

                                    <div class="col-md-7 col-sm-8">

                                        <div class="row">

                                            <div class="col-md-6 col-sm-6">

                                                <label>multiplier</label>

                                                <div class="form-group" aria-describedby="emailHelp">

                                                    <input type="text" name="" id="sidebet-multiplier" class="form-control" value="" disabled>
                                                    <input style="border:2px solid #18cae6" type="hidden" id="hidden_sidebetmultiplier" value="" disabled>

                                                </div>

                                            </div>

                                            <div class="col-md-6 col-sm-6">

                                                <label>win chance</label>

                                                <div class="form-group" aria-describedby="emailHelp">

                                                    <input type="text" id="sidebet-winChance" class="form-control" value="" disabled>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>



                        

                    </div>


                    <div class="col-lg-4 col-md-5 col-sm-12">

                        <div id="chat-scroll" class="sider-bar">

                            <ul class="nav nav-tabs" style="padding-top:10px;">

                                <li><a data-toggle="tab" href="#tab1">Leaderboards</a></li>
                                
                            	<li class="active"><a data-toggle="tab" href="#tab9">Chat</a></li>
                            
                                <li><a data-toggle="tab" href="#tab6">Global Rank</a></li>

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
                                            			<span style="display: block;font-size: 12px;color: #fff;text-transform: uppercase;letter-spacing: 9px;text-align: center; padding-left:12px">Side Bet</span>
<!--                                             			<span style="display: block;font-size: 24px;text-transform: uppercase;font-style: italic;font-weight: 900;background: linear-gradient(to bottom, #ffff00 0%, #ffa500 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-family: fantasy;letter-spacing: 3px;">Jackpot</span> -->
                                                    	<img src="images/Cool Text - JACKPOT 319957269967239.png" alt="jackpot bag" style="width: 80%;" />
                                                	</span>
                                            	</div>
                                            </div>
                                            
                                            </li>

                                            <li>
                                            	<div class="row">
                                            		<div class="col-md-12 col-sm-12 col-xs-12">
<!--                                                 		<input class="form-control trx-value-in" value="123,780" style="position: relative;"> -->
                                                    <span style="position: relative;top: 0px;">
                                                    	<span id="sidebet-span-info" class="trx-value-lable" style="color: #fff;position: relative;top: 0px;display: block;font-size: 13px; text-align: left;">
                                                    	    <i class="fa fa-question-circle">

                                                                <div class="ques-bx" style="width: 190px;">
                            
                                                                    <p>PROGRESSIVE JACKPOT<br>
                                                                    <br>
                                                                    
                                                                    Side Bet wager <strong>REQUIRED</strong>.<br>
                                                                    EVERY ROLL CAN WIN<br>
                                                                    <br>
                                                                    100 TRX Minimum<br>
                                                                    <br>
                                                                    On Win:<br>
                                                                    5% Player<br>
                                                                    5% to Dividends<br>
                                                                    90% to next Jackpot<br>
                                                                    Odds: 1 in 50,000
                                                                </p>
                            
                                                                </div>
                            
                                                            </i>
                                                            Enable Side Bet to Win:
                                                    	</span>
                                                    	<span id="sidebet-jackpot" class="trx-value-in glow">0</span>
                                                              
                                                    	<span class="trx-text">TRX</span>
                                                    </span>
                                                	</div>
                                            	</div>
                                             </li>

                                        </ul>

                                        <ul class="nav nav-tabs">

                                            <li class="active"><a data-toggle="tab" href="#tab3">Top Topian</a></li>
                                            <li><a data-toggle="tab" href="#tab5">Top Miners</a></li>
                                            <!--<li><a data-toggle="tab" href="#tab4" disabled>Lucky Ones</a></li>-->

                                        </ul>



                                        <div class="tab-content">

                                            <div id="tab3" class="tab-pane fade in active" style="height: 650px;">

                                                <div class="counter-bx">

                                                    <p>Countdown: <span id="demo">00:00:00</span> <br><strong>Prize 0.5% of Dividend Pool<br>Minimum 50 TRX Mainbet Wager</strong></p>

                                                </div>



                                                <div class="main-coutn" style="height: 567px;overflow-y: auto;">

                                                    <ul id="kingtopianLeaderboardX">


                                                    </ul>



                                                    <h6>Data fetched every minute</h6>

                                                </div>

                                            </div>



                                            <div id="tab4" class="tab-pane fade">

                                                <div class="counter-bx">

                                                    <p>Countdown: <span id="demo2">00:00:00</span><br> <strong>Prize 0.5% of Dividend Pool<br>Minimum 100 TRX Side Bet Wager</strong></p>

                                                </div>



                                                <div class="main-coutn" style="height: 567px;overflow-y: auto;">
                                                    
                                                    <ul id="sideBetWarriorsLeaderboard"></ul>

                                                    <h6>Data fetched every minute</h6>

                                                </div>

                                            </div>
                                            
                                            <div id="tab5" class="tab-pane fade">

                                                <div class="counter-bx">

                                                    <p>Total Minted : <span id="minedTotalTokan"></span><br> <strong>Total Minted : <span id="minedToken">0</span></span></strong><br>Prizes paid out every 100K TOPIA mined</p>

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
                                        <div id="tab7" class="chet-bx scroll-touch tab-pane fade in active" style="height: 732px;overflow-x: hidden; overflow-y: auto;">
                                        <!-- <ul>
                                            <li class="reci" style="border-radius: 15px 15px 15px 15px;text-align: center;">Coming Soon!</li>
                                        </ul> -->
                                        <ul id="chatDiv"></ul>

                                        <!--<div class="write-msg">

                                            <input id="message" type="text" name="" placeholder="Write something..." class="form-control" maxlength = "150">

                                            <button id="sendChat"><img src="images/send.png" alt=""></button>

                                        </div>-->

                                    </div>

                                    
                                </div>
                                 <div class="write-msg">

                                            <input id="message" type="text" name="" placeholder="Write something..." class="form-control" maxlength = "150">

                                            <button id="sendChat"><img src="../assets/images/send.png" alt=""></button>

                                        </div>

                                </div>

                                <div id="tab6" class="chet-bx scroll-touch tab-pane fade" style="height: 813px; overflow-x: hidden;overflow-y: auto;padding: 0;">
                                        <div class="main-coutn">
                                            <ul id="globalLeaderboard"></ul>
                                        </div>
                                    </div>

                            </div>

                        </div>

                    </div>

                </div>



                <div class="bets-tabuler-data">

                    <div class="bets-tabs-dt">

                        <ul class="nav nav-tabs">

                            <li id="myBetTableBottom"><a data-toggle="tab" href="#bet1">My Bets</a></li>

                            <li id="allBetTableButton" class="active"><a data-toggle="tab" href="#bet2">All Bets</a></li>

                            <li id="highRollersTableBottom"><a data-toggle="tab" href="#bet3">High Rollers</a></li>

                            <li id="rareWinsTableBottom"><a data-toggle="tab" href="#bet4">Rare Wins</a></li>

                            <li id="allSideBetsTableBottom"><a data-toggle="tab" href="#bet5">All Side Bets</a></li>

                            <li id="mySideBetsTableBottom"><a data-toggle="tab" href="#bet6">My Side Bets</a></li>

                        </ul>



                        <div class="tab-content">

                            <div id="bet1" class="tab-pane fade">

                            </div>



                            <div id="bet2" class="tab-pane fade in active">

                                

                            </div>



                            <div id="bet3" class="tab-pane fade">

                                

                            </div>



                            <div id="bet4" class="tab-pane fade">

                                

                            </div>



                            <div id="bet5" class="tab-pane fade">

                                

                            </div>



                            <div id="bet6" class="tab-pane fade">

                                

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- End Main Content -->



            <!-- Footer -->

            <footer>

                <div class="row">

                    <div class="col-lg-4 col-md-4 col-sm-4">

                        <div class="footer-bx">

                            <p>Current Time: <span id="currentTime"></span> (UTC)</p>

                        </div>

                    </div>

                    <div class="col-lg-5 col-md-5 col-sm-5">

                        <div class="footer-bx">

                            <p>Copyright © 2019 TRONtopia Inc. All rights reserved.</p>

                        </div>

                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-3">

                        <div class="social-bx">

                            <a href="https://t.me/trontopia" target="_blank"><i class="fa fa-paper-plane"></i></a>

                            <a href="https://www.twitter.com/tron_topia" target="_blank"><i class="fa fa-twitter"></i></a>

                        </div>

                    </div>

                </div>
                <p style="color:grey; font-size: 10px;">Please do not click on any links on this site if you reside in a location where gambling, betting, or lottery over the internet is illegal.  All visitors must must be 21 years of age to participate in any activities on this site regardless of any local law that may be in conflict.  Players are responsible for checking all local laws within their jurisdiction to ensure proper understanding of activities covered.

TRONtopia provides its players with the world's first undoubtedly fair e-Gaming platform!  We encourage all players to consider the fact that online gambling may expose the player to a particular level of financial risk.  Because of this, it is strongly advised that our players remain aware of the risks involved at all times and take appropriate action.

Our goal is to provide a safe, fair, and fun experience to all of our customers.  If you feel that you require assistance with any gambling related addiction, please contact our Customer Assistance Program team via email to <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d4b7b5a494a0a6bbbaa0bba4bdb5fab7bbfa">[email&#160;protected]</a></p>
            </footer>

            <!-- End Footer -->

        </div>



        <div class="notifcatio-bx">

            <ul>

                <li id="sidebetWinNotify" style="display:none;">

                    <div class="notify-bx">

                        <div class="ic-nit">

                            <img src="../assets/images/dimnd-1.png" alt="">

                        </div>

                        <div class="noti-dt">

                            <h6>Congratulations!</h6>

                           <!-- <p>You won 125.95 TRX.</p>-->
                        <p><span id="sidebetWinUser">TWXch...bh882</span> has won the Sidebet Jackpot!</p>
                        <p>Amount: <span id="sidebetWinAmount">100000</span>TRX</p>



                            <a href="javascript:void(0);" class="close-no"><img src="../assets/images/close2.png" alt=""></a>

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

    </div>
    <div id="fair" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content gradient-border">

          <!-- Modal Header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><img src="../assets/images/close-po.png" alt="#"></button>
            <center><h5>Provably Fair Betting</h5></center>
          </div>
          <div class="modal-body">
            <div class="row">
                <div class="col-sm-12">
                    <form class="text-left">
                        <div class="form-group">
                            <label for="seeds">Current Seed (SHA256) :</label>
                            <input type="text" class="form-control" id="cur_seeds" aria-describedby="seed" value="" disabled="disabled">
                        </div>
                        <div class="form-group">
                            <label for="seeds">Enter Your Custom Seed:</label>
                            <input type="text" class="form-control" id="new_seeds" aria-describedby="seed" value="">
                        </div>
                        <div class="form-group">
                            <label for="seeds">New Seed (SHA256) :</label>
                            <input type="text" class="form-control" id="formated_seeds" aria-describedby="seed" value="" disabled="disabled">
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
                    <p style="margin-top: 20px;" title="" class="text-left">
                        <span title="">All bets on TRONTOPIA are placed directly to our Smart Contracts on the blockchain. The wager results are verifiable on the blockchain by viewing the transaction ID's for your wagers.<br>
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

    <div class="modal fade" id="not_log_in" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
                            <p title="">
                                Please login to your TRONLink wallet. If you do not have TRONLink wallet installed please visit http://u6.gg/gmc5D and download the chrome extension. (TronTopia is only availble using Chrome browser for the time being)
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>



    <!-- For showing the DICE Rolling status -->
    <div class="modal" id="roll_status" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content gradient-border" style="background: rgba(0, 0, 0, 0.85);">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="exampleModalLongTitle" style="width: 100%;"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="rollPopClose">
                        <span aria-hidden="true" style="font-size: 30px;color: #bbb!important;">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <p title="">
                               <div id="rollStatus" style="font-size: 28px;text-align: center;"></div>
                               <div id="roll_number" style="font-size: 28px;text-align: center;"></div>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- For showing If user is not loged In -->
    <div class="modal" id="notSignIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="rollPopClose">
                    <img src="../assets/images/close-po.png" alt="" id="closeNotSignIn">
                </button>
                
                <div class="login-wrps">
                    <img src="../assets/images/wel-pop.png" alt="">
                    <h3>Please Login to Tronlink</h3>

                    <p>tronlink wallet installed please visit <a href="https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec">Tronlink</a> and download the chrome extension. </p>
                    <p>(trontopia is only availble using chrome browser for the time being)</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
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
