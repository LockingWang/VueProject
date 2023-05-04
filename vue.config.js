const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/VueProject/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const [meta] = args;
      meta.title = 'DailyCheap | 代你去日本';
      meta.icon = 'japan_icon.png';
      meta.meta = {
        description:
          '懷念日本的種種零食與超好用的商品嗎 ?! 包在我身上 ~ !。',
        og: {
          type: 'website',
          url: 'https://lockingwang.github.io/VueProject/#/user/home',
          title: 'DailyCheap',
          image: 'japan_icon.png',
          description:
            '懷念日本的種種零食與超好用的商品嗎 ?! 包在我身上 ~ !。',
        },
      };
      return args;
    });
  },
});
