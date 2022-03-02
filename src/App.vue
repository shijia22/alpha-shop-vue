<template>
  <div class="app">
    <h2 class="mb-12">結帳</h2>
    <div class="left">
    </div>
    <div class="right">
      <ShopCart />
    </div>
  </div>
</template>

<script>
import ShopCart from './components/ShopCart.vue'

export default {
  name: 'App',
  components: {
    ShopCart,
  },
}
</script>

<style lang="scss">
body {
  font-family: 'Noto Sans TC';
}
.app {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
}

.left {
  flex-grow: 1;
}

.right {
  width: 50%;
}
</style>
