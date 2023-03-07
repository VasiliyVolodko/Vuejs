module.exports = {
  chainWebpack: (config) => {
    const imgRule = config.module.rule("images");
    imgRule
      .use("file-loader")
      .loader("image-webpack-loader")
      .tap((options) => {
        const ret = options || {};
        ret.pngquant = {
          quality: [0.65, 0.9],
          speed: 4,
        };
        return ret;
      });

    config.module.rules.delete("svg");

    config.module
      .rule("svg")
      .test(/\.(svg)(\?.*)?$/)
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("svg-vue3-loader")
      .loader("svg-vue3-loader");
  },
};
