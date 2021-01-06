<template>
  <div class="gooditem" @click="itemClick">
    <img
      v-lazy="gooditem.show ? gooditem.show.img : gooditem.img"
      alt=""
      @load="imageload"
    />
    <div class="goodInfo">
      <p class="goodstitle">{{ gooditem.title }}</p>
      <span class="price">{{ gooditem.price }}¥</span>
      <span class="cfav">{{ gooditem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    gooditem: {
      type: Object,
    },
  },
  methods: {
    imageload() {
      this.$bus.$emit("imageload");
    },
    itemClick() {
      this.$router.push("/detail/" + this.gooditem.iid);
    },
  },
};
</script>

<style>
.gooditem {
  width: 48%;
  font-size: 12px;
  /* float: left;
  padding-left: 8px; */
  border-radius: 5px;
}
.gooditem img {
  border-radius: 5px;
  width: 100%;
  height: 200px;

  /* border: 1px solid red; */
}
.goodstitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodInfo {
  text-align: center;
}

.goodInfo .price {
  color: var(--color-tint);
}
.goodInfo .cfav {
  color: rgb(131, 130, 130);
  padding-left: 10px;
}
.cfav::after {
  content: "";
  width: 12px;
  position: absolute;
  height: 10px;
  background: url("~assets/img/home/cfav.svg") 0px 0/14px 11px;
}
</style>