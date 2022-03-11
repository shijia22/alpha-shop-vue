<template>
  <div>
    <h2 class="mb-8">寄送地址</h2>
    <form class="form-container">
      <div class="form-row-only">
        <div class="form-type">
          <label for="cc-name">持卡人姓名</label>
          <input
            type="text"
            value="cc-name"
            placeholder="John Doe"
            class="py-3 pl-4 input-border"
          />
        </div>
      </div>
      <div class="form-row-only">
        <div class="form-type">
          <label for="cc-number">卡號</label>
          <input
            type="number"
            value="cc-number"
            placeholder="1111 2222 3333 4444"
            class="py-3 pl-4 input-border"
          />
        </div>
      </div>
      <div class="form-half">
        <div class="form-type">
          <label for="cc-exp">有效期限</label>
          <input
            type="number"
            value="cc-exp"
            placeholder="MM/YY"
            class="py-3 pl-4 input-border"
          />
        </div>
        <div class="form-type">
          <label for="cc-csc">CVC/CCV</label>
          <input type="number" value="cc-csc" placeholder="123" class="py-3 pl-4 input-border" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormCheckout',
}
</script>
