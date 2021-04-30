'use strict';
const args = process.argv.slice(2)
const numbersInWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
for (let i = 0; i < args.length; i ++){
    let currentNumber = args[i]
    let output = ""
    let negative = "" //assuming negative numbers are a valid input

    if (currentNumber < 0){
        currentNumber = currentNumber * -1
        negative = "Negative"
    }

    //loops through each number adding the number in the ones column, then dividing by 10 and removing the decimal
    do{ 
        output = numbersInWords[currentNumber % 10] + output//i.e. 256 -> 6
        currentNumber = Math.floor(currentNumber / 10);//i.e. 256 -> 25.6 -> 25
    } while (currentNumber > 0)

    if (i < args.length - 1){
        output += ","
    }
    process.stdout.write(negative + output)
}