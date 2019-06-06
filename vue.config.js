const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
    chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
	},

    devServer: {
		proxy: {
			'/api1': {
				target: 'http://47.111.106.119:8008/',
				// changeOrigin: true,//跨域
				pathRewrite: {
					'^/api1': ''
				}
			}
		}
	},
    runtimeCompiler: true
};
