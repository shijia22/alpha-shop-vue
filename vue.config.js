module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
         @import "@/assets/scss/_main.scss";
         @import "@/assets/scss/_reset.scss";
                  `,
      },
    },
  },
}