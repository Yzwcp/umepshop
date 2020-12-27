<template>
  <div class="tab-control">
    <div v-for="(item, index) in tabmsg" :key="index">
      <span :class="{ isPink: index === colorIndex }" @click="isColor(index)">{{
        item
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    tabmsg: {
      tyepe: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      colorIndex: 0,
    };
  },
  methods: {
    isColor: function (index) {
      this.colorIndex = index;
      this.$emit("settabcontrolindex", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 44px;
  height: 36px;
  z-index: 10;
  background: white;
}
.isPink {
  color: var(--color-high-text);
  border-bottom: var(--color-tint) 2px solid;
}
</style>