// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body',
});

const mode = process.env.NODE_ENV || 'development';

module.exports = {
    devtool: (mode === 'development') ? 'inline-source-map' : false,
    mode: 'none',
    // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
    entry: [
        './src/index.js',
    ],
    // output 是放入產生出來的結果的相關參數
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
    // rules 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react','@babel/preset-env'],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

        ],
    },
    // devServer 則是 webpack-dev-server 設定
    devServer: {
        inline: true,
        port: 8008,
        historyApiFallback: true,
        contentBase: "./"
    },
    // plugins 放置所使用的外掛
    plugins: [HTMLWebpackPluginConfig],
};
