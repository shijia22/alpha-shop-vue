<template>
  <div class="btn-container pt-6 d-flex justify-content-between">
    <button class="back d-flex align-items-center">
      <img src="/images/left.png" alt="">
      上一步
    </button>
    <button class="next d-flex align-items-center">下一步
      <img src="/images/right.png" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
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
}

.next {
  padding: 11px 48.5px;
  color: #FFFFFF;
  border-radius: 8px;
  background: $btn-color;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.75rem;
  }
}
</style>
