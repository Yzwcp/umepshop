<template>
  <div id="fenlei">
    <NavBar class="nav-bar">
      <div slot="center" class="center">分类</div>
    </NavBar>
    <div class="flex">
      <Scroll class="contentleft">
        <SideTab
          @setmaitKey="getmaitKey"
          :categoryList="categoryList"
        ></SideTab>
      </Scroll>
      <Scroll class="contentright" ref="right">
        <SideRight
          class="cgright"
          :getRightCategoryList="getRightCategoryList"
        ></SideRight>
        <GoodsList :goods="categoryDetailList.data"></GoodsList>
      </Scroll>
    </div>
  </div>
</template>
<script>
import { LeftMainBar, getRightCategory, getRightDetail } from "network/fenlei";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import SideTab from "./childComps/SideTab";
import SideRight from "./childComps/SideRight";
export default {
  name: "fenlei",
  data() {
    return {
      categoryList: [],
      getRightCategoryList: {},
      maitKey: "3627",
      miniWallkey: "10062603",
      categoryDetailList: {},
    };
  },
  components: { SideTab, NavBar, Scroll, SideRight, GoodsList },
  created() {
    LeftMainBar().then((res) => {
      this.categoryList.push(res.data.data.category.list);
    });
    this._getRightCategory();
    this._getRightDetail();
  },
  methods: {
    _getRightCategory() {
      getRightCategory(this.maitKey).then((res) => {
        this.getRightCategoryList = res.data.data;
      });
    },
    _getRightDetail() {
      getRightDetail(this.miniWallkey).then((res) => {
        this.categoryDetailList = res;
      });
    },
    getmaitKey(item) {
      this.maitKey = item.maitKey;
      this.miniWallkey = item.miniWallkey;
      console.log(item.maitKey);
      this._getRightCategory();
      this._getRightDetail();
      this.$refs.right.scroll.scrollTo(0, 0, 500);
    },
  },
};
</script>
<style scoped>
.center {
  color: white;
}
.nav-bar {
  background: var(--color-tint);
}

#fenlei .contentleft {
  flex: 1;
  float: left;
  overflow: hidden;
  height: calc(100% - 44px - 49px);
}
.contentright {
  float: left;
  height: calc(100% - 44px - 49px);

  flex: 3;
  overflow: hidden;
}
.flex {
  display: flex;
  height: 100vh;
}
</style>