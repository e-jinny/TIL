# Snake Game

## Learning Objectives

- Practice and reinforce the JavaScript syntax that I have learned so far

## About This Program

This is a simple implementation of the classic Snake game in JavaScript using the HTML5 canvas element.

The objective of the game is to guide the snake to eat the food while avoiding collision with the walls or its own body. The snake moves continuously in a direction, and the player can change its direction using the arrow keys. Each time the snake eats a piece of food, its length increases, and the player earns points. The game is over when the snake collides with the wall or its own body.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap"
      rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <title>Snake Game</title>
  </head>
  <body>
    <div id="gameContainer">
      <canvas id="gameBoard" width="500" height="500"></canvas>
      <div id="scoreText">0</div>
      <button id="resetBtn">RESET</button>
    </div>

    <script src="index.js"></script>
  </body>
</html>
```

- I assigned the `width` and `height` attributes within the `<canvas>` element itself because when I initially run the JavaScript file, if I had declared these attributes within the CSS file, they wouldn't have been available immediately.

These are the variables I need :

```jsx
const gameBoard = document.querySelector('#gameBoard');
const ctx = gameBoard.getContext('2d');
const scoreText = document.querySelector('#scoreText');
const resetBtn = document.querySelector('#resetBtn');
```

```jsx
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
```

- `gameWidth` holds the width of the game board
- `gameHeight` holds the height of the game board

```jsx
const boardBackground = 'white';
const snakeColor = 'lightgreen';
const snakeBorder = 'black';
const foodColor = 'red';
```

```jsx
const unitSize = 25;
```

- `unitSize` refers to the size of various elements such as the snake's body parts, the snake food, and the distance that the snake moves with every tick of the game

```jsx
let running = false;
```

- `running` is used to see if the game is currently running or not

```jsx
let xVelocity = unitSize;
let yVelocity = 0;
```

- `xVelocity` is the distance that the snake moves on the x-axis with every tick of the game
- By setting `xVelocity` to be the `unitSize`, the snake moves 25 pixels on the x-axis with every tick of the game
  - If `xVelocity` is a positive number, the snake will move to the right
  - If `xVelocity`is a negative number, the snake will move to the left
- By setting `yVelocity` to be the `0`, the snake does not move up or down initially
  - to move it down, set this to the `unitSize`
  - to move it up, set this to the negative `unitSize`

```jsx
let foodX;
let foodY;
```

- These variables are the food coordinates
- This is going to be calculated randomly within a function

```jsx
let score = 0;
```

- The player’s score is initially zero

```jsx
let snake = [
  { x: unitSize * 4, y: 0 },
  { x: unitSize * 3, y: 0 },
  { x: unitSize * 2, y: 0 },
  { x: unitSize, y: 0 },
  { x: 0, y: 0 },
];
```

- `snake` is an array of objects that are for each body part
- Each body part has an x and a y coordinate
- The tale begins at the top left corner → `{x: 0, y: 0}`
- The snake has 5 body parts initially.
- Each time the snake eats food, the length of the snake increases by one body part
- The subsequent body part of the snake is positioned to the right side of the first body part(”tail”) → `{x: unitsize, y: 0}`
- and the next one will be `{x: unitSize * 2, y: 0}` …and so on

These are the functions I need :

- `gameStart` : begins the game
- `nextTick` : is what I want to do every game tick
- `clearBoard` : is in charge of repainting the board
- `createFood` : finds a random place within the game board to place a food item
- `drawFood` : paints the food within the game board
- `drawSnake` : paints the snake within the game board
- `moveSnake` : re-paints the snake as if it’s moving
- `changeDirection` : changes the direction with keydown event
- `checkGameOver` : makes the game stop running in a certain condition
- `displayGameOver` : displays “GAME OVER” when the game stops running
- `resetGame` : resets the game

```jsx
const gameStart = () => {
  running = true;
  scoreText.textContent = score;
  createFood();
  drawFood();
  nextTick();
};
```

```jsx
// this is what I want to do every round.
// every time I update the clock,
// every time I refresh this, apple should appear randomly within the game board
const nextTick = () => {
  if (running) {
    // in the setTimeout callback, list an order of steps
    // the second argument of setTimeout() method is how often do I want a game tick to occur
    // increase the number for a slower speed, or decrease the number for a faster speed
    setTimeout(() => {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    }, 75);
  } else {
    displayGameOver();
  }
};
```

- In the callback of the `setTimeout()` method which is the first argument, the functions are invoked every 75 millisecond
- The second argument of the `setTimeout()` method is how often do I want a game tick to occur
  - increase the number for a slower speed
  - decrease the number for a faster speed

```jsx
const clearBoard = () => {
  ctx.fillStyle = boardBackground; // This is a color that I picked
  ctx.fillRect(0, 0, gameWidth, gameHeight);
};
```

```jsx
const createFood = () => {
  const randomFood = (min, max) => {
    // get a random number that is divisible by 25 and between min and max of the width
    const randomNum =
      Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randomNum;
  };
  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameWidth - unitSize);
};
```

- The `randomFood` function gets a random number that is divisible by 25 and between min and max of the width. Here’s the process of the calculation :
  - `Math.round((Math.random() * (*max* - *min*) + *min*))` : This code generates a random integer between `min` and `max` values, both inclusive.
  - `Math.round((Math.random() * (*max* - *min*) + *min*) / unitSize)` : This code divides the width and height of the game into `unitSize` spaces and generates a random integer between `0` and `24`, where `500` is the width and height of the game, and `25` is the `unitSize`.
  - `Math.round((Math.random() * (*max* - *min*) + *min*) / unitSize) * unitSize` : This code multiplies the previously generated random integer with `unitSize` to accurately place the food in the top left corner of one of the spaces.

```jsx
const drawFood = () => {
  ctx.fillStyle = foodColor;
  ctx.fillRect(foodX, foodY, unitSize, unitSize);
};
```

```jsx
const drawSnake = () => {
  ctx.fillStyle = snakeColor;
  ctx.strokeStyle = snakeBorder;
  snake.forEach((snakePart) => {
    ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
    ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
  });
};
```

```jsx
const moveSnake = () => {
  const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
  snake.unshift(head);

  if (snake[0].x === foodX && snake[0].y === foodY) {
    score += 1;
    scoreText.textContent = score;
    createFood();
  } else {
    snake.pop(); // this will elminate the tail every time that we move
  }
};
```

- To move the snake, create a new head of the snake in the direction that it’s heading
- Then eliminate the tail segment
- `head`'s `x` and `y` are the snake’s current head coordinate
- To add new head to the snake, use the `unshift()` method
- To eliminate the tail, use `pop()` method
- Use `if...else` statement
  - if food is eaten (⇒ the head of the snake and the food are overlapping),
    - increase the player’s score by one
    - create new food
  - otherwise eliminate the tail

```jsx
const changeDirection = (event) => {
  // store this key down event within a const variable
  const keyPressed = event.key;
  const LEFT = 'ArrowLeft';
  const UP = 'ArrowUp';
  const RIGHT = 'ArrowRight';
  const DOWN = 'ArrowDown';

  // this is how to determine which way our snake is headed
  const goingUp = yVelocity === -unitSize;
  const goingDown = yVelocity === unitSize;
  const goingRight = xVelocity === unitSize;
  const goingLeft = xVelocity === -unitSize;

  switch (true) {
    case keyPressed === LEFT && !goingRight:
      xVelocity = -unitSize;
      yVelocity = 0;
      break;
    case keyPressed === UP && !goingDown:
      xVelocity = 0;
      yVelocity = -unitSize;
      break;
    case keyPressed === RIGHT && !goingLeft:
      xVelocity = unitSize;
      yVelocity = 0;
      break;
    case keyPressed === DOWN && !goingUp:
      xVelocity = 0;
      yVelocity = unitSize;
      break;
  }
};
```

- The `changeDirection` function has one parameter, `event`
- This function will be invoked this every time I press a key since the window is looking for the key down event (`window.addEventListener('keydown', changeDirection);`)
- `switch...` : According to the rules of snake game, if any body part is touched, the game is over.
  So avoid going back into any body parts accidentally, like moving to the left then immediately to the right.
  (if the snake’s going left it can continue to go left otherwise up or down but not right)

```jsx
const checkGameOver = () => {
  switch (true) {
    case snake[0].x < 0:
      running = false;
      break;
    case snake[0].x >= gameWidth:
      running = false;
      break;
    case snake[0].y < 0:
      running = false;
      break;
    case snake[0].y >= gameHeight:
      running = false;
      break;
  }

  for (let i = 1; i < snake.length; i += 1) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      running = false;
    }
  }
};
```

- These are when the game is over :
  - when the snake goes off the game board
  - when the snake’s head is into its body
- Use `switch...case` to check if the snake passes one of the borders
- Use a `for` loop to iterate over the body parts
  (The reason why I am using a `for` loop instead of the `forEach()` method is that I need to iterate over the array from index 1, skipping the first element (the head), and only check the body parts.)

```jsx
const displayGameOver = () => {
  ctx.font = '50px Caveat Brush';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText('GAME OVER!', gameWidth / 2, gameHeight / 2);
  running = false;
};

const resetGame = () => {
  score = 0;
  xVelocity = unitSize;
  yVelocity = 0;
  snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
  ];
  gameStart();
};
```

```jsx
// Add an event listener to the window to listen for key events
window.addEventListener('keydown', changeDirection);
// Add an event listener to the reset button to restart the game
resetBtn.addEventListener('click', resetGame);

gameStart();
```
