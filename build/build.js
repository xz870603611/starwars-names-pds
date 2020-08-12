const process = require('child_process');
const processArgv = require('process');
console.log(processArgv.argv[2])
process.exec('cd node_modules/pdstoolsdk && yarn && npm run build:dist',
    function (error, stdout, stderr) {
        if (error) {
            return console.log(`结束${error}`);
        }
        console.log('打包成功插件');
    })
if (processArgv === 'dev') {
    process.exec('cd ./ && npm run serve',
        function (error, stdout, stderr) {
            if (error) {
                return console.log(`结束${error}`);
            }
        })
}
if (processArgv === 'smart-build-beta') {
    process.exec('cd ./ && npm run smart-build-beta',
        function (error, stdout, stderr) {
            if (error) {
                return console.log(`结束${error}`);
            }
        })
}
if (processArgv === 'smart-build-pro') {
    process.exec('cd ./ && npm run smart-build-beta',
        function (error, stdout, stderr) {
            if (error) {
                return console.log(`结束${error}`);
            }
        })
}