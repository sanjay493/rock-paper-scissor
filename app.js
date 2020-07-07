//console.log("Test your javascript file link with html");

let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissor");
const smallUserWord="user".fontsize(3).sub().fontcolor('red');
const smallComputerWord="Computer".fontsize(3).sub().fontcolor('green');


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function win(userChoice,computerChoice){
    //console.log("won");
    userScore++;
    userScore_span.innerHTML=userScore;
    //console.log(computerScore);
    computerScore_span.innerHTML=computerScore;
    const userChoice_div=document.getElementById(userChoice);
    // const smallUserWord="user".fontsize(3).sub().fontcolor('red');
    // const smallComputerWord="Computer".fontsize(3).sub().fontcolor('green');
    // Pure JavaScript Coding to get output
    // result_p.innerHTML= userChoice + " beats " + computerChoice + ". You Won ";
    // ES6 template literals Approach of displaying the same output.
    result_p.innerHTML= `${capitalizeFirstLetter(userChoice)}${smallUserWord} beats  ${capitalizeFirstLetter(computerChoice)}${smallComputerWord} . You Won `;
    userChoice_div.classList.add('green-glow');
  //setTimeout(function(){userChoice_div.classList.remove('green-glow')},300);
  //es5
  setTimeout(()=>userChoice_div.classList.remove('green-glow'),300);

}
function lose(userChoice,computerChoice){
    //console.log("won");
    computerScore++;
    userScore_span.innerHTML=userScore;
    const userChoice_div=document.getElementById(userChoice);
    //console.log(computerScore);
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML= `${capitalizeFirstLetter(userChoice)}${smallUserWord} loose to  ${capitalizeFirstLetter(computerChoice)}${smallComputerWord} . You Lost `;
    userChoice_div.classList.add('red-glow');
    setTimeout(()=>userChoice_div.classList.remove('red-glow'),300);

    
}
function draw(userChoice,computerChoice){
    //console.log("Draw");
    const userChoice_div=document.getElementById(userChoice);
    result_p.innerHTML= `${capitalizeFirstLetter(userChoice)}${smallUserWord} equals to  ${capitalizeFirstLetter(computerChoice)}${smallComputerWord} . Game Draw `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(()=>userChoice_div.classList.remove('gray-glow'),300);

}


//setTimeout function have two arguments, one is a function and other is set tume out. Here After refreshing the page console log Hello after 3 sec.
//setTimeout(function(){console.log("Hello")},3000);

function game(userChoice){
    // console.log(" User choice "+ userChoice);
    const computerChoice=getComputerChoice();
    // console.log("Computer Choice  " + computerChoice);
    // console.log("User Choice  " + userChoice);

    switch (userChoice+computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            // console.log("User Won.");
            win(userChoice,computerChoice);
            break;
        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            // console.log("User Lost.");
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            // console.log("Game Draw.");
            draw(userChoice,computerChoice);
            break;

    }

}


function main(){
    rock_div.addEventListener('click',()=>game("rock"));
    paper_div.addEventListener('click', ()=>game("paper"));
    scissor_div.addEventListener('click', ()=>game("scissor"));
}

main();