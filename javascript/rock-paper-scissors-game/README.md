# Rock-Paper-Scissors Game

## Learning Objectives

- Get comfortable with the basics of writing JavaScript programs
- Write conditional statements to make a decision based on a certain condition
  - `if...else if` statement
  - `switch`
  - ternary operator
- Utilize methods of `Math` object
  - `Math.random()`
  - `Math.floor()`

## About This Program

This is a simple JavaScript program that implements the classic game of Rock-Paper-Scissors.

- The game allows the user to play against the computer.
- The user chooses their move by clicking a button on the web page.
- The computer's move is generated randomly.
- The winner is determined by the standard Rock-Paper-Scissors rules: Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.

```jsx
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
let player;
let computer;
let result;
```

- Select the elements all I need
- Create three variables
  - `player` - to store the player’s choice
  - `computer` - to store the computer’s random choice
  - `result` - to display who won
- This program keeps track of the score using JavaScript variables and updates the web page with the current score using the DOM

```jsx
choiceBtns.forEach((button) =>
  button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);
```

- Iterate over the choice buttons using the forEach() method and add a click event listener to each of the buttons
- the `player` variable will be assigned a string as well as the computer

```
function computerTurn() {

  const randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 1:
      computer = 'ROCK';
      break;
    case 2:
      computer = 'PAPER';
      break;
    case 3:
      computer = 'SCISSORS';
      break;
  }
}
```

- Uses a random number generator to generate the computer's move.
- `Math.random() * 3` - There's only three choices so multiply by 3
- Examine this random number with a `switch`

```jsx
function checkWinner() {
  if (player === computer) {
    return 'Draw!';
  } else if (computer === 'ROCK') {
    return player === 'PAPER' ? 'You Win!' : 'You Lose!';
  } else if (computer === 'PAPER') {
    return player === 'SCISSORS' ? 'You Win!' : 'You Lose!';
  } else if (computer === 'SCISSORS') {
    return player === 'ROCK' ? 'You Win!' : 'You Lose!';
  }
}
```

- Calculates the winner using a `if...else if` statement and ternary operator that checks the player and computer moves
