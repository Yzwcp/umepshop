<template>
  <div id="sidetab">
    <ul class="sidetabUl">
      <li
        v-for="(item, index) in categoryList[0]"
        :key="index"
        @click="isColor(index, item)"
        :class="{ active: index == isColorIndex }"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideTab",
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isColorIndex: 0,
    };
  },
  methods: {
    isColor(index, item) {
      this.isColorIndex = index;
      this.$emit("setmaitKey", item);
    },
  },
};
</script>

<style scoped>
.sidetabUl li {
  text-align: center;
  height: 50px;
  background: rgb(252, 251, 251);
  line-height: 50px;
}

#sidetab .active {
  background: rgb(255, 255, 255);
  color: red;
  border-left: 3px solid red;
}
</style>