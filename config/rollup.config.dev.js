import {uglify} from 'rollup-plugin-uglify';
export default [{
    input: 'index.js',
    output: {
        format: 'iife',
        file: './dev/index.js',
        name: 'index',
    },
    plugins:[
        uglify()
    ]
}]