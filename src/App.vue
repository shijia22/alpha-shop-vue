<template>
  <div class="app">
    <h1 class="mb-12">結帳</h1>
    <div class="d-flex">
      <div class="left">
        <Progress />
        <FormAddress />
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
import Progress from './components/Progress.vue'
import FormAddress from './components/FormAddress.vue'

export default {
  name: 'App',
  components: {
    ShopCart,
    Button,
    Progress,
    FormAddress,
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
  padding: 0 10rem;
  position: relative;
}

.left {
  margin-right: 8.125rem;
  flex-grow: 1;
}

.right {
  width: 40%;
}
</style>
