//导入node里面的模块
const path = require('path')

//使用nodejs中的导出语法,向外导出一个webpack的配置对象
module.exports = {
    //代表webpack的运行模式,可选值:development和production
    mode: 'production',
    //entry: '指定要处理那个文件',默认是src目录下的index.js
    entry: path.join(__dirname, './src/index1.js'),
    //指定生成的文件的存放路径和生成的文件名
    output: {
        //存放目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名
        filename: 'bundle.js'
    }
}