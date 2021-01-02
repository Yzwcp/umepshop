<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BSscroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BSscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: true, // 底部上拉加载更多
    });
    //监听滚动事件
    this.scroll.on("scroll", (position) => {
      this.scroll && this.$emit("scroll", position);
    });
    //监听上拉加载更多
    this.scroll.on("pullingUp", () => {
      this.scroll && this.$emit("pullingUp");
    });
    //获取taboffsetTop
  },
};
</script>

<style scoped>
</style>