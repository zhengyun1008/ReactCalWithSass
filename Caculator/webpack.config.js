module.exports = {
    entry: "./src/index.js",
    output: {
        path: 'dist/',
        filename: "bundle.js"
    },
    devtool: 'inline-source-map', //just do inline source maps instead of the default
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.less$/, loader: "style!css!less" },
		    { test: /\.scss$/, loader: 'style!css!sass' },// SASS
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
};
