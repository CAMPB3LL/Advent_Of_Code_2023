//fs = js file system module
const fs = require('fs'); 
const input = 'input2.txt';
fs.readFile(input, 'utf8', (err, data) => { //fs.readFile(path[, options], callback)
    if(err){
        console.error(err);
        return;
    }
    array = data.split("\n")
    let x = 0
    var arrayGames = []

    array.forEach((array) => { 
        
        array1 = array.split(":")

        regRed = "(1[3-9]|[2-9][0-9]) (red)"
        regGreen = "(1[4-9]|[2-9][0-9]) (green)"
        regBlue = "(1[5-9]|[2-9][0-9]) (blue)"

        var regR = new RegExp(regRed);
        var regG = new RegExp(regGreen);
        var regB = new RegExp(regBlue);
        const matchesR = array1[1].match(regR)
        const matchesG = array1[1].match(regG)
        const matchesB = array1[1].match(regB)
        
        if(matchesR != null){
            //Do nothing
        }else if(matchesG != null){
            //Do nothing
        }else if(matchesB != null){
            //Do nothing
        }else{
            gameNum = parseInt(array1[0].replace("Game ", ""))
            gameTotal = x + parseFloat(gameNum)
            arrayGames.push(gameTotal)
        }
    })

    // create a variable for the sum and initialize it
    let sum = 0;

    // iterate over each item in the array
    for (let i = 0; i < arrayGames.length; i++ ) {
    sum += arrayGames[i];
    }

    console.log(sum)
})