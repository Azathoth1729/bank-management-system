// var webpack = require("webpack")

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
    },
  },
  lintOnSave: false,
  pwa: {
    iconPaths: {
      favicon32: "./public/img/icon/favicon.ico",
      favicon16: "./public/img/icon/favicon.ico",
      appleTouchTcom: "./public/img/icon/favicon.ico",
      maskIcon: "./public/img/icon/favicon.ico",
      msTileImage: "./public/img/icon/favicon.ico",
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    open: false,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:80", //设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        ws: true,
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
