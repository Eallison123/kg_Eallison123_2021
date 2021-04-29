var args = process.argv.slice(2)
var numbersInWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
for (var i = 0; i < args.length; i ++){
    var currentNumber = args[i]
    var output = ""
    var negative = "" //assuming negative numbers are a valid input
    if (currentNumber == 0){
        output = "Zero"
    }
    if (currentNumber < 0){
        currentNumber = currentNumber * -1
        negative = "Negative"
    }
    //loops through each number adding the number in the ones column, then dividing by 10 and removing the decimal
    while (currentNumber > 0){ 
        output = numbersInWords[currentNumber % 10] + output//i.e. 256 -> 6
        currentNumber = Math.floor(currentNumber / 10);//i.e. 256 -> 25.6 -> 25
    }
    if (i == args.length - 1){
        process.stdout.write(negative + output)
        break
    }
    process.stdout.write(negative + output + ",")
    output = ""
    negative = ""
}

