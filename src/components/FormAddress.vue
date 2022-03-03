<template>
  <div>
    <h2 class="mb-8">寄送地址</h2>
    <div class="form-container">
      <div class="form-row">
        <div class="form-type">
          <label for="gender">稱謂</label>
          <select name="gender" class="py-3 pl-4 input-border">
            <option value="mr">先生</option>
            <option value="ms">女士</option>
          </select>
        </div>
        <div class="form-type">
          <label for="name">姓名</label>
          <input type="text" placeholder="請輸入姓名" class="py-3 pl-4 input-border" />
        </div>
      </div>
      <div class="form-half">
        <div class="form-type">
          <label for="phone">電話</label>
          <input type="text" placeholder="請輸入行動電話" class="py-3 pl-4 input-border" />
        </div>
        <div class="form-type">
          <label for="mail">Email</label>
          <input type="text" placeholder="請輸入電子郵件" class="py-3 pl-4 input-border" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-type">
          <label for="city">縣市</label>
          <select name="city" class="py-3 pl-4 input-border">
            <option value="">請選擇縣市</option>
            <option value="TPE">臺北市</option>
            <option value="TPH">新北市</option>
          </select>
        </div>
        <div class="form-type">
          <label for="address">地址</label>
          <input type="text" placeholder="請輸入地址" class="py-3 pl-4 input-border" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAddress',
}
</script>

<style lang="scss" scoped></style>
