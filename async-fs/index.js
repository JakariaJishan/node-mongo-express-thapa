const fs = require('fs');

// fs.writeFile('hello.txt', 'this is demo text file', () => {
//     console.log('done')
// })

fs.readFile('hello.txt', 'utf-8' , (err, data) => {
    console.log(data + '🤣');
})