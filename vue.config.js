module.exports = {
  publicPath: './',
  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  configureWebpack: {
    externals: {
      // 在index.html文件使用script引入以下文件才能使用
      // 'vue': 'Vue',
      // 'vue-router': 'VueRouter',
      // 'vuex': 'Vuex'
    }
  }
}
