let temp = 32;
document.getElementById('submitButton').onclick = function () {
  let temp;

  if (document.getElementById('cButton').checked) {
    temp = document.getElementById('textBox').value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById('temperature').textContent = temp + '°C';
  } else if (document.getElementById('fButton').checked) {
    temp = document.getElementById('textBox').value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById('temperature').textContent = temp + '°F';
  } else {
    document.getElementById('temperature').textContent = 'Select a unit';
  }
};

temp = toFahrenheit(temp);
console.log(temp);

function toCelsius(temp) {
  return (temp - 32) * (5 * 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
