import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

const BUILD_PATH = process.env.NODE_ENV === 'development' ? 'dist' : process.env.BUILD_PATH;
const isDev = process.env.NODE_ENV === 'development';

export default {
    input: 'src/index.js',
   
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled'})
    ]
}