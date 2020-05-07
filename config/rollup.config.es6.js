import babel from 'rollup-plugin-babel';

export default [{
    input: 'index2.js',
    output: {
        format: 'iife',
        file: './es6/index.js',
        name: 'index',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}]