const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})


const greet = (name) => {
    console.log(`hello, ${name}`);
}

greet('mario');
greet('yoshi');