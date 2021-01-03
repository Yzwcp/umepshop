<template>
  <div class="bottombar">
    <div class="bottombar-left">
      <img src="~assets/img/home/kefu.svg" alt="" />
      <img src="~assets/img/home/shop.svg" alt="" />
      <img src="~assets/img/home/soucang.svg" alt="" />
    </div>
    <div class="bottom-right">
      <span class="addshopcat" @click="addCat">加入购物车</span>
      <span class="shopping">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  methods: {
    addCat(){
      this.$emit('addCat')
    }
  },
};
</script>

<style scoped>
.bottombar {
  height: 49px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background: white;
  z-index: 10;
  line-height: 49px;
  display: flex;
}
.bottombar .bottombar-left {
  flex: 1;
  display: flex;
}
.bottombar .bottombar-left img {
  width: 30px;
  flex: 1;
  height: 26px;
  margin: 0 10px;
  margin: 10px;
}
.bottombar .bottom-right {
  flex: 1;
  display: flex;
}
.shopping,
.addshopcat {
  flex: 1;
  color: white;
  text-align: center;
}
.shopping {
  background: orange;
}
.addshopcat {
  padding: 0 2px;
  background: var(--color-tint);
}
</style>