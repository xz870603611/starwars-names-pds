import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import {uglify} from 'rollup-plugin-uglify';

export default {
    input: 'index_jquery.js',
    output: {
        format: 'umd',
        file: './dist/index.js',
        name: 'index'
    },
    external: ['jquery'],
    paths: {
        jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.js'
    },
    plugins: [
        resolve(),
        commonjs(),
        builtins(),
        uglify()
    ]
}