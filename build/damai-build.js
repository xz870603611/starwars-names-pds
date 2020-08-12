const process = require('child_process');
const processArgv = require('process');
console.log(processArgv.argv[2])
process.exec('cd node_modules/i-damai-component && yarn && npm run build:beta',
    function (error, stdout, stderr) {
        if (error) {
            return console.log(`结束${error}`);
        }
        console.log('打包成功插件');
    })
process.exec('cd node_modules/i-damai-component && yarn && npm run build:pro',
    function (error, stdout, stderr) {
        if (error) {
            return console.log(`结束${error}`);
        }
        console.log('打包成功插件');
    })
if (processArgv.argv[2] === 'dev') {
    process.exec('cd ./ && npm run dev',
        function (error, stdout, stderr) {
            if (error) {
                return console.log(`结束${error}`);
            }
        })
}
if (processArgv.argv[2] === 'beta') {
    process.exec('cd ./ && npm run smart-build-beta',
        function (error, stdout, stderr) {
            if (error) {
                return console.log(`结束${error}`);
            }
        })
}
if (processArgv.argv[2] === 'pro') {
    process.exec('cd ./ && npm run smart-build-pro',
        function (error, stdout, stderr) {
            if (error) {
                return console.log(`结束${error}`);
            }
        })
}