const { defineConfig } = require('vite')

// vue.config.js
module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [tailwindcss, sass({ sassOptions: { indentedSyntax: true } })],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/scss/_variables.scss";
        `,
      },
    },
  },
  // Opciones de configuración
  devServer: {
    proxy: 'http://localhost:4000',
  },
})
