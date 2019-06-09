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
        <div id="bet1" class="tab-pane fade"></div>

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
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
