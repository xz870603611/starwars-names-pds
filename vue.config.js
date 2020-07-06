console.log('vue.config.js')
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html',
    filenameHashing: true,
    productionSourceMap: false,
    devServer: {
        open: true
    }
};