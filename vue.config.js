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
    host: "localhost",
    port: 8080,
    https: false,
    open: true,
    proxy: {
      "/api": {
        target: "http://10.134.40.171:81",
        //secure: true,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
