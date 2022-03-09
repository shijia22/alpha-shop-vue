<template>
  <div class="mb-16 d-flex justify-content-between align-items-center">
    <div class="progress-text d-flex align-items-center" :class="{ active: this.page === 0, checked: this.page >= 1}">
      <span class="circle d-flex justify-content-center mr-2 align-items-center"
        ></span
      >
      寄送地址
    </div>
    <div class="line" :class="{ active: this.page === 0, checked: this.page >= 1}"></div>
    <div class="progress-text d-flex align-items-center" :class="{ active: this.page === 1, checked: this.page >= 2}">
      <span class="circle d-flex justify-content-center mr-2 align-items-center"
        ></span
      >
      運送方式
    </div>
    <div class="line" :class="{ active: this.page === 1, checked: this.page >= 2}"></div>
    <div class="progress-text d-flex align-items-center" :class="{ active: this.page === 2}">
      <span class="circle d-flex justify-content-center mr-2 align-items-center"
        ></span
      >
      付款資訊
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    page: {
      type: Number,
    },
  },
  methods: {
    circleDone() {
      return this.page >= 1 ? true : false
    },
  },
}
</script>

<style lang="scss" scoped>
.progress-text:nth-child(1) .circle::after{
  content: '1';
}
.progress-text:nth-child(3) .circle::after{
  content: '2';
}
.progress-text:nth-child(5) .circle::after{
  content: '3';
}

.progress-text {
  color: $gray;
  &.checked .circle::after {
    content: '\2714';
  }
  &.checked,
  &.active {
    color: #333333;
    .circle {
      background-color: #333333;
      color: $white;
    }
  }
}
.line {
  &.checked,
  &.active {
    background-color: #333333;
  }
}

</style>
