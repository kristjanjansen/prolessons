module.exports = options => {
    return {
        entry: './index.js',
        output: {
            path: __dirname,
            filename: 'build.js'
        },
        module: {
            rules: [{
                test: /.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }],
            }],
        }
    }
}