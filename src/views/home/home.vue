<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <tab-control
      class="aaa"
      ref="refindex2"
      @settabcontrolindex="settabcontrolindex"
      :tabmsg="['流行', '新款', '精选']"
      :class="{ fixed: istabFixed }"
      v-show="istabFixed"
      @click.native="backTop"
    ></tab-control>
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="getY"
      @pullingUp="getpullingUp"
    >
      <HomeSwiper :banners="banners" @setimgload="getimgload"></HomeSwiper>
      <Recommend :recommends="recommends"></Recommend>
      <Feature></Feature>
      <tab-control
        v-show="!istabFixed"
        ref="refindex1"
        @settabcontrolindex="settabcontrolindex"
        :tabmsg="['流行', '新款', '精选']"
      ></tab-control>
      <GoodsList :goods="goods[datatype].list"></GoodsList>
    </Scroll>

    <BackTop @click.native="backtop" v-show="isShow"></BackTop>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import Recommend from "./childComps/Recommend";
import Feature from "./childComps/Feature";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      datatype: "pop",
      isShow: false,
      taboffsetTop: 0,
      istabFixed: false,
    };
  },
  created() {
    //请求banner数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
    //商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell"); //封装methods函数
  },
  mounted() {
    //解决BScroll的bug 当图片加载完后再次计算scroll的高度
    // const refresh = this.debouce(this.$refs.scroll.scroll.refresh, 200);
    this.$bus.$on("imageload", () => {
      this.$refs.scroll.scroll.refresh();
    });
  },
  methods: {
    // debouce: function (func, delay) {
    //   let timer = null;
    //   return function (...args) {
    //     if (timer) clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       func.apply(this, args);
    //     }, delay);
    //   };
    // }, //防抖
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //显示当第几页的数据
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    settabcontrolindex(index) {
      const datatype = ["pop", "new", "sell"];
      this.datatype = datatype[index];
      this.$refs.refindex1.colorIndex = index;
      this.$refs.refindex2.colorIndex = index;

      // console.log(this.$refs.refindex.colorIndex); 父访问子 在tab-control 设置ref='refindex'
    },
    //返回顶部
    backtop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    getY(position) {
      if (position.y < -1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      const yy = this.taboffsetTop + 44;
      if (-position.y > yy) {
        this.istabFixed = true;
      } else {
        this.istabFixed = false;
      }
    },
    backTop() {
      this.$refs.scroll.scroll.scrollTo(0, -this.taboffsetTop - 45, 500);
    },
    // 上拉加载更多
    getpullingUp() {
      this.getHomeGoods(this.datatype);
      this.$refs.scroll.scroll.finishPullUp(); //第一次底部加载完 第二次继续加载
    },
    //监听swiper图片是否加载完
    getimgload() {
      this.taboffsetTop = this.$refs.refindex1.$el.offsetTop;
    },
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
  },
};
</script>
<style scoped>
.home-nav {
  background: var(--color-tint);
  color: white;
  height: 44px;
  position: fixed;
  z-index: 15;
  left: 0;
  right: 0;
  top: 0;
  /* base.css 设置的变量颜色 */
}
#home {
  width: 100%;
  height: 100vh;
}
/* .content {
} */
.content {
  height: calc(100% - 49px - 44px - 5px);
  overflow: hidden;
  margin-top: 44px;
}

/* .fixed {
} */
</style>