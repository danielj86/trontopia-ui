<template>
  <div class="home">
    <MainComponent  />
  </div>
</template>

<script>
// @ is an alias to /src

import VueAlertify from "vue-alertify";
import Vue from "vue";

import MainComponent from "@/components/MainComponent.vue";


Vue.use(VueAlertify);

export default {
  name: "home",
  components: {
    MainComponent
  }
};
</script>
