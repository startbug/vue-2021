import thenFs from 'then-fs'

/*
    then方法中返回一个promise对象,就可以继续调用then方法读取文件,解决回调地狱问题
*/
thenFs.readFile('./test111.txt', 'utf8').then((r1) => {
        console.log(r1);
        return thenFs.readFile('./test2.txt', 'utf8')
    }).then((r2) => {
        console.log(r2);
        return thenFs.readFile('./test3.txt', 'utf8')
    }).then((r3) => { console.log(r3); })
    //通过catch方法捕获前面的错误
    .catch((err) => {
        console.log(err.message);
    })