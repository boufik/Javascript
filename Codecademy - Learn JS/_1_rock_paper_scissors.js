// 1. Random Choice
function getComputerChoice(){
    random = Math.floor(3 * Math.random());
    switch(random){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            console.log('IMPOSSIBLE RANDOM NUMBER');
            return -1000;
    }
}

// 2. User Choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    flag = (userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors');
    value = flag ? userInput : 'Error while choosing!';
    return value
}

// 3. Determine winner
function determineWinner(userChoice, computerChoice){
    if(userChoice === "bomb"){
        return "User wins!"
    }
    if(userChoice === computerChoice){
        return "Tie!"
    }
    winner = "";
    if(userChoice === 'rock'){
        winner = (computerChoice === 'paper') ? 'Computer wins!' : 'User wins!';
    }
    else if(userChoice === 'paper'){
        winner = (computerChoice === 'rock') ? 'User wins!' : 'Computer wins!';
    }
    else{
        winner = (computerChoice === 'rock') ? 'Computer wins!' : 'User wins!';
    }
    return winner;
}

// MAIN FUNCTION
user_list = ['rock', 'paper', 'scissors', 'bomb'];
computer_list = ['rock', 'paper', 'scissors'];
for (let i=0; i<user_list.length; i++){
    userChoice = user_list[i];
    for(let j=0; j<computer_list.length; j++){
        computerChoice = computer_list[j];
        winner = determineWinner(userChoice, computerChoice);
        console.log(`User = ${userChoice}, computer = ${computerChoice} ----> ${winner}`);
    }
    console.log();
}


