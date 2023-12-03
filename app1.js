//fs = js file system module
const fs = require('fs'); 
const input = 'input1.txt';
fs.readFile(input, 'utf8', (err, data) => { //fs.readFile(path[, options], callback)
    if(err){
        console.error(err);
        return;
    }

    const array2 = []; 
    const array3 = []; 
    let reg = /\d/; //Match Numbers
    let array = data.split("\n"); //Turn each line into an array item
    array.forEach((array,array2) => { //Get first and last num in an item
        num1 = array[array.search(reg)]; //Find first number
        array2 = array.split("").reverse().join(""); //Reverse item
        num2 = array2[array2.search(reg)]; //Find first number in reversed item
        num3 = num1 + num2 //Combine first and last number
        var x = parseInt(num3, 10) //Turn string into int
        array3.push(x); //Push int to array
    });

    // create a variable for the sum and initialize it
    let sum = 0;

    // iterate over each item in the array
    for (let i = 0; i < array3.length; i++ ) {
    sum += array3[i];
    }

    console.log(sum)
})