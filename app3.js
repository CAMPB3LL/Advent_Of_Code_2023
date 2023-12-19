//fs = js file system module
const fs = require('fs');
const input = 'input3.txt';
fs.readFile(input, 'utf8', (err, data) => { //fs.readFile(path[, options], callback)
    if(err){
        console.error(err);
        return;
    }

    let array = data.split("\n"); //Turn each line into an array item
    let reg = "/[/$&+,:;=?@#|'<>^*()%!-]/g"

    array.forEach((lineInArray) => { //Loop for each array item

        position = lineInArray.search(reg) //Position of special character

        while(lineInArray.match(reg)){
            console.log(lineInArray.search(reg))
        }
    });

})

// function search(string, regexp, from = 0) {
//     const index = string.slice(from).search(regexp);
//     return index === -1
//         ? -1
//         : index + from;
// }