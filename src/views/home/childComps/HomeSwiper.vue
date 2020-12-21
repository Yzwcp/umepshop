<template>
  <div class="block">
    <el-carousel height="200px" arrow="always">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return { interval: 1000 };
  },
  components: {},
};
</script>
<style scoped>
img {
  height: 200px;
}
.el-carousel {
  margin-top: 44px;
}
</style>