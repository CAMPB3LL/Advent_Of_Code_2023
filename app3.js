//fs = js file system module
const fs = require('fs');
const input = 'input3.txt';
fs.readFile(input, 'utf8', (err, data) => { //fs.readFile(path[, options], callback)
    if(err){
        console.error(err);
        return;
    }

    let array = data.split("\n"); //Turn each line into an array item

    array.forEach((lineInArray, y) => { //Loop for each array item
        if(lineInArray.match(/[/$&+,:;=?@#|'<>^*()%!-]/g)){

            let charInArray = lineInArray.split("");

            charInArray.forEach((charInArray, x) => {
                position = charInArray.match(/[/$&+,:;=?@#|'<>^*()%!-]/g) //Position of special character
                console.log(position, x, y)
            })
        }
    });

})