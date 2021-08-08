import thenFs from 'then-fs'

/**
 * Promise.all()方法会发起并行的Promise异步操作,
 * 等所有的异步操作全部结束后才会执行下一步的.then操作(等待机制)
 */
const promiseArr = [
    thenFs.readFile('./test1.txt', 'utf8'),
    thenFs.readFile('./test2.txt', 'utf8'),
    thenFs.readFile('./test3.txt', 'utf8')
]

Promise.all(promiseArr)
    .then(result => {
        console.log(result);
    })