<template>
  <div class="app">
    <h2 class="mb-12">結帳</h2>
    <div class="d-flex">
      <div class="left">
        <Button />
      </div>
      <div class="right">
        <ShopCart />
      </div>
    </div>
  </div>
</template>

<script>
import ShopCart from './components/ShopCart.vue'
import Button from './components/Button.vue'


export default {
  name: 'App',
  components: {
    ShopCart,
    Button,
  },
}
</script>

<style lang="scss">
body {
  font-family: 'Noto Sans TC';
}
.app {
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
