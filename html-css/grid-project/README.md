## Source

[The HTML & CSS Bootcamp Course](https://www.udemy.com/share/1085lQ3@_8AUEjhUY4KLN_wkAur49R-qj_wD-ULv51rA9D1lVQ-fvHKs09YmYJVTGXBBzyJ3DA==/)

## Step By Step Learning

### 1. Creating Image Overlay Pt 1

- First pick one image(not the whole images) and work on it. The reason for that is that this will change what the grid item actually is.
  I’m not creating a grid of image elements, but a grid of divs. In that div, I have an image and a paragraph. So it’s not just a bunch of images, it’s actually a bunch of divs that have images inside along with the text(View Project).

```html
<div class="project">
  <img src="./images/eth.avif" alt="" />
  <p>VIEW PROJECT</p>
</div>
```

```css
.project {
  width: 300px;
}

.project img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

- `oveject: fit;` tells the image how it should fit within the parent element.
- And then I need to figure out how to create this overlay effect, how to get the paragraph text to actually be on top of the image.

```html
<div class="project">
  <img src="./images/eth.avif" alt="" />
  <p class="overlay">VIEW PROJECT</p>
</div>
```

```css
.project {
  width: 300px;
  position: relative;
}

.project img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project .overlay {
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
```

- Make the paragraph element sit on top of an image → make it span of the full height and width of the image → center that text inside of it → make it disappear unless I hover it

### Creating Image Overlay Pt 2

```css
body {
  font-family: 'Poppins', sans-serif;
}

.project {
  width: 600px;
  position: relative;
}

.project img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project .overlay {
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 2px;
  opacity: 0;
  transition: all 0.2s ease;
}

.project .overlay:hover {
  opacity: 1;
  cursor: pointer;
}
```

- Set `opacity: 0;` for the overlay and make `opacity: 1;` when I hover it.

### 2. Adding In Our Images

```html
<body>
  <div class="project-grid">
    <div class="project" id="eth">
      <img src="./images/eth.avif" alt="" />
      <p class="overlay">VIEW PROJECT</p>
    </div>
    <div class="project" id="alphabet">
      <img src="./images/alphabet.avif" alt="" />
      <p class="overlay">VIEW PROJECT</p>
    </div>
    <div class="project" id="traveler">
      <img src="./images/traveler.avif" alt="" />
      <p class="overlay">VIEW PROJECT</p>
    </div>
    <div class="project" id="cube">
      <img src="./images/cube.avif" alt="" />
      <p class="overlay">VIEW PROJECT</p>
    </div>
    <div class="project" id="astro">
      <img src="./images/astro.avif" alt="" />
      <p class="overlay">VIEW PROJECT</p>
    </div>
    <div class="project" id="cup">
      <img src="./images/cup.avif" alt="" />
      <p class="overlay">VIEW PROJECT</p>
    </div>
    <div class="project" id="insta">
      <img src="./images/insta.avif" alt="" />
      <p class="overlay">VIEW PROJECT</p>
    </div>
    <div class="project" id="foam">
      <img src="./images/foam.avif" alt="" />
      <p class="overlay">VIEW PROJECT</p>
    </div>
    <div class="project" id="dimensional">
      <img src="./images/dimensional.avif" alt="" />
      <p class="overlay">VIEW PROJECT</p>
    </div>
  </div>
</body>
```

```css
body {
  font-family: 'Poppins', sans-serif;
}

.project-grid {
  display: grid;
  grid-template-columns: 400px 400px 1fr;
}

.project {
  /* width: 600px; */
  position: relative;
}
```

- The reason I give each image an id is that when it comes time to build the grid, I can then quickly refer to an image using an id. When I’m setting up the grid template areas and positioning them within the grid, it will be much easier.
- The next thing to do is figure out where I’m going to turn grid on, what element is the grid container.
- Wrap the images in a container (called `project-grid`). This will be the grid container.

### 3. Positioning Our Images On The Grid

```css
.project-grid {
  display: grid;
  grid-template-areas:
    'eth eth alphabet'
    'eth eth traveler'
    'astro cube traveler'
    'cup insta insta'
    'cup insta insta'
    'foam foam dimensional'
    'foam foam dimensional';
}

#eth {
  grid-area: eth;
}

#alphabet {
  grid-area: alphabet;
}

#traveler {
  grid-area: traveler;
}

#astro {
  grid-area: astro;
}

#cube {
  grid-area: cube;
}

#cup {
  grid-area: cup;
}

#insta {
  grid-area: insta;
}

#foam {
  grid-area: foam;
}

