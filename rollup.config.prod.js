
import merge from 'rollup-merge-config';
import pkg from './package.json';
import baseConfig from './rollup.config.js';
const BUILD_PATH = process.env.NODE_ENV === 'development' ? 'dist' : process.env.BUILD_PATH;

var { main, module, browser, libraryName } = pkg;
var cjsName = main.split('/')[1];
var esmName = module.split('/')[1];
var umdName = browser.split('/')[1];


export default merge(baseConfig, {
    output: [{
        file: `${BUILD_PATH}/${umdName}`,
        format: 'umd',
        name: librar
    },{
        file: `${BUILD_PATH}/${cjsName}`,
        format: 'cjs'
    }, {
        file:  `${BUILD_PATH}/${esmName}`,
        format: 'es'
    }]
})