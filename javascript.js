let number = Math.random() * 100;
let randomNumber = Math.ceil(number);
let input = document.getElementById('userInput');
let resultTxt = document.getElementById('gameResult')
function checkGuess(){
    let userValue = parseInt(input.value);
    if(userValue > randomNumber){
        resultTxt.textContent = "Too high! Try Again !!"
        resultTxt.style.backgroundColor = "#1e217c"
    }
    else if(userValue < randomNumber){
        resultTxt.textContent = "Too Low! Try Again!!"
        resultTxt.style.backgroundColor = "#1e217c"
    }
    else if(userValue === randomNumber){
        resultTxt.textContent = "Congratulations! You have guessed right!"
        resultTxt.style.backgroundColor = "green"
    }
    else{
        resultTxt.textContent = "Please provide a valid input";
        resultTxt.style.backgroundColor = "red"

    }
}
