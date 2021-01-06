<template>
  <div class="goodsitem">
    <GoodItem
      v-for="(item, index) in goods"
      :key="index"
      :gooditem="item"
    ></GoodItem>
  </div>
</template>

<script>
import GoodItem from "./GoodsItem";
export default {
  name: "GoodsList",
  components: {
    GoodItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>

<style>
.goodsitem {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>