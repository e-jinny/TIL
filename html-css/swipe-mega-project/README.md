## Source

[The HTML & CSS Bootcamp Course](https://www.udemy.com/share/1085lQ3@_8AUEjhUY4KLN_wkAur49R-qj_wD-ULv51rA9D1lVQ-fvHKs09YmYJVTGXBBzyJ3DA==/)

## Step By Step Learning (abridged)

### Defining Body Styles

```css
:root {
  /* SPACING */
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
}

body {
  font-family: var(--body-font);
  color: var(--text-dark);
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: var(--spacing-sm) 0 0 0;
}
```

- When setting `color: var(--text-dark);`, we don’t see anything different, but the infrastructure is there for us to change
- Resetting things like `margin: 0;` is a very common practice.

### Creating The Text Classes - Subtitle, Secondary Text

```css
:root {
  --subtitle-size: 17px;
  --subtitle-height: 26px;
  --p-size: 18px;
  --p-height: 26px;
  --secondary-text-size: 14px;
  --secondary-text-height: 18px;
}

p {
  font-size: var(--p-size);
  line-height: var(--p-height);
  font-weight: 400;
  margin: var(--spacing-md) 0;
}

.subtitle,
.subtitle2 {
  color: var(--purple-1);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: var(--subtitle-size);
  line-height: var(--subtitle-height);
}

.subtitle2 {
  color: var(--blue-1);
}

.secondary-text {
  font-size: var(--secondary-text-size);
  line-height: var(--secondary-text-height);
  color: var(--text-grey);
  letter-spacing: 0.25px;
}
```

- `color: var(--blue-1);` will override the first one because it comes second - cascade

### Creating The Buttons With Animated Icons

```css
.with-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.with-icon > img {
  transition: all 0.25s ease;
}

.with-icon:hover > img {
  transform: translateX(4px);
}
```

- Create a class that includes an arrow as an optional feature. This is because there may be situations where we want to use similar buttons that do not have an arrow already included in them.

### Building The Navbar

```css
:root {
  --standard-width: 1144px;
}

body {
  font-family: var(--body-font);
  color: var(--text-dark);
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: var(--spacing-sm) 0 0 0;
  background-color: var(--purple-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--standard-width);
  padding: 0 var(--spacing-md);
}

.menu {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}

.menu a {
  color: var(--text-light);
  margin: 0 var(--spacing-md);
}

.menu a:hover {
  text-decoration: underline;
}

.navbar-button {
  background-color: rgba(250, 250, 250, 0.25);
}

.navbar-button:hover {
  background-color: rgba(250, 250, 250, 0.5);
}
```

- Assign `navbar` a maximum width `--standard-width`.
  (I could do this to the body but that’s not going to work for me because I want some full width background for different sections.)
- Make body a flex container, and make the contents centered

### Defining The Two-Column Layout

```css
/* Layout Styles */
.section-container {
  width: 100%;
  max-width: var(--standard-width);
}

.two-column {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
}

.two-column > .col-left {
  width: 50%;
  box-sizing: border-box;
  padding: 0 var(--spacing-md) 0 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.two-column > .col-right {
  width: 50%;
  box-sizing: border-box;
  padding: 0 0 0 var(--spacing-md);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
```

- `.two-column > .col-left` : The reason why I use “`>`" combinator(direct descendant combinator) is because I might have another`.col-left` or `.col-right` inside of like `.col-right`.
  Then things could get a little messy if I was styling them without “`>`" combinator.

### Styling The Page Hero

```css
/* HERO STYLES */
main {
  margin: var(--spacing-xl) 0;
}

.button-container {
  display: flex;
  margin: var(--spacing-md) 0;
}

.button-container button:nth-of-type(2) {
  margin: 0 0 0 var(--spacing-md);
  color: var(--purple-2);
}

.hero p {
  max-width: 480px;
}

.hero .hero-phone-container {
  height: 564px;
  align-items: flex-end;
}

.hero-phone {
  height: 628px;
  transform: translate(32px, -32px);
}
```

- It’s good to include a main element to highlight the main content of a page for accessibility purposes, for SEO purposes. So put the divs in `<main>`.

### Building The Partners Grid Section

```css
/* PARTNERS SECTION */
.partners-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: var(--spacing-xl) 0;
  column-gap: var(--spacing-md);
  row-gap: var(--spacing-lg);
}

.partners-grid img {
  height: 60px;
  place-self: center;
}
```

- Use `place-self: center;` to center the image within the grid track.

### Creating The Global Section

```css
/* GLOBAL SECTION */
.global-section {
  background-color: var(--primary-accent);
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--text-light);
}

.global-section a {
  color: var(--blue-1);
}

.global-section a:hover {
  color: var(--text-light);
}

.global-section .card-container {
  display: flex;
  margin: calc(var(--spacing-xl) * 2) 0;
}

.global-section .card-container .card {
  width: 25%;
  box-sizing: border-box;
  padding: 0 var(--spacing-sm) 0 0;
  margin: 0 var(--spacing-md) 0 0;
}

.global-section .card-container .card h3 {
  border-left: 2px solid var(--blue-1);
  padding: 0 0 0 var(--spacing-sm);
  line-height: 28px;
}
```

- When `main` has a 100% width, the blue background goes all the way across the page.
  But all of the contents are not centered anymore.
  This is where to introduce Flexbox to each of the sections.
      ```
      width: 100%;
      display: flex;
      justify-content: center;
      ```

### Positioning The Globe Image

```
#globe {
  max-width: 844px;
  opacity: 25%;
  position: absolute;
  top: 10%;
}
```

- Set `position: relative;` to `.global-section` so that the `#global` can be positioned based on the `.global-section`.

### Styling The Virtual Events Section

```css
/* VIRTUAL EVENTS SECTION */
.virtual-events-section {
  display: flex;
  justify-content: center;
  padding: calc(var(--spacing-xl) * 2) 0;
}

.virtual-events-section .primary-button {
  background-color: var(--purple-1);
  margin: var(--spacing-md) 0 0 0;
}

.virtual-events-section .primary-button:hover {
  background-color: var(--primary-accent);
}

.virtual-events-section .col-left {
  height: 446px;
  padding: 0 var(--spacing-xl) 0 0;
}

.swipe-sessions-card {
  width: 540px;
  height: 446px;
  box-shadow: var(--standard-box-shadow);
  border-radius: 20px;
  overflow: hidden;
}

.swipe-sessions-card .card-top {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.swipe-sessions-card .card-top::before {
  background: var(--primary-gradient);
  content: '';
  width: 100%;
  height: 150%;
  position: absolute;
  top: -40%;
  transform: skewY(-5deg);
  z-index: 1;
}

#sessions-logo {
  z-index: 2;
  width: 338px;
}

.virtual-events-section .avatars {
  position: absolute;
  bottom: -70px;
  left: var(--spacing-lg);
  z-index: 3;
  /* width: 140px;
  height: 80px; */
}

.virtual-events-section .avatars img {
  width: 80px;
}

.virtual-events-section .avatars img:nth-of-type(2) {
  position: absolute;
  left: 55px;
}

.virtual-events-section .card-bottom {
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  padding: var(--spacing-xl);
}

.virtual-events-section .card-bottom .subtitle {
  margin: var(--spacing-lg) 0 0 0;
}

.virtual-events-section .card-bottom .secondary-text {
  color: var(--text-dark);
  width: 50%;
  font-weight: 700;
}
```

- When making the background rotated, if I transform `.card-top` rotate, it rotates everything inside of it as well.
  To make that stuff stay how it is, use before or after pseudo element. Then the content itself will stay the same.

### Adding The First Angled Stripe

```css
.integrations-section {
  color: var(--text-light);
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: calc(var(--spacing-xl) * 3) 0;
  z-index: 1;
}

.integrations-section::before {
  content: '';
  width: 100%;
  height: 1100px;
  background-color: var(--primary-accent);
  position: absolute;
  top: -32px;
  left: 0;
  z-index: -1;
  transform: skewY(-10deg);
}
```

- Instead of creating another div that’s only for the tilted background, use `::before` pseudo element

### Finishing The Angled Stripes

```css
/* GLOBAL SECTION */
.global-section {
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--text-light);
  position: relative;
  padding: calc(var(--spacing-xl) * 3) 0 0 0;
}

.global-section::before {
  content: '';
  width: 100%;
  height: 1200px;
  background-color: var(--primary-accent);
  position: absolute;
  top: -32px;
  left: 0;
  transform: skewY(-10deg);
  z-index: -1;
}
```

```css
/* VIRTUAL EVENTS SECTION */
.virtual-events-section {
  display: flex;
  justify-content: center;
  padding: calc(var(--spacing-xl) * 2) 0;
  position: relative;
}

.virtual-events-section::before {
  content: '';
  background-color: var(--bg-white);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
}
```

- Unlike the previous stripe, the bottom side of this stripe is not angled.
  There’s a couple of approaches to not have this bottom part angled. - Use a `::before` pseudo element to make a stripe like the previous one and then add in an `::after` pseudo element just to fill in the triangle at the bottom. - Use the `background-color` of the section and position it to fill the gap. - Add in a pseudo element to the next section (`.virtual-events-section`). → This is the easiest approach.

### Creating The Animated Gradient Hero Background

```html
<!-- GRADIENT BACKGROUND -->
<canvas id="gradient-canvas"></canvas>
```

- The first thing to know is that there is no way to animate gradients using CSS.
  (I can kind of fake it if I have two gradients or more layered on top of one another and they’re each in a separate element and I make them translucent and move the gradients across each other…but this wouldn’t be what I want)
- I cannot use a pseudo element. It’s because the element is not a regular generic element, it’s a special element, canvas.
  `<canvas>` allows to write JavaScript to draw where I can create animations, but more importantly, things like games, crazy effects. Without JavaScript, `<canvas>` is useless.
- The JavaScript source is from codepen.
- The argument that passed into the function(`initGradient`) is the location where the function will add the gradient effect into. Pass in the correct ID(`#gradient-canvas`)
  ```
  var gradient = new Gradient();
  gradient.initGradient("#gradient-canvas");
  ```
- Read the JavaScript code and follow the instruction, for example :

```
/*
 * Initializes the four section colors by retrieving them from css variables.
 */
initGradientColors() {
  this.sectionColors = [
    "--gradient-color-1",
    "--gradient-color-2",
    "--gradient-color-3",
    "--gradient-color-4",
  ]
		.map((cssPropertyName) => {
      let hex = this.computedCanvasStyle
        .getPropertyValue(cssPropertyName)
        .trim();
      //Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.
      if (4 === hex.length) {
        const hexTemp = hex
          .substr(1)
          .split("")
          .map((hexTemp) => hexTemp + hexTemp)
          .join("");
        hex = `#${hexTemp}`;
      }
      return hex && `0x${hex.substr(1)}`;
    })
    .filter(Boolean)
    .map(normalizeColor);
  }
// codes are omitted
```

```
/* ANIMATED GRADIENT */
#gradient-canvas {
  width: 200%;
  height: 970px;
  transform: rotate(-10deg);
  position: absolute;
  top: -600px;
  left: -50%;
  z-index: -1;
  --gradient-color-1: #ef008f;
  --gradient-color-2: #6ec3f4;
  --gradient-color-3: #7038ff;
  --gradient-color-4: #ffba27;
}
```

### Fixing An Issue With The Angled Stripes

```css
.integrations-section::after {
  content: '';
  background-color: var(--bg-light);
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
}
```

- There’s a sliver of white on the top and bottom of the integration section. It’s a problem because the previous section has a light-grey background (not white). Fix this with `::after` pseudo element like patching a hole. (I could use a div to do that but I prefer to stick to pseudo elements)

### Starting To Make Swipe Responsive

```css
@media only screen and (max-width: 1144px) {
  /* the style goes here */
}
```

- Write styles that don’t fit within my tablet size and my mobile size breakpoints.

```css
html,
body {
  width: 100%;
  position: relative;
  overflow-x: hidden;
}
```

- This is a way to hide the horizontal overflow.
