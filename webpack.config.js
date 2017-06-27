module.exports = {
    entry: ['./src/js/app.js'],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    externals: {
        "gapi": "gapi"
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["es2015", "stage-0"]
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }
}