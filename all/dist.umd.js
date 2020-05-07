(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.index = factory());
}(this, (function () { 'use strict';

    function logA() {
        console.log('function logA called');
    }

    if (DEVELOPMENT) {
        console.log('处于开发环境');
    } else {
        console.log('处于生产环境');
    }
    var index = logA();

    return index;

})));
