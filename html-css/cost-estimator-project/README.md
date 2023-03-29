## Source

## Step By Step Learning

### Building Our Container

```html
<body>
  <h1>Estimate your cost</h1>
  <div class="container">hello</div>
</body>
```

```css
body {
  background-color: rgb(233, 223, 255);
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  color: rgb(44, 44, 44);
}

h1 {
  color: rgb(83, 49, 156);
}

.container {
  background-color: white;
  width: 100%;
  max-width: 900px;
}
```

- Make a container and use `flexbox` to center everything in the middle of the body.

### Creating The Top Tabs

```html
<body>
  <h1>Estimate your cost</h1>
  <div class="container">
    <div class="tabs">
      <p>Free</p>
      <p class="active">Team</p>
      <p>Professional</p>
      <p>Enterprise</p>
    </div>
  </div>
</body>
```

```css
.container {
  background-color: white;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

.tabs {
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-transform: uppercase;
  font-weight: 700;
  color: rgb(200, 175, 255);
}

.tabs p {
  padding: 16px;
}

.tabs p:hover {
  color: rgb(83, 49, 156);
  cursor: pointer;
}

.tabs p.active {
  color: rgb(83, 49, 156);
}
```

- Use `flexbox` to lay out the entire container in a `column` direction and center everything in the middle of the container.
- Getting the text (the tabs) spread out across the top of the container, is a perfect use case for `flexbox`.

### Positioning The Tabs Underline

```html
<div class="container">
  <div class="tabs">
    <p>Free</p>
    <p class="active">Team</p>
    <p>Professional</p>
    <p>Enterprise</p>
  </div>
  <div class="line"></div>
</div>
```

```css
.container {
  background-color: white;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 0 64px 64px 64px;
  position: relative;
}

.tabs {
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-transform: uppercase;
  font-weight: 700;
  color: rgb(200, 175, 255);
  padding: 16px;
}

.tabs p {
  padding: 8px;
}

.tabs p:hover {
  color: rgb(83, 49, 156);
  cursor: pointer;
}

.tabs p.active {
  color: rgb(83, 49, 156);
}

.line {
  height: 3px;
  width: 100%;
  background-color: rgb(231, 231, 231);
  position: absolute;
  top: 98px;
}
```

- One easy way of getting an underline is to set a border bottom. However, inside of the container, if we add space on the left and the right side of the container by using `padding` (for the purpose of the responsiveness) , that border doesn’t go all the way across anymore.
- So instead of actually using the border bottom, we can make a div as a line that’s three pixels tall and position it in the right spot.
- Make the container `relative`, so the line is positioned based on the container’s top, not the html root element.

### Creating The Active Tab Styles

```html
<div class="tabs">
  <p>Free</p>
  <p class="active">Team</p>
  <p>Professional</p>
  <p>Enterprise</p>
</div>
```

```css
.tabs .active {
  color: rgb(83, 49, 156);
  position: relative;
}

.tabs .active::before {
  content: '';
  width: 200%;
  height: 4px;
  background-color: rgb(83, 49, 156);
  position: absolute;
  bottom: -32px;
  z-index: 2;
  left: -50%;
  border-radius: 10px;
}
```

- When creating active tab, instead of using border bottom or creating a separate box, use `::before` pseudo element (`::before`: whatever has the active class, put something right before it) ⇒ I’m going to cover `::before` , `::after` pseudo elements later.
- When making the line centered, instead of having to calculate the exact right or left, do `left: -50%;`.

### Adding The Toggle Section

```html
<div class="toggle-wrapper">
  <img src="images/icon1.png" alt="" />
  <div class="toggle">
    <span>Mobile</span>
    <span>Web</span>
  </div>
  <img src="images/icon2.png" alt="" />
</div>
```

```css
.toggle-wrapper {
  display: flex;
}

.toggle-wrapper img {
  height: 40px;
  margin: 0 16px;
}

.toggle {
  background-color: rgb(83, 49, 156);
  height: 32px;
  width: 140px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 4px 0 16px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
}

.toggle span:first-of-type {
  color: white;
}

.toggle span:last-of-type {
  background-color: white;
  color: rgb(83, 49, 156);
  padding: 4px 16px;
  border-radius: 20px;
}
```

- This is basically a fake toggle slider. It’s just to practice and figure out how to do some styling like border-radius, etc. I’m going to cover the real one that moves left and right later.
- This slider is basically a checkbox, so behind the scenes we could attach a hidden checkbox and make it function as a checkbox.

### Building The Sessions Card

