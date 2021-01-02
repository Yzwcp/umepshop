<template>
  <div id="detail">
    <NavBar>
      <div slot="left" class="back" @click="backhome">
        <img src="~assets/img/home/back.svg" alt="" />
      </div>
      <div slot="center" class="center">
        <div
          v-for="(item, index) in title"
          :key="index"
          :class="{ topitem: true, color: iscolor === index }"
          @click="colorfn(index)"
        >
          {{ item }}
        </div>
      </div>
    </NavBar>
    <Scroll
      class="content2"
      ref="scroll"
      @pullingUp="getpullingUp"
      @scroll="getscroll"
      :probeType="3"
    >
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailInfo :goodInfo="goodInfo"></DetailInfo>
      <DetailShop :shopInfo="shopInfo"></DetailShop>
      <ShopImage
        :detailImage="detailImage"
        @setimgLoad="getimgLoad"
      ></ShopImage>
      <GoodsParams :GoodsSizes="GoodsSizes" ref="Goodsparams"></GoodsParams>
      <Remark :Remarks="Remarks" ref="Remarks"></Remark>
      <GoodsList
        :goods="goods && goods[datatype].list"
        ref="Goodslists"
      ></GoodsList>
    </Scroll>
    <BackTop @click.native="backtop" v-show="isShow"></BackTop>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import DetailSwiper from "./childComps/DetailSwiper";
import DetailInfo from "./childComps/DetailInfo";
import DetailShop from "./childComps/Detailshop";
import ShopImage from "./childComps/shopImage";
import GoodsParams from "./childComps/GoodsParams";
import Remark from "./childComps/Remark";
import BottomBar from "./childComps/BottomBar";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debouce } from "common/debouce";
import { backTopMixin } from "common/mixin";
import { getdetail, GoodInfo, Shop, ShopParams, Remarks } from "network/detail";
export default {
  name: "Detail",
  components: {
    NavBar,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    Scroll,
    ShopImage,
    GoodsParams,
    Remark,
    GoodsList,
    BottomBar,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      title: ["商品", "参数", "评论", "推荐"],
      iscolor: 0,
      topImages: null,
      goodInfo: {
        type: Object,
        default() {
          return {};
        },
      },
      shopInfo: {},
      detailImage: {},
      GoodsSizes: {},
      Remarks: {},
      goods: {
        pop: { page: 0, list: [] },
      },
      datatype: "pop",
      GotoPlace: [],
      GetTabY: null,
      currentindex: 0,
    };
  },
  created() {
    this.iid = this.$route.params.iid; //获取商品iid
    getdetail(this.iid).then((res) => {
      console.log(res);
      //1获取商品轮播图信息
      this.topImages = res.data.result.itemInfo.topImages;
      //2获取商品信息
      this.goodInfo = new GoodInfo(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      //获取店铺信息
      this.shopInfo = new Shop(res.data.result.shopInfo);
      //获取店铺图片
      this.detailImage = res.data.result.detailInfo;
      //获取商品参数
      this.GoodsSizes = new ShopParams(
        res.data.result.itemParams.info,
        res.data.result.itemParams.rule
      );
      //获取评价数据
      this.Remarks = new Remarks(
        res.data.result.rate && res.data.result.rate.list[0]
      );
    });
    this.getHomeGoods("pop");

    //计算图片防抖
    this.GetTabY = debouce(() => {
      this.GotoPlace = [];
      this.GotoPlace.push(0);
      this.GotoPlace.push(this.$refs.Goodsparams.$el.offsetTop);
      this.GotoPlace.push(this.$refs.Remarks.$el.offsetTop);
      this.GotoPlace.push(this.$refs.Goodslists.$el.offsetTop);
      this.GotoPlace.push(Number.MAX_VALUE);
    }, 400);
  },
  mounted() {
    //解决BScroll的bug 当图片加载完后再次计算scroll的高度
    // const refresh = this.debouce(this.$refs.scroll.scroll.refresh, 200);
    // this.$bus.$on("imageload", () => {
    //   this.$refs.scroll && this.$refs.scroll.scroll.refresh();
    //   this.GotoPlace = [];
    //   this.GotoPlace.push(0);
    //   this.GotoPlace.push(this.$refs.Goodsparams.$el.offsetTop);
    //   this.GotoPlace.push(this.$refs.Remarks.$el.offsetTop);
    //   this.GotoPlace.push(this.$refs.Goodslists.$el.offsetTop);
    // });
  },
  methods: {
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //显示当第几页的数据
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    colorfn(index) {
      this.iscolor = index;
      this.$refs.scroll.scroll.scrollTo(0, -this.GotoPlace[index] + 44, 500);
    },
    backhome() {
      this.$router.go(-1);
    },
    getpullingUp() {
      this.getHomeGoods(this.datatype);
      // this.$refs.scroll.scroll.finishPullUp(); //第一次底部加载完 第二次继续加载
    },
    getimgLoad() {
      this.$refs.scroll && this.$refs.scroll.scroll.refresh();
      this.GetTabY(); //执行防抖函数
    },
    getscroll(option) {
      for (let index = 0; index < this.GotoPlace.length; index++) {
        // console.log(this.GotoPlace);
        // console.log(option.y);
        if (
          -option.y + 44 >= this.GotoPlace[index] &&
          -option.y + 44 <= this.GotoPlace[index + 1]
        ) {
          this.currentindex = index;
        }
      }
      this.iscolor = this.currentindex;
      //返回顶部
      if (option.y < -1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
  filters: {
    formatdate(val) {
      return;
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 1;
  height: 100vh;
  background: white;
}
#detail .center {
  display: flex;
  justify-content: center;
  font-size: 12px;
}
#detail .topitem {
  flex: 1;
}
#detail .color {
  color: var(--color-tint);
}
.back {
  margin-left: 10px;
}
.back img {
  width: 15px;
  height: 15px;
}
.content2 {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>