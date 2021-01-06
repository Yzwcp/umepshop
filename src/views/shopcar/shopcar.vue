<template>
  <div id="shopcar">
    <NavBar class="shopcar-navbar">
      <div slot="center">购物车{{ shopCartsLength }}</div>
    </NavBar>

    <ShopItem :shopCars="shopCars"></ShopItem>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar";

import ShopItem from "./childComps/ShopItem";
export default {
  name: "shopcar",
  components: {
    NavBar,
    ShopItem,
  },
  data() {
    return {
      shopCars: [],
    };
  },

  created() {
    this.shopCars = this.$store.state.shopCarts;
  },
  computed: {
    ...mapGetters(["shopCartsLength"]),
  },
};
</script>
<style  scoped>
#shopcar .shopcar-navbar {
  color: white;
  background: var(--color-tint);
}
#shopcar {
  height: 100vh;
}
</style>