let a;
let b;
let c;
// 1. window prompt
a = window.prompt('Enter side A');
a = Number(a);

b = window.prompt('Enter side B');
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

document.getElementById('prompt').textContent = `Side C: ${c}`;

console.log('Side C: ', c);

// 2. window textbox
document.getElementById('submitButton').onclick = function () {
  a = document.getElementById('aTextBox').value;
  a = Number(a);

  b = document.getElementById('bTextBox').value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById('cLabel').textContent = `Side C: ${c}`;
};
