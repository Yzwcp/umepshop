<template>
  <div class="detailInfo">
    <div class="goodstitle2">
      <span>{{ goodInfo.title }}</span>
    </div>
    <div class="goodsprice">
      <span>{{ goodInfo.realPrice }}</span>
      <s>{{ goodInfo.oldPrice }}</s>
      <span v-if="goodInfo.discount">{{ goodInfo.discount }}</span>
    </div>
    <div class="goodssell">
      <div>{{ goodInfo.columns && goodInfo.columns[0] }}</div>
      <div>{{ goodInfo.columns && goodInfo.columns[1] }}</div>
      <div>
        {{
          goodInfo.columns &&
          goodInfo.services[goodInfo.services.length - 1].name
        }}
      </div>
    </div>
    <div class="goodstrans">
      <p
        v-for="index in goodInfo.services && goodInfo.services.length - 1"
        :key="index"
      >
        <img
          src="//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"
          alt=""
        />
        <span>{{ goodInfo.services[index - 1].name }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
  methods: {
    qwe() {
      console.log(this.goodInfo.columns);
    },
  },
};
</script>

<style scoped>
.detailInfo {
  padding: 8px;
  border-bottom: 5px rgb(240, 239, 239) solid;
}
.goodstitle2 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}
.goodsprice span:nth-child(1) {
  font-size: 25px;
  color: var(--color-tint);
  margin-right: 5px;
}

.goodsprice s {
  color: rgb(213, 212, 212);
}
.goodsprice span:nth-child(3) {
  background: var(--color-tint);
  padding: 2px 8px;
  width: 40px;
  border-radius: 20px;
  margin-left: 6px;
  color: white;
}
.goodssell {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  color: rgb(142, 139, 139);
  border-bottom: 1px rgb(240, 239, 239) solid;
  padding-bottom: 5px;
}
.goodssell {
  flex: 1;
}
.goodstrans {
  display: flex;
  margin: 20px 0px;
  font-size: 16px;
  justify-content: space-between;
  width: 100%;
}
.goodstrans img {
  width: 15px;
  height: 15px;
}
.goodstrans p {
  text-align: center;
}
</style>