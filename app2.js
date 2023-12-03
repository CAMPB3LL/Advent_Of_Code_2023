//fs = js file system module
const fs = require('fs'); 
const input = 'input2.txt';
fs.readFile(input, 'utf8', (err, data) => { //fs.readFile(path[, options], callback)
    if(err){
        console.error(err);
        return;
    }
    array = data.split("\n")
    array.forEach((array) => { 
        // string.array.replace(''', )
    })
    console.log(array)
})