#dimensional {
  grid-area: dimensional;
}
```

- Position the images on the grid with `grid-templage-area`

### 4. Making Our Grid Layout Responsive

```css
.project-grid {
  display: grid;
  grid-template-areas:
    'eth eth alphabet'
    'eth eth traveler'
    'astro cube traveler'
    'cup insta insta'
    'cup insta insta'
    'foam foam dimensional'
    'foam foam dimensional';
  gap: 16px;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}

@media only screen and (max-width: 1100px) {
  .project-grid {
    max-width: 100%;
    grid-template-areas:
      'eth eth'
      'alphabet traveler'
      'astro cube'
      'insta insta'
      'cup foam'
      'dimensional dimensional';
  }
}

@media only screen and (max-width: 768px) {
  .project-grid {
    max-width: 100%;
    grid-template-areas:
      'eth eth'
      'alphabet alphabet'
      'traveler traveler'
      'astro cube'
      'insta insta'
      'cup cup'
      'foam foam'
      'dimensional dimensional';
  }
}
```

- Make the grid layout responsive first with media queirs

### 5. Fixing Our Image Overlays

```html
<div class="project" id="astro">
  <img src="./images/astro.avif" alt="" />
  <p class="overlay white">VIEW PROJECT</p>
</div>
```

```css
.overlay.white {
  color: white;
}

@media only screen and (max-width: 768px) {
  .project-grid {
    max-width: 100%;
    grid-template-areas:
      'eth eth'
      'alphabet alphabet'
      'traveler traveler'
      'astro cube'
      'insta insta'
      'cup cup'
      'foam foam'
      'dimensional dimensional';
  }
  .project .overlay {
    font-size: 24px;
  }
}
```

- When the breakpoint is 768px and below, the overlay text doesn’t look very good. So make the font size resonsive.
- It’s hard to read the text when the color of the image is dark. So create a class to assign white text instead of black.

### 6. Building The Navbar

```html
<header class="navbar">
  <div class="left">Patric Start</div>
  <nav class="right">
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
    <a href="#dribble">
      <img src="images/dribble_icon.png" alt="" />
    </a>
    <a href="#insta">
      <img src="images/insta_icon.png" alt="" />
    </a>
    <a href="#v">
      <img src="images/v_icon.png" alt="" />
    </a>
  </nav>
</header>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
}

.navbar .left {
  font-size: 32px;
  font-weight: 700;
}

.navbar .right a {
  text-decoration: none;
  color: black;
}

.navbar .right {
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .right a:hover {
  text-decoration: underline;
}

.navbar .right img {
  width: 24px;
  height: 24px;
}
```

- When building a navigational bar, use Flexbox.

### 7. Finalizing The Navbar and Footer

```css
<body>
    <div class="container">
      <header class="navbar">
        <div class="left">Patric Star</div>
        <nav class="right">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#dribble">
            <img src="images/dribble_icon.png" alt="" />
          </a>
          <a href="#insta">
            <img src="images/insta_icon.png" alt="" />
          </a>
          <a href="#v">
            <img src="images/v_icon.png" alt="" />
          </a>
        </nav>
      </header>
      <div class="project-grid">
        <div class="project" id="eth">
          <img src="./images/eth.avif" alt="" />
          <p class="overlay">VIEW PROJECT</p>
        </div>
        <div class="project" id="alphabet">
          <img src="./images/alphabet.avif" alt="" />
          <p class="overlay">VIEW PROJECT</p>
        </div>
        <div class="project" id="traveler">
          <img src="./images/traveler.avif" alt="" />
          <p class="overlay">VIEW PROJECT</p>
        </div>
        <div class="project" id="cube">
          <img src="./images/cube.avif" alt="" />
          <p class="overlay">VIEW PROJECT</p>
        </div>
        <div class="project" id="astro">
          <img src="./images/astro.avif" alt="" />
          <p class="overlay white">VIEW PROJECT</p>
        </div>
        <div class="project" id="cup">
          <img src="./images/cup.avif" alt="" />
          <p class="overlay">VIEW PROJECT</p>
        </div>
        <div class="project" id="insta">
          <img src="./images/insta.avif" alt="" />
          <p class="overlay white">VIEW PROJECT</p>
        </div>
        <div class="project" id="foam">
          <img src="./images/foam.avif" alt="" />
          <p class="overlay">VIEW PROJECT</p>
        </div>
        <div class="project" id="dimensional">
          <img src="./images/dimensional.avif" alt="" />
          <p class="overlay white">VIEW PROJECT</p>
        </div>
      </div>
      <footer class="footer">
        Designed and built by Patrick Star in Bikini Bottom.
      </footer>
    </div>
  </body>
```

```css
.container {
  max-width: 90%;
  margin: 0 auto;
  padding: 0 16px;
}

.footer {
  text-align: center;
  padding: 64px;
}

@media only screen and (max-width: 1100px) {
  .container {
    max-width: 100%;
  }
  .project-grid {
    max-width: 100%;
    grid-template-areas:
      'eth eth'
      'alphabet traveler'
      'astro cube'
      'insta insta'
      'cup foam'
      'dimensional dimensional';
  }
}

@media only screen and (max-width: 768px) {
  .project-grid {
    max-width: 100%;
    grid-template-areas:
      'eth eth'
      'alphabet alphabet'
      'traveler traveler'
      'astro cube'
      'insta insta'
      'cup cup'
      'foam foam'
      'dimensional dimensional';
  }
  .project .overlay {
    font-size: 24px;
  }
  .footer {
    font-size: 14px;
    padding: 32px;
  }
}
```

- There are many other approches make the navbar and the grid in sync with the same space on the left and the right.
  - Make both have a `max-width` of `90%`.
  - Wrap them in a container and then give that container a 90% max-width and center the container. (I did this)
  - Use Flexbox, then set the flex-direction on the whole body to be a column and then align everything to the center of that column.
- Give `<footer>` a class name “footer” just in case I have a page footer, a footer for section, etc.

### 8. Creating The Hamburger Button

- For the hamburger button, instead of using an image, use divs to animate it later.
- Once I start animating section I’m going to give each div a different class name(or use pseudo class) so that I can treat them differently (so that I can make one of them swivels to the right and the other swivels to the left…)
- Fix the Navbar to the top using `position: fixed;`

### 9. Writing The Individual Bar Animation

```css
.hamburger .bar:nth-child(1) {
  animation: flipBar1 1s infinite;
}

.hamburger .bar:nth-child(2) {
  animation: fadeBar2 1s infinite;
}

.hamburger .bar:nth-child(3) {
  animation: flipBar3 1s infinite;
}

@keyframes flipBar1 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(45deg) translate(4px, 10px);
  }
}

