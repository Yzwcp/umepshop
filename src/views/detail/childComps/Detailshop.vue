<template>
  <div class="detailshop">
    <div class="top">
      <img :src="shopInfo.logo" alt="" />
      <div class="name">{{ shopInfo.name }}</div>
    </div>
    <div class="info">
      <div class="infobefore">
        {{ Math.round((shopInfo.sells / 10000) * 100) / 100 }}万
        <p>总销量</p>
      </div>
      <div class="infobefore">
        {{ shopInfo.goodsCount }}
        <p>全部宝贝</p>
      </div>
      <div class="shopscore">
        <p v-for="(item, index) in shopInfo.score" :key="index">
          <span>{{ item.name }}</span>
          <span class="colorG" :class="{ colorR: item.isBetter }">{{
            item.score
          }}</span>
          <span
            style="color: white"
            :class="{ shopscoreright: true, bgcolorR: true }"
            v-if="item.isBetter"
            >高</span
          >
          <span
            style="color: white"
            :class="{ shopscoreright: true, bgcolorG: true }"
            v-else
            >低</span
          >
        </p>
      </div>
    </div>
    <div class="inshop">
      <p><a :href="shopInfo.shopUrl">进店逛逛</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shopInfo: {},
  },
};
</script>

<style scoped>
.line {
  height: 0px;
}
.detailshop .top img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  float: left;
  border: 1px solid rgb(181, 181, 181);
}
.detailshop .top {
  padding: 20px 8px;
  height: 100px;
}
.detailshop .name {
  height: 50px;
  width: 200px;
  line-height: 50px;
  float: left;
  padding: 0px 10px;
  font-size: 18px;
  font-weight: 700;
}
.info {
  display: flex;
  padding: 0 20px;
}
.info .infobefore {
  text-align: center;
  flex: 1;
  padding: 15px 0;
}
.infobefore p {
  margin-top: 5px;
}
.info div:nth-child(3) {
  flex: 2;
}
.shopscore p {
  margin: 5px 0;
}
.shopscoreright {
  float: right;
}
.shopscore span {
  margin-left: 5px;
}
.colorG {
  color: rgb(64, 225, 64);
}
.colorR {
  color: rgb(244, 51, 51);
}
.bgcolorG {
  background: rgb(64, 225, 64);
}
.bgcolorR {
  background: rgb(244, 51, 51);
}
.inshop {
  padding: 20px;
  text-align: center;
  height: 80px;
}
.inshop p {
  width: 150px;
  line-height: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border-radius: 10px;
  background: rgb(207, 206, 208);
}
</style>