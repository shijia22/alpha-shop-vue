<template>
  <div class="container">
    <h2 class="mb-8">購物籃</h2>
    <div
      class="item mb-8 d-flex justify-content-between"
      v-for="(productItem, i) in productItems"
      :key="`item-${i}`"
    >
      <img :src="productItem.src" alt="" />
      <div class="item-center">
        <span>{{ productItem.title }}</span>
        <div class="d-flex justify-content-between mt-4">
          <button class="set-num minus">-</button>
          <span class="set-qty">1</span>
          <button class="set-num add">+</button>
        </div>
      </div>
      <div class="item-left">$ {{ productItem.price }}</div>
    </div>
    <div class="item-deliver my-4 d-flex justify-content-between">
      <span>運費</span>
      <span>免費</span>
    </div>
    <div class="my-4 d-flex justify-content-between">
      <span>小計</span>
      <span>$2000</span>
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
          title: '破壞補丁修身牛仔褲',
          src: 'https://i.ibb.co/SsdJMh6/Block2x.png',
          price: '3999',
        },
        {
          title: '刷色直筒牛仔褲',
          src: 'https://i.ibb.co/fnyhVZJ/Block2px.png',
          price: '1299',
        },
      ],
    }
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
</style>
