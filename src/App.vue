<template>
  <div>
    <div class="app">
      <Header />
      <h1 class="mb-12">結帳</h1>
      <div class="d-flex">
        <div class="left">
          <Progress :page="page" />
          <component
            :is="componentViews[page]"
            @delivery-select="deliverySelect"
          />
          <Stepper @next-step="nextStep" @back-step="backStep" :page="page" />
        </div>
        <div class="right">
          <ShopCart :deliveryValue="deliveryValue" />
        </div>
      </div>
    </div>
    <Footer class="footer-outside"/>
  </div>
</template>

<script>
import Header from './components/templates/Header.vue'
import Footer from './components/templates/Footer.vue'
import ShopCart from './components/ShopCart.vue'
import Stepper from './components/Stepper.vue'
import Progress from './components/Progress.vue'
import FormAddress from './components/FormAddress.vue'
import FormDeliver from './components/FormDeliver.vue'
import FormCheckout from './components/FormCheckout.vue'

export default {
  name: 'App',
  data() {
    return {
      page: 0,
      componentViews: ['FormAddress', 'FormDeliver', 'FormCheckout'],
      deliveryValue: 0,
    }
  },
  components: {
    Header,
    Footer,
    ShopCart,
    Stepper,
    Progress,
    FormAddress,
    FormDeliver,
    FormCheckout,
  },
  methods: {
    nextStep() {
      if (this.page < 2) {
        this.page++
      }
    },
    backStep() {
      if (this.page > 0) {
        this.page--
      }
    },
    deliverySelect(value) {
      this.deliveryValue = Number(value)
    },
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
