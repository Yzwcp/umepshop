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
      <Scroll class="contentright">
        <SideRight
          class="cgright"
          :getRightCategoryList="getRightCategoryList"
        ></SideRight>
      </Scroll>
    </div>
  </div>
</template>
<script>
import { LeftMainBar, getRightCategory } from "network/fenlei";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import SideTab from "./childComps/SideTab";
import SideRight from "./childComps/SideRight";
export default {
  name: "fenlei",
  data() {
    return {
      categoryList: [],
      getRightCategoryList: {},
      maitKey: "3627",
    };
  },
  components: { SideTab, NavBar, Scroll, SideRight },
  created() {
    LeftMainBar().then((res) => {
      this.categoryList.push(res.data.data.category.list);
      console.log(res);
    });
    this._getRightCategory();
  },
  methods: {
    _getRightCategory() {
      getRightCategory(this.maitKey).then((res) => {
        this.getRightCategoryList = res.data.data;
        console.log(res.data.data);
      });
    },
    getmaitKey(maitKey) {
      this.maitKey = maitKey;
      this._getRightCategory();
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