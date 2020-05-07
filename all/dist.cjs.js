'use strict';

function logA() {
    console.log('function logA called');
}

if (DEVELOPMENT) {
    console.log('处于开发环境');
} else {
    console.log('处于生产环境');
}
var index = logA();

module.exports = index;
