<template>
    <div
      class="modal"
      id="notSignIn"
      v-show="!$store.state.loggedIn"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            id="rollPopClose"
          >
            <img src="../assets/images/close-po.png" alt id="closeNotSignIn">
          </button>

          <div class="login-wrps">
            <img src="../assets/images/wel-pop.png" alt>
            <h3>Please Login to Tronlink</h3>

            <p>
              tronlink wallet installed please visit
              <a
                href="https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec"
              >Tronlink</a> and download the chrome extension.
            </p>
            <p>(trontopia is only availble using chrome browser for the time being)</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "LogedOutPopup",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>