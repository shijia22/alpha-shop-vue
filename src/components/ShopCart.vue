<template>
  <div class="container">
    <h2 class="mb-8">購物籃</h2>
    <div
      class="item mb-8 d-flex justify-content-between"
      v-for="productItem in productItems"
      :key="`item-${productItem.id}`"
    >
      <img :src="productItem.src" alt="" />
      <div class="item-center">
        <span>{{ productItem.title }}</span>
        <div class="d-flex justify-content-between mt-4">
          <button class="set-num minus" @click="minusItem(productItem)">
            -
          </button>
          <span class="set-qty">{{ productItem.qty }}</span>
          <button class="set-num add" @click="plusItem(productItem)">+</button>
        </div>
      </div>
      <div class="item-left">$ {{ productItem.price }}</div>
    </div>
    <div class="item-deliver my-4 d-flex justify-content-between">
      <span>運費</span>
      <span>{{ this.deliveryValue === 0 ? '免費' : '$500' }}</span>
    </div>
    <div class="my-4 d-flex justify-content-between">
      <span>小計</span>
      <span>${{ outputTotal }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
  data() {
    return {
      productItems: [
        {
          id: 1,
          title: '破壞補丁修身牛仔褲',
          src: 'https://i.ibb.co/SsdJMh6/Block2x.png',
          price: '3999',
          qty: 1,
        },
        {
          id: 2,
          title: '刷色直筒牛仔褲',
          src: 'https://i.ibb.co/fnyhVZJ/Block2px.png',
          price: '1299',
          qty: 1,
        },
      ],
      total: 0,
      deliver: '',
    }
  },
  props: {
    deliveryValue: {
      type: Number,
      default: 0
    },
  },
  methods: {
    plusItem(productItem) {
      this.productItems.forEach((item) => {
        if (item.id === productItem.id) item.qty += 1
      })
    },
    minusItem(productItem) {
      this.productItems.forEach((item) => {
        if (item.id === productItem.id && item.qty >= 1) {
          item.qty -= 1
        }
      })
    },
  },
  computed: {
    outputTotal() {
      let totalCount = 0

      this.productItems.forEach((item) => {
        totalCount += item.price * item.qty
         return totalCount
      })

      totalCount = totalCount + this.deliveryValue
      return totalCount
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem 1.5rem;
  border: 1px solid $simple-gray;
  border-radius: 8px;
}

.item-deliver {
  padding-top: 1.25rem;
  padding-bottom: 2rem;
  border-top: 1px solid $simple-gray;
  border-bottom: 1px solid $simple-gray;
}

.item img {
  width: 100px;
  height: 100px;
}

button {
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: $simple-gray;
}

.item-center {
  width: 145px;
}
</style>
