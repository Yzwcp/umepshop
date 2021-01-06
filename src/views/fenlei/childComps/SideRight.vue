<template>
  <div id="SideRight">
    <ul class="SideRightUl">
      <li v-for="(item, index) in getRightCategoryList.list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideRight",
  props: {
    getRightCategoryList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  // watch: {
  //   getRightCategoryList() {
  //     this.aaaa = this.getRightCategoryList;
  //   },
  // },
};
</script>

<style scoped>
#SideRight img {
  width: 70px;
  height: 70px;
}
.SideRightUl {
  padding-left: 8px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.SideRightUl li {
  margin: 8px 8px;
  width: 70px;
  list-style: none;
}
</style>