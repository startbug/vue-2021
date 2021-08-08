import thenFs from 'then-fs'

async function getAllFile() {
    const r1 = await thenFs.readFile('./test1.txt', 'utf8')
    console.log(r1);
}

getAllFile();