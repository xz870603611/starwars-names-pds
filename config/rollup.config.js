import {uglify} from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
let isProd = process.env.NODE_ENV === 'production';
// 通用的插件
const basePlugins = [replace({
    DEVELOPMENT: !isProd
})];
// 开发环境需要使用的插件
const devPlugins = [];
//生产环境需要使用的插件
const prodPlugins = [uglify()];
let plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins);
let destFilePath = isProd ? './dist/dist.min.js': './dist/dist.js';
export default [{
    input: 'index.js',
    output: {
        format: 'cjs',
        file: destFilePath,
        name: 'index',
        // intro: `var DEVELOPMENT=${!isProd}`
    },
    plugins: plugins
}]