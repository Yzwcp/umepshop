<template>
  <div id="goodsparams">
    <table class="size">
      <tr
        class="tr"
        :key="index"
        v-for="(item, index) in GoodsSizes.sizes && GoodsSizes.sizes.tables[0]"
      >
        <td
          style="width: 50px"
          v-for="(items, index) in item.length"
          :key="index"
        >
          {{ item[index] }}
        </td>
      </tr>
    </table>
    <table class="size">
      <tr
        class="tr"
        :key="index"
        v-for="(item, index) in GoodsSizes.infos && GoodsSizes.infos.set"
      >
        <td style="width: 50px">{{ item.key }}:</td>
        <td style="text-algin: left; color: #ff8198">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "GoodsParams",
  props: {
    GoodsSizes: {},
  },
};
</script>

<style scoped>
.size {
  width: 100%;
  padding: 0 8px;
  text-align: left;
}
tr {
  height: 30px;
  width: 100%;
}
td {
  border-bottom: 1px #f9e9ec solid;
}
</style>