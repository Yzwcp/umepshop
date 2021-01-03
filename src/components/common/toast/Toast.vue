<template>
  <div>
    <div v-show="show" class="tip">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: "成功",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.tip {
  width: 180px;
  text-align: center;
  line-height: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 88;
  font-size: 18px;
  transform: translate(-50%, -50%);
}
</style>