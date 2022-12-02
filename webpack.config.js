const { Configuration } = require('webpack') // 需要注释掉
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

console.log(process.env.NODE_ENV)
/**
 * @type { Configuration }
 */
const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist '),
        filename: '[name].[chunkhash].bundle.js',
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    }), new VueLoaderPlugin()],
    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: "vue-loader",
            },
            {
                test: /\.s?[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
          ],
    },
    resolve: {
		alias: {
			// Api: path.resolve(__dirname, '../src/api/index.js'),
			// vue: 'vue/dist/vue.js',
			'@': path.resolve('./src'),
			'@view': path.resolve(__dirname, './src/views'),
            'assets': path.resolve(__dirname, './src/assets'),
		}
	},
    devServer: {
        compress: true,
        port: 9000,
        // proxy: {
        //     '/': {
        //       target: baseUrl,
        //       changeOrigin: true,
        //     },
        // },
    }
}

config.mode = process.env.NODE_ENV

module.exports = config