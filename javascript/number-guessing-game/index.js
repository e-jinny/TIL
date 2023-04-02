const answer = Math.floor(Math.random() * 10 + 1);

let guesses = 0;

document.getElementById('submitButton').onclick = function () {
  let guess = document.getElementById('guessField').value;
  guesses += 1;

  if (guess > 10 || guess < 0) {
    alert('The number must be between 1 and 10!');
  } else if (guess > answer) {
    alert('Too large!');
  } else if (guess < answer) {
    alert('Too small!');
  } else {
    alert(`${answer} is the #. It took you ${guesses} guesses.`);
  }
};
