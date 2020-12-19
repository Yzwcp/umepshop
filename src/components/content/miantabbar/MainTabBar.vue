<template>
  <TabBar>
    <tab-bar-item path="/home">
      <template v-slot:itemicon>
        <img src="~assets/img/tabbar/index.png" alt="" />
      </template>
      <template v-slot:itemtext>
        <div slot="itemtext">首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/fenlei">
      <template v-slot:itemicon>
        <img src="~assets/img/tabbar/fenlei.png" alt="" />
      </template>
      <template v-slot:itemtext>
        <div slot="itemtext">分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcar">
      <template v-slot:itemicon>
        <img src="~assets/img/tabbar/shopcat.png" alt="" />
      </template>
      <template v-slot:itemtext>
        <div slot="itemtext">购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/user">
      <template v-slot:itemicon>
        <img src="~assets/img/tabbar/user.png" alt="" />
      </template>
      <template v-slot:itemtext>
        <div slot="itemtext">个人</div>
      </template>
    </tab-bar-item>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar,
  },
};
</script>