import info, { s1, s2 as str, say } from './03.按需导出.js'
/*
    info指向默认导出的export default
*/
console.log(s1);
console.log(str);
console.log(say);
console.log(info.a);