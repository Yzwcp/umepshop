<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view :key="key"></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/miantabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    },
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
