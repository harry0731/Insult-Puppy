module.exports = {
    devServer: {
      disableHostCheck: true,
      proxy:  {
        '^/evilinsult': {
          target: 'https://evilinsult.com',
          pathRewrite: {
            '^/evilinsult': ''
          },
          changeOrigin: true,
        },
        '^/dogpic': {
          target: 'https://random.dog',
          pathRewrite: {
            '^/dogpic': ''
          },
          changeOrigin: true,
        }
      }
    }
  }

  