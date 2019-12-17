let path = require('path');
module.exports = {
    entry:{
        bundle:'./frontend/index.js'
    },
    output:{
        path: path.join(__dirname,'frontend/dist'),
        filename:'bundle.js',
        publicPath: '/accests/',
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/,
            
            }
        ]
    },
    devServer:{
        publicPath: '/accests/',
        contentBase: path.join(__dirname, "/"),
        historyApiFallback: true
    }
}