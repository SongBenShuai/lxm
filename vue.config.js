const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true,
        target: process.env.VUE_APP_BASE_URL,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
