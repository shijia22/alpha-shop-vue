<template>
  <div class="py-3 mb-16 d-flex justify-content-between align-items-center">
    <ul class="d-flex">
      <li v-for="(headerItem, i) in headerItems" :key="`headerItem-${i}`" class="mr-5">{{ headerItem }}</li>
    </ul>
    <img src="https://i.ibb.co/c654J5R/Logo2px.png" alt="header-logo" class="header-logo">
    <div class="d-flex">
      <img v-for="(headerIcon, i) in headerIcons" :key="`headerIcon-${i}`" :src="headerIcon" alt="" class="ml-5">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      headerItems: [
        '男款', '女款', '最新消息', '客製商品', '聯絡我們'
      ],
      headerIcons: [
        'https://i.ibb.co/tpvm3hf/icon2X.png', 'https://i.ibb.co/FV9McBf/icom2x.png', 'https://i.ibb.co/VvWWNTD/icon2x-1.png'
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.header-logo {
  width: 20%;
}
</style>