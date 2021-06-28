module.exports = {
  devServer: {
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      "/api": {
        // target: `http://homemortgate.qxkj360.com`,
        // target: `http://www.jiarongweb.com`,
        target: `http://192.168.0.114:8080`,
        // target: `http://192.168.0.108:9091`,
        changeOrigin: true,
        pathRewrite: {
          // "^/api": "v1"
          "^/api": ""
        }
      }
    },
    disableHostCheck: true
  }
};
