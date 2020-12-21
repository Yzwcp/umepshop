<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <Recommend :recommends="recommends"></Recommend>
    <Feature></Feature>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import Recommend from "./childComps/Recommend";
import Feature from "./childComps/Feature";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    //请求banner数据
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.data.banner.list;
      console.log(this.banners);
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>
<style scoped>
.home-nav {
  background: var(--color-tint);
  color: white;
  height: 44px;
  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  top: 0;
  /* base.css 设置的变量颜色 */
}
#home {
  padding-bottom: 500px;
}
</style>