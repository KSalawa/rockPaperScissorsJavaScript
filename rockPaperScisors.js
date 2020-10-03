//Rock Paper Scissors, codecademy exercise
//Kamil Salawa oct 2020 

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput=== 'scissors') {
        return userInput;
    } else {
        console.log('Error - please use valid input');
    }
}
/*check if the code works
console.log(getUserChoice('scissors'));
*/

function getComputerChoice(){
        switch(Math.floor(Math.random() * 3)){
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors'
            break;
        }
}
//test getComputerChoice
//console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice)  {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper'){
            return 'Computer won!'
        } else {
            return 'You won!'
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors'){
            return 'Computer won!'
        } else {
            return 'You won!'
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock'){
            return 'Computer won!'
        } else {
            return 'You won!'
        }
    }
}

//test determineWinner()
//console.log(determineWinner('scissors', 'paper'));

function playGame() {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice()
    console.log(`you threw ${userChoice}`);
    console.log(`computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
  };

playGame();