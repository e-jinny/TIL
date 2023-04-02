const clock = document.getElementById('clock');

const update = () => {
  let date = new Date();

  const formatZeros = (time) => {
    time = time.toString();
    return time.length < 2 ? '0' + time : time;
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12;

    hours = formatZeros(hours);
    minutes = formatZeros(minutes);
    seconds = formatZeros(seconds);

    return `${hours}:${minutes}:${seconds}${amOrPm}`;
  };

  clock.textContent = formatTime(date);
};

update();
setInterval(update, 1000);
