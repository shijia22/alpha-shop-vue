<template>
  <div class="btn-container pt-6 d-flex justify-content-between">
    <button
      class="back d-flex align-items-center"
      :class="{ show: backShow() }"
      @click="backClick"
    >
      <img src="/images/left.png" alt="" />
      上一步
    </button>
    <button
      v-if="this.page <= 1"
      class="next d-flex align-items-center"
      @click="nextClick"
    >
      下一步
      <img src="/images/right.png" alt="" />
    </button>
    <button v-else class="next d-flex align-items-center">確認訂單</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      btnIsShow: true,
    }
  },
  props: {
    page: {
      type: Number,
    },
  },
  methods: {
    nextClick() {
      this.$emit('next-step')
    },
    backClick() {
      this.$emit('back-step')
    },
    backShow() {
      return this.page >= 1 ? true : false
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-container {
  border-top: 1px solid $simple-gray;
}

.back {
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.75rem;
  }
  visibility: hidden;
}

.show {
  visibility: visible;
}

.next {
  padding: 11px 48.5px;
  color: #ffffff;
  border-radius: 8px;
  background: $btn-color;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.75rem;
  }
}
</style>
