(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rollupJsUtils = {}));
}(this, (function (exports) { 'use strict';

    var func = function func() {
      console.log(42);
    };

    exports.func = func;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
