# Stopwatch Program

## Learning Objectives

- Get comfortable with the basics of writing JavaScript programs
- Practice arrow function
- Write if statement to make a decision based on a certain condition
- Use `setInterval()` a with callback function and clear it

## About This Program

This is a simple JavaScript program that implements a stopwatch, allowing the user to start, stop, and reset the timer.

- The stopwatch displays the elapsed time in minutes, seconds, and milliseconds.
- The user can start, stop, and reset the timer using buttons on the web page.
- The stopwatch can be paused and resumed by clicking the "Start/Stop" button.
- The stopwatch can be reset to zero by clicking the "Reset" button.

```jsx
startBtn.addEventListener('click', () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});
```

- If `paused`, set it to `false` and calculate the `startTime`.
- `Date.now()` method will give us the current date and time in milliseconds
- `elapseTime` will initially be zero to begin with.
- `setInterval` method will invoke `updateTime` function every second

```jsx
function updateTime() {
  elapsedTime = Date.now() - startTime;
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
  console.log(hrs, secs, mins);

  function pad(unit) {
    let withZero = '0' + unit;
    return withZero.length > 2 ? unit : withZero;
  }
}
```

- Calculate how much time has passed(`elapseTime`). This will be a time in milliseconds, so it’s needed to format it so that we can display it within the timer like below.
  ```jsx
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
  ```
- Use template literal to display hours, minutes and seconds.
  - One issue → when it’s running it only displays one zero.
- The `pad` inner function adds a zero as padding for any single digit numbers.
  If the length of unit, after adding a zero in front of it, is greater than 2, return `unit` otherwise, return `'0' + unit`
      ```
      function pad(unit) {
        let withZero = '0' + unit;
        return withZero.length > 2 ? unit : withZero;
      }
      ```

```jsx
pauseBtn.addEventListener('click', () => {
  if (!paused) {
    {
      paused = true;
      elapsedTime = Date.now() - startTime;
      clearInterval(intervalId);
    }
  }
});
```

- If `!paused`, set it to `true` and calculate the elapsedTime, this will save how much time has passed in milliseconds. Then clear the `setInterval` method.

```jsx
resetBtn.addEventListener('click', () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = `00:00:00`;
});
```

- When clicking the reset button, set `paused` to `true`, clear the timer.
- Take `startTime`, `elapsedTime`, `currentTime`, `hrs`, `mins`, `secs`, then set them all to zero.
- Update the display with `“00:00:00”.`