@keyframes fadeBar2 {
  from {
    transform: scaleX(1);
    opacity: 1;
  }
  to {
    transform: scaleX(0);
    opacity: 0;
  }
}

@keyframes flipBar3 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-45deg) translate(4px, -10px);
  }
}
.footer {
  font-size: 14px;
  padding: 32px;
}
```

- Write three separate animation, one for each bar.

### 10. Make The Hamburger Button Work

```jsx
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

hamburger.addEventListener('click', () => {
  bar1.classList.toggle('animateBar1');
  bar2.classList.toggle('animateBar2');
  bar3.classList.toggle('animateBar3');
});
```

```css
.animateBar1 {
  animation: flipBar1 1s;
  animation-fill-mode: forwards;
}

.animateBar2 {
  animation: fadeBar2 1s;
  animation-fill-mode: forwards;
}

.animateBar3 {
  animation: flipBar3 1s;
  animation-fill-mode: forwards;
}
```

- Make a separate class for each one of the bars that will contain the animation so when I click on that hamburger, a class will be added to each corresponding bar.
- Add `animation-fill-mode: forwards;` so that whatever happens at the end of the animation can persist.

### 11. Creating The Mobile Drawer Menu

```html
<nav class="mobileNav">
  <a href="#work">Work</a>
  <a href="#contact">Contact</a>
  <a href="#dribble">
    <img src="images/dribble_icon.png" alt="" />
  </a>
  <a href="#insta">
    <img src="images/insta_icon.png" alt="" />
  </a>
  <a href="#v">
    <img src="images/v_icon.png" alt="" />
  </a>
</nav>
```

```css
.mobileNav {
  width: 80px;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
}

.mobileNav a {
  text-decoration: none;
  color: black;
  margin: 16px 0;
}

.mobileNav a:hover {
  text-decoration: underline;
}

.mobileNav img {
  width: 24px;
  height: 24px;
}
```

- The process is similar to the navbar.

### 12. Animating The Drawer Slide-Out

```jsx
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const mobileNav = document.querySelector('.mobileNav');

hamburger.addEventListener('click', () => {
  bar1.classList.toggle('animateBar1');
  bar2.classList.toggle('animateBar2');
  bar3.classList.toggle('animateBar3');
  mobileNav.classList.toggle('openDrawer');
});
```

```css
.mobileNav {
  width: 80px;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: -160px;
  z-index: 2;
  transition: transform 0.3s;
}

.mobileNav a {
  text-decoration: none;
  color: black;
  margin: 16px 0;
}

.mobileNav a:hover {
  text-decoration: underline;
}

.mobileNav img {
  width: 24px;
  height: 24px;
}

.openDrawer {
  transform: translateX(-160px);
}
```

- One easy way to push it over to the right is using the `top` or using the `right` property.
  (like setting `right: -88px;` so we won’t wee it anymore) And then I could use a `transform` to bring it back.
