import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'index_compact.js',
    output: {
        format: 'iife',
        file: './cjs/index.js',
        name: 'index',
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs()
    ]
}