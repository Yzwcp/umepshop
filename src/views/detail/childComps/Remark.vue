<template>
  <div class="remark">
    <div class="remark-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="remark-content">
      <div class="top">
        <img :src="Remarks.user && Remarks.user.avatar" alt="" />
        <div class="name">{{ Remarks.user && Remarks.user.uname }}</div>
      </div>
      <div class="bottom">
        <p class="content">{{ Remarks.content && Remarks.content }}</p>

        <span>{{
          (Remarks.date * 1000) | showDate("yyyy-MM-dd hh:mm:ss")
        }}</span>
        <span>{{ Remarks.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "common/utils";

export default {
  name: "Remark",
  props: {
    Remarks: {},
  },
  filters: {
    showDate(value, arg) {
      return dateFormat(value, arg);
    },
  },
};
</script>

<style scpoed>
.remark {
  height: 200px;
  border-bottom: 3px #f9e9ec solid;
  margin-bottom: 8px;
}
.remark-title {
  height: 40px;
  margin: 10px 0;
  line-height: 40px;
  padding: 0 8px;
  border-bottom: 3px #f9e9ec solid;
  border-top: 3px #f9e9ec solid;
  display: flex;
  justify-content: space-between;
}
.remark-content .top {
  padding: 20px 8px;
  height: 70px;
}
.remark-content .name {
  height: 30px;
  width: 200px;
  line-height: 30px;
  float: left;
  padding: 0px 10px;
  font-size: 14px;
  font-weight: 700;
}
.remark-content .top img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  float: left;
  border: 1px solid rgb(181, 181, 181);
}
.remark-content .bottom {
  padding: 0 8px;
  color: #a4a4a4;
}
.remark-content .bottom .content {
  margin-bottom: 12px;
}
</style>