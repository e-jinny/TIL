# Tic-Tac-Toe Game

## Learning Objectives

- Get comfortable with the basics of writing JavaScript programs
- Practice arrow function
- Write conditional statements to make a decision based on a certain condition
  - `if...else if` statement
  - ternary operator
- Use `for` loop
- Utilize a 2D array

## About This Program

This is a JavaScript program that implements the classic game of Tic Tac Toe.

The game is implemented using JavaScript and HTML buttons.
The program uses a 2D array to represent the game board and checks for a winner after each move using a series of if statements .

- The game allows two players to play against each other.
- The players take turns placing their markers (X or O) on a 3x3 grid.
- The game checks for a winner after each move.
- The game ends when there is a winner or the board is full and there is no winner.

```jsx
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const restartBtn = document.querySelector('#restartBtn');

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
```

- Select the elements all I need
- `winConditions` is a two-dimensional array of indices
  - If there are three cells that are aligned on the same row, column or diagonal and they all contain the same character, then I would need to check

```jsx
let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let running = false;
```

- `option` is an array of placeholders which are originally empty strings
  - the placeholders are nine of them, one for each cell
- Create `currentPlayer` variable to keep track of current player
- Create a boolean variable(`running`) to keep track if the game is still running
  - When initializing the game, switch this to `true`

```
const initializeGame = () => {

  cells.forEach((cell) => cell.addEventListener('click', cellClicked));
  restartBtn.addEventListener('click', restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
};
```

- `initializeGame` function is to take care of any setup before starting the game
- Add event listeners to the cells using `forEach()` method

```jsx
const cellClicked = (e) => {
  const cellIndex = e.target.getAttribute('cellIndex');

  if (options[cellIndex] !== '' || !running) {
    return;
  }
  updateCell(e, cellIndex);
  checkWinner();
};
```

- Check if that index number within the options array isn't an empty string
  - only update a cell if there's nothing there

```jsx
const updateCell = (e, index) => {
  options[index] = currentPlayer;
  e.target.textContent = currentPlayer;
};
```

- Update the placeholders and the textContent
- I can’t use `this` keyword in arrow function unlike in function declaration

```jsx
const changePlayer = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `${currentPlayer}'s turn`;
};
```

- if `currnetPlayer` equals to `'X'`, reassign this with `'O'`, otherwise `'X'`

```jsx
const checkWinner = () => {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA === '' || cellB === '' || cellC === '') {
      continue;
    }
    if (cellA === cellB && cellB === cellC) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins!`;
    running = false;
  } else if (!options.includes('')) {
    statusText.textContent = 'Draw!';
  } else {
    changePlayer();
  }
};
```

- If somebody wins, flip `roundWon` to be true
- Iterate over all of the win conditions within the `winConditions` 2d array and store each of the arrays within a temporary variable(`condition`)
- `if (cellA === '' || cellB === '' || cellC === '')` → If there's an empty space, continue and skip this iteration

```jsx
const restartGame = () => {
  currentPlayer = 'X';
  options = ['', '', '', '', '', '', '', '', ''];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach((cell) => (cell.textContent = ''));
  running = true;
};
```
