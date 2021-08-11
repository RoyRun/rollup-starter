
import merge from 'rollup-merge-config';
import pkg from './package.json';
import baseConfig from './rollup.config.js';
const BUILD_PATH = process.env.NODE_ENV === 'development' ? 'dist' : process.env.BUILD_PATH;

var {  browser, libraryName } = pkg;
var umdName = browser.split('/')[1];


export default merge(baseConfig, {
    output: [{
        file: `${BUILD_PATH}/${umdName}`,
        format: 'umd',
        name: libraryName
    }],
    plugins: []
})