const prompt = require("prompt-sync")();


const ask = () =>{
    while (true){
        var number = prompt("Enter a number here: ")
        if (isNaN(number)){
            console.log("Please enter a valid number.")
        }else if(question%2 === 0){
            console.log("Even Number.")
        }else{
            console.log("Odd Number.")
        }
    } 
}


ask()
