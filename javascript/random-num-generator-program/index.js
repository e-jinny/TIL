let x;
let y;
let z;

document.getElementById('roll').onclick = function () {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.getElementById('x').textContent = '🎲 ' + x;
  document.getElementById('y').textContent = '🎲 ' + y;
  document.getElementById('z').textContent = '🎲 ' + z;
};
