<template>
  <div>
    <h2 class="mb-8">運送方式</h2>
    <div class="mb-36">
      <div
        class="radio-container"
        v-for="(deliverItem, i) in deliverItems"
        :key="`item-${i}`"
      >
        <input
          type="radio"
          :value="deliverItem.value"
          v-model="deliverySelect"
          @change="selectDelivery"
          :checked="deliverySelect"
          class="mr-5 radio-input"
        />
        <div class="flex-grow">
          <div class="d-flex justify-content-between">
            <span>{{ deliverItem.title }}</span>
            <span class="deliver-price">{{ deliverItem.price }}</span>
          </div>
          <span class="deliver-price">{{ deliverItem.days }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormDeliver',
  data() {
    return {
      deliverItems: [
        {
          title: '標準運送',
          days: '約 3~7 個工作天',
          price: '免費',
          value: '0',
        },
        {
          title: 'DHL 貨運',
          days: '48 小時內送達',
          price: `$${500}`,
          value: '500',
        },
      ],
      deliverySelect: '0',
    }
  },
  methods: {
    selectDelivery() {
      this.$emit('delivery-select', this.deliverySelect)
    },
  },
}
</script>