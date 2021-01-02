<template>
  <div id="back-top">
    <img src="~assets/img/home/BackTop.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
#back-top img {
  width: 40px;
  height: 40px;
  position: fixed;
  z-index: 20;
  bottom: 100px;
  right: 20px;
}
</style>