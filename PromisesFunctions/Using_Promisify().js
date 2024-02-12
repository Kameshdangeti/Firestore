const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
readFile('./promise.txt', 'utf') // Reading the .txt file
.then((text) => 
{
console.log(text);
})
.catch((err) => 
{
console.log('Error', err);
});