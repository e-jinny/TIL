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

let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let running = false;

const initializeGame = () => {
  cells.forEach((cell) => cell.addEventListener('click', cellClicked));
  restartBtn.addEventListener('click', restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
};
const cellClicked = (e) => {
  const cellIndex = e.target.getAttribute('cellIndex');
  if (options[cellIndex] !== '' || !running) {
    return;
  }
  updateCell(e, cellIndex);
  checkWinner();
};
const updateCell = (e, index) => {
  options[index] = currentPlayer;
  e.target.textContent = currentPlayer;
};
const changePlayer = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `${currentPlayer}'s turn`;
};
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
const restartGame = () => {
  currentPlayer = 'X';
  options = ['', '', '', '', '', '', '', '', ''];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach((cell) => (cell.textContent = ''));
  running = true;
};

initializeGame();
