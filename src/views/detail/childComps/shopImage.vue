<template>
  <div id="shop-image">
    <div>
      {{ detailImage.desc }}
    </div>
    <img
      v-for="(item, index) in detailImage.detailImage &&
      detailImage.detailImage[0].list"
      :src="item"
      :key="index"
      @load="imgLoad"
    />
  </div>
</template>

<script>
export default {
  name: "ShopImage",
  props: {
    detailImage: {},
  },
  methods: {
    imgLoad() {
      this.$emit("setimgLoad");
    },
  },
};
</script>

<style>
#shop-image img {
  width: 100%;
}
</style>