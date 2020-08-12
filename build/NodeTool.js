let fs = require('fs'),
    stat = fs.stat;
module.exports = {
    copyTool: function (src, dst) {
        // 读取目录中的所有文件/目录
        fs.readdir(src, function (err, paths) {
            if (err) {
                throw err;
            }
            paths.forEach(function (path) {
                let _src = src + '/' + path,
                    _dst = dst + '/' + path,
                    readable, writable;
                stat(_src, function (err, st) {
                    if (err) {
                        throw err;
                    }

                    // 判断是否为文件
                    if (st.isFile()) {
                        // 创建读取流
                        readable = fs.createReadStream(_src);
                        // 创建写入流
                        writable = fs.createWriteStream(_dst);
                        // 通过管道来传输流
                        readable.pipe(writable);
                    }
                    // 如果是目录则递归调用自身
                    else if (st.isDirectory()) {
                        accessTool(_src, _dst, copyTool);
                    }
                });
            });
        });
    },
    // 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
    accessTool: function (src, dst, callback) {
        // 检查文件是否存在于当前目录中、以及是否可写。
        fs.access(dst, fs.constants.F_OK | fs.constants.W_OK, (err) => {
            if (err) {
                fs.mkdir(dst, function () {
                    callback(src, dst);
                });
            } else {
                callback(src, dst);
            }
        });
    }
}