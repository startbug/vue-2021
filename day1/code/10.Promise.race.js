import thenFs from 'then-fs'

/**
 * Promise.race()方法会发起并行的Promise异步操作，
 * 只要任何一个异步操作完成，就立即执行下一步的.then操作
 */
const promiseArr = [
    thenFs.readFile('./test1.txt', 'utf8'),
    thenFs.readFile('./test2.txt', 'utf8'),
    thenFs.readFile('./test3.txt', 'utf8'),
]

Promise.race(promiseArr)
    .then(result => {
        console.log(result);
    })