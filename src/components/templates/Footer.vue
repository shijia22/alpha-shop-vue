<template>
  <div class="footer d-flex align-items-center">
    <img
      src="https://i.ibb.co/c654J5R/Logo2px.png"
      alt="footer-logo"
      class="footer-logo"
    />
    <div class="footer-item d-flex">
      <div v-for="(footerItem, i) in footerItems" :key="`footerItem-${i}`">
        <div class="pb-6 item-title">{{ footerItem.title }}</div>
        <div
          v-for="(item, i) in footerItem.items"
          :key="`item-${i}`"
          class="title"
        >
          {{ item.title }}
        </div>
        <img
          v-for="(icon, i) in footerItem.socials"
          :key="`icon-${i}`"
          :src="icon.image"
          class="icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerItems: [
        {
          title: '客戶服務',
          items: [
            { title: '運送說明' },
            { title: '退換貨相關' },
            { title: '付款資訊' },
            { title: 'FAQ' },
          ],
        },
        {
          title: '關於我們',
          items: [
            { title: '品牌故事' },
            { title: '媒體連繫' },
            { title: 'Press Kit' },
          ],
        },
        {
          title: '資訊',
          items: [
            { title: '隱私權政策' },
            { title: 'Cookies' },
            { title: 'GDPR' },
          ],
        },
        {
          title: '追蹤 ALPHA Shop',
          items: [{ title: '+886 02123-45678' }],
          socials: [
            { image: 'https://i.ibb.co/5KVnwP3/icon.png' },
            { image: 'https://i.ibb.co/d0VVYmM/icon.png' },
            { image: 'https://i.ibb.co/HNT3ddc/icon.png' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  max-width: 1440px;
  margin-top: 7.5rem;
  padding: 4rem 10rem;
  background-color: #f6f7f8;
}
.footer-logo {
  width: 20%;
  margin-right: 6.25rem;
}

.footer-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-column-gap: 3rem;
}

.item-title {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: $bg-color;
}

.title {
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #808080;
}

.icon {
  width: 24px;
  height: 24px;
  display: inline-flex;
  margin-right: 8px;
}
</style>
