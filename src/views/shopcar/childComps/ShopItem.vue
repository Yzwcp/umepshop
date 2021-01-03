<template>
  <div class="shopitems">
    <Scroll>
      <ul>
        <li v-for="(item, index) in shopCarts" :key="index">
          <img
            v-if="item.checked == false"
            @click="itemcheck(item)"
            class="danxuan"
            src="~assets/img/home/danxuan.svg"
            alt=""
          />
          <img
            v-else-if="item.checked == true"
            @click="itemcheck(item)"
            class="danxuan"
            src="~assets/img/home/danxuanactive.svg"
            alt=""
          />
          <img class="coverimg" :src="item.image" alt="" />
          <div class="shopinfos">
            <p class="title">{{ item.title }}</p>
            <p class="desc">{{ item.desc }}</p>
            <p class="">
              <span class="price">{{ item.price }}</span>
              <span>×{{ item.count }}</span>
            </p>
          </div>
        </li>
      </ul>
    </Scroll>
    <div class="tottal">
      <span>
        <img
          v-if="$store.state.isAllCheck == false"
          @click="isAll"
          class="danxuan"
          src="~assets/img/home/danxuan.svg"
          alt=""
        /><img
          v-else-if="$store.state.isAllCheck == true"
          @click="isAll"
          class="danxuan"
          src="~assets/img/home/danxuanactive.svg"
          alt=""
        />

        全选
      </span>
      <span
        >合计<span class="price">{{ shopCartsTotal }}</span
        >¥</span
      >
      <span>去计算{{ shopCartsCount }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "ShopItems",
  components: { Scroll },
  computed: {
    ...mapGetters([
      "shopCarts",
      "shopCartsCount",
      "shopCartsTotal",
      "isAllChecked",
    ]),
  },
  data() {
    return {
      isAllCheck: false,
    };
  },
  methods: {
    itemcheck(item) {
      item.checked = !item.checked;
      // this.isAllCheck = !this.$store.state.shopCarts.find((i) => {
      //   return !i.checked;
      // });
      this.$store.state.isAllCheck = this.$store.state.shopCarts.every((i) => {
        return i.checked;
      });
    },
    isAll() {
      this.$store.state.isAllCheck = !this.$store.state.isAllCheck;
      if (this.$store.state.isAllCheck) {
        this.$store.state.shopCarts.forEach((element) => {
          element.checked = true;
        });
      } else {
        this.$store.state.shopCarts.forEach((element) => {
          element.checked = false;
        });
      }
    },
  },
};
</script>

<style scoped>
.shopitems li {
  width: 100%;
  height: 120px;
  padding: 8px 10px;
}
.shopitems {
  height: 100vh;
}
.shopitems .wrapper {
  height: calc(100% - 50px - 49px - 50px);
  overflow: hidden;
}
.coverimg {
  width: 80px;
  height: 100%;
  border-radius: 10px;
  float: left;
}
.danxuan {
  width: 20px;
  height: 20px;
  float: left;
  margin-right: 8px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.shopinfos {
  width: 190px;
  float: left;
  padding: 0 8px;
}
.title,
.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.shopinfos {
  line-height: 34px;
}
.price {
  font-size: 16px;
  color: var(--color-tint);
  padding: 0 2px;
}
.desc {
  font-size: 14px;
  color: rgb(184, 184, 184);
}
.tottal {
  height: 50px;
  width: 100%;
  display: flex;
  box-shadow: 0 1px 5px rgba(62, 61, 61, 0.5);
  line-height: 50px;
  position: absolute;
  bottom: 49px;
  padding: 0 0 0 12px;
  background: rgba(255, 250, 250);
}
.tottal span:nth-child(1) {
  flex: 1;
}
.tottal span:nth-child(2) {
  flex: 1.5;
}

.tottal span:nth-child(3) {
  flex: 1.2;
  background: rgb(255, 98, 0);
  text-align: center;
  color: white;
}
</style>