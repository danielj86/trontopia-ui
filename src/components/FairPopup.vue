<template>
 <div id="fair" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content gradient-border">
          <!-- Modal Header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <img src="../assets/images/close-po.png" alt="#">
            </button>
            <center>
              <h5>Provably Fair Betting</h5>
            </center>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <form class="text-left">
                  <div class="form-group">
                    <label for="seeds">Current Seed (SHA256) :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cur_seeds"
                      aria-describedby="seed"
                      value
                      disabled="disabled"
                    >
                  </div>
                  <div class="form-group">
                    <label for="seeds">Enter Your Custom Seed:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="new_seeds"
                      aria-describedby="seed"
                      value
                    >
                  </div>
                  <div class="form-group">
                    <label for="seeds">New Seed (SHA256) :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="formated_seeds"
                      aria-describedby="seed"
                      value
                      disabled="disabled"
                    >
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
                <p style="margin-top: 20px;" title class="text-left">
                  <span title>
                    All bets on TRONTOPIA are placed directly to our Smart Contracts on the blockchain. The wager results are verifiable on the blockchain by viewing the transaction ID's for your wagers.
                    <br>
                    <br>You can enter your own seed above, to be utilized for your wagers. This can be changed at your own will. If you do not enter your own seed, then a random seed will be used.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "FairPopup",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
