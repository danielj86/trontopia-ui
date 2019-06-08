<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>

          <span class="icon-bar"></span>

          <span class="icon-bar"></span>

          <span class="icon-bar"></span>
        </button>
        <a
          href="#chat-scroll"
          class="navbar-toggle collapsed"
          style="padding: 0px 0px;font-size: 30px;border: 0;color: #fff;margin: 3px 8px 0px 0px;background: transparent;"
          ><i class="fa fa-comments mv" title=""></i
        ></a>
        <a class="navbar-brand" href="index.html">
          <h1 class="logo-txt">
            <img src="../assets/images/logo.png" alt="LOGO" />
            <strong>TRON</strong>TOPIA
          </h1>
        </a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav" id="menu">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"
              >Games <i class="fa fa-angle-down"></i
            ></a>

            <ul class="dropdown-menu">
              <li><a href="/dice.php"> Ultimate Dice</a></li>

              <li><a href=""> Lucky One Max (Back Soon!) </a></li>
            </ul>
          </li>

          <li>
            <a
              id="dividendPopup"
              href="#"
              data-toggle="modal"
              data-target="#dividend"
              >Dividends</a
            >
          </li>

          <li>
            <a href="#" data-toggle="modal" data-target="#refer">Referrals</a>
          </li>

          <!--<li><a href="#" data-toggle="modal" data-target="#unclaimedWinners">Unclaimed Winners</a></li>-->

          <li>
            <a href="./whitepaper-english.pdf" target="_blank">White Paper</a>
          </li>

          <li>
            <a href="#" data-toggle="modal" data-target="#fair">Fairness</a>
          </li>

          <li>
            <a href="#" data-toggle="modal" data-target="#hplay">How To Play</a>
          </li>

          <li>
            <a
              href="https://tronscan.org/#/address/TGpP9GPsjyq2yo4WrwSJvqYwqZLKRnSzE8"
              target="_blank"
              >Token</a
            >
          </li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle user" data-toggle="dropdown">
              <i class="user_icon fa fa-user"></i><span id="isLogin"></span>
            </a>

            <!--<ul class="dropdown-menu tes-block">

                                <li><a href="#">Profile</a></li>

                                <li><a href="#">Profile</a></li>

                            </ul>-->
          </li>
          <li class="nav-item" id="login_or_not">
            <a
              class="nav-link header-menu-item bg-user"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              data-toggle="modal"
              data-target="#not_log_in"
            >
              <span class="display-block"><span id="isnotLogin"></span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
