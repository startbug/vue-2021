import thenFs from 'then-fs'

/**
 * 由于nodejs官方提供的fs模块仅支持以回调函数的方式读取文件,不支持Promise的回调方式.
 * 因此需要安装then-fs第三方包,支持基于Promise的方式读取文件的内容
 */
//无法做到顺序读取文件1 2 3
thenFs.readFile('./test1.txt', 'utf8').then((r1) => { console.log(r1); })
thenFs.readFile('./test2.txt', 'utf8').then((r2) => { console.log(r2); })
thenFs.readFile('./test3.txt', 'utf8').then((r3) => { console.log(r3); })