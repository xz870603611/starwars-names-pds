import scss from 'rollup-plugin-scss';
export default {
    input: 'index_scss.js',
    output: {
        format: 'cjs',
        file: './scss/js/dist.js',
        name: 'index'
    },
    plugins: [
        scss({
            output: './scss/css/style.css'
        })
    ]
}