<template>
  <div class="recommend">
    <div class="recommends" :key="index" v-for="(item, index) in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 6px #eee solid;
}
.recommends img {
  width: 65px;
  height: 65px;
}
</style>