```html
<div class="sessions-card">
  <p>Monthly Sessions</p>
  <p class="number">20,000</p>
</div>
<p class="description">
  A session is a continuous period of user activity on your web app or website.
  Choose exactly how many sessions you wish to record and discard the extras.
</p>
```

```css
.sessions-card {
  background-color: rgb(250, 247, 255);
  text-align: center;
  padding: 32px;
  width: 50%;
  text-transform: uppercase;
  margin: 16px 0;
  border-radius: 10px;
}

.sessions-card p {
  color: rgb(44, 44, 44);
  font-size: 12px;
  font-weight: bold;
  margin: 16px 0 0 0;
}
.sessions-card .number {
  color: rgb(83, 49, 156);
  font-size: 54px;
  margin: 0;
}
```

- `<p>` has bottom and top margin by default. If we only want margin on top, we could do `margin-bottom: 0;` or explicitly set `margin: 16px 0 0 0;`. The second one is a little longer but it’s clear about exactly what has and does not have margin. So I prefer the second one.

### Creating The Slider

```html
<div class="slider">
  <div class="bar">
    <div class="progress"></div>
    <div class="point"></div>
  </div>
  <div class="scale">
    <ul>
      <li>0</li>
      <li>1K</li>
      <li>10K</li>
      <li>25K</li>
      <li>50K</li>
      <li>250K</li>
      <li>1M</li>
      <li>10M</li>
      <li>250M</li>
    </ul>
  </div>
</div>
```

```css
.slider {
  width: 100%;
  position: relative;
}

.slider .bar {
  width: 100%;
  height: 16px;
  background-color: rgb(248, 248, 248);
  border: 1px solid rgb(210, 210, 210);
  border-radius: 20px;
}

.slider .progress {
  width: 31%;
  height: 18px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(53, 10, 74, 1) 36%,
    rgba(83, 49, 156, 1) 100%
  );
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
}

.slider .point {
  height: 24px;
  width: 24px;
  background-color: rgb(83, 49, 156);
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: calc(31% - 12px);
  border: 2px solid white;
  transition: 0.15s transform ease;
}

.slider .point:hover {
  cursor: pointer;
  transform: scale(1.15);
}

.scale {
  width: 100%;
}

.slider .scale ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  font-weight: 700;
  color: rgb(166, 166, 166);
}
```

- Just like the toggle, it’s purely visual.
- To make the left side of the progress bar round shape, use `border-top-left-radius` and `border-bottom-left-radius`. There’s NO `border-left-radius`.
- To align the bar to the slider perfectly, make it `absolute` based on the slider.

### Creating The Two Price Cards

```html
<div class="card-wrapper">
  <div class="card">
    <div class="top-section">
      <p>Monthly Billing</p>
      <p class="price">$199</p>
      <p>Monthly</p>
    </div>
    <hr />
    <p>Starting from 1-month data retention</p>
    <p>10 team members</p>
    <button>Try Free For 14 Days</button>
  </div>
  <div class="card">
    <div class="top-section">
      <p>ANNUAL BILLING</p>
      <p class="price">$2,148</p>
      <p>$179 Monthly</p>
    </div>
    <hr />
    <p>Starting from 1-month data retention</p>
    <p>10 team members</p>
    <button>Try Free For 14 Days</button>
  </div>
</div>
```

```css
.card-wrapper {
  display: flex;
}

.card {
  background-color: rgb(250, 247, 255);
  border-radius: 10px;
  margin: 16px;
  box-shadow: 0px 3px 11px 1px rgba(0, 0, 0, 0.1);
  padding: 16px 32px;
  text-align: center;
  font-weight: 700;
  color: rgb(83, 49, 156);
  text-transform: uppercase;
}

.card .top-section {
  padding: 8px;
}

.card .top-section p {
  margin: 4px 0;
}

.card .price {
  font-size: 42px;
  color: rgb(44, 44, 44);
}

.card hr {
  width: 30%;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 2px;
}
```

- Use a horizontal rule to make a line. (or a border bottom.)

### Finishing Up The Price Cards

```css
.container {
  background-color: white;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 0 64px 64px 64px;
  position: relative;
  box-sizing: border-box;
}
```

- Set `box-sizing: border-box;` so that `max-width`(`900px`) can include the `padding`(`64px 64px 64px`). Without the `border-box`, all the those pixels of padding would be added on to the `900px`.

```html
<div class="save-header">
  <p>Save up to 16%</p>
</div>
```

```css
.card button:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.card .save-header {
  color: white;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(53, 10, 74, 1) 36%,
    rgba(83, 49, 156, 1) 100%
  );
  width: 100%;
  position: absolute;
  top: -24px;
  left: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
```

- Set the same gradient as the slider
