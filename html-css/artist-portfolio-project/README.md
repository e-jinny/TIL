## Source

[React Course](<[https://www.udemy.com/course/html-and-css-bootcamp/](https://www.udemy.com/course/html-and-css-bootcamp/)>)

## Step By Step Learning

### Basic Project Setup

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="./index.css" />
</head>
```

- Add index.html and index.css
- Link a CSS file to HTML file
- Embed Google Font “Cormorant”

### Writing The Navbar Markup

Using semantic elements like `<header>` and `<nav>` improve accessibility of our web pages, both to users who are using screen readers. but also to code, crawlers and scrapers.

```
<header>
  <h1>Joseph Shmoe | Ceramics</h1>
  <nav>
    <ul>
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

- It’s not a good idea to wrap all navigational and header contents in a `<div>`.
  The correct associated element rather than `<div>` is the `<header>` element.
- `<header>` basically represents any introductory content. And often has navigational aids, logo, search form.
- Wrap navigational links in a `<nav>` element.
- `<nav>` is one of the newer elements in HTML that is semantic and we use it whenever we have navigational content.
- So `<nav>` could be in the header, footer or in the side nav bar,
- Instead of having three disparate `<a>` elements, have one unordered list where each `<li>` is an `<a>` element.

### Styling The Navbar

```html
<nav class="links">
  <ul>
    <li><a href="#work">Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

```css
h1 {
  display: inline-block;
}

.links {
  display: inline-block;
}

.links li {
  display: inline-block;
}

.links a {
  color: black;
  text-decoration: none;
  font-size: 20px;
  margin: 0 8px;
}
```

- Before decorating the links, get them in the right area first.
- The difference between `inline` and `inline-block` is that `inline-blick` will respect vertical and horizontal margin and padding. And it will push other stuff away.
- `<header>`, `<h1>`, `<nav>`, `<ul>`, `<li>` are all the block element. So make them inline-block. Will this code below be a good idea? :
  ```css
  h1,
  nav,
  li {
    display: inline-block;
  }
  ```
  It depends on the styles but it’s not a good idea to combine them just to share one property if we have to style each element with other properties.
- This is also not a good idea to write selectors like this :

  ```css
  h1 {
    display: inline-block;
  }

  nav {
    display: inline-block;
  }

  li {
    display: inline-block;
  }
  ```

  Because this is too broad. A typical website could have multiple `nav`s, `li`s.

- We could get more specific by saying only the `li`s inside of the header (`header li`) or only `li`s inside of the nav (`nav li`) but I prefer to give the nav a class.
- Remove the defaults for links.
- Give space between links. `margin` in better than `padding` when pushing things away. (We could use `padding` only when there’s no background color or border)

### Finishing Up The Navbar

```css
h1 {
  display: inline-block;
  font-weight: 300;
  margin: 0 32px 0 0;
}

.links ul {
  padding: 0;
}

a.active {
  border-bottom: 1px solid black;
}
```

- To apply accurate space between elements, remove the default margin of `h1` and the default padding of `ul` (⇒ will learn how to reset that).
- And add margin we want.
- To selectively target one link, set up a class and give it a descriptive name( “active” or “current” - active is probably more common)
- “active” is jus used to refer to the fact that this is the active page.
- It’s a common way to use a border to create an underline or over line that we can control the thickness of, but also the spacing. By using padding, we can push the line further away.
  With `text-decoration: underline;`, we can’t do that.

### Creating The Photo Grid

```html
<img
  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />

<img
  src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />

<img
  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

<img
  src="https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80" />

<img
  src="https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80" />

<img
  src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />

<img
  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />

<img
  src="https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
```

```css
img {
  width: 40%;
  height: 500px;
}
```

- After embed images, give them a width a height.
- Style all images with `img` selector, for now.
- But I will find a better way to target them because it’s too broad. There might be other images like a logo, icons, etc.

### Working On The Photo Grid

```html
<div class="card">
  <img
    src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
  <h2>Joshua Vase</h2>
</div>
<div class="card">
  <img
    src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
  <h2>Larkin Plates</h2>
</div>
<div class="card">
  <img
    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
  <h2>Fortessa Cloud No 2</h2>
</div>
<div class="card">
  <img
    src="https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80" />
  <h2>Astoria Collection</h2>
</div>
<div class="card">
  <img
    src="https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80" />
  <h2>Lava Beach Stoneware</h2>
</div>
<div class="card">
  <img
    src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
  <h2>Sand Canyon Bowls</h2>
</div>
<div class="card">
  <img
    src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
  <h2>Lennon Collection</h2>
</div>
<div class="card">
  <img
    src="https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
  <h2>Mendocino Dinnerware</h2>
</div>
```

```css
.card {
  width: 49.75%;
  display: inline-block;
  box-sizing: border-box;
  padding: 16px;
}

.card img {
  height: 500px;
  width: 100%;
}

.card h2 {
  display: inline-block;
}
```

- To get the text(`h2`) under each image, use a container element to group an image and the corresponding`h2` together.
- Instead of targeting `img` to size all the images like we did last time, narrow it down and make them 100% wide as their parent elements. And give the containers a class and target it to size them (`width:  50%;`).
- When we have elements that are `inline-block`, the space between each element, which is the actual whitespace on code, is going to be respected. That means if we set one card to be 50%, another card to be 50% for their width, that adds up to 100%. (VS Code auto-formats and adds whitespace, so this approach will be really annoying)
- So make the width slightly less than 50%, like 49.75%. - This is the easiest approach.
- Space between each image vertically and horizontally.
- To avoid pushing over the cards when we give them space between each other, set `box-sizing: borderbox`, and `paddding` .

### Finishing The Photo Grid

```html
<section class="gallery">
  <!-- The image divs goes here -->
</section>
```

```css
.gallery {
  padding: 16px;
}

.card {
  width: 49.75%;
  display: inline-block;
  box-sizing: border-box;
  padding: 16px;
}

.card img {
  height: 500px;
  width: 100%;
  object-fit: cover;
}

.card h2 {
  display: inline-block;
  margin: 8px 0 16px 0;
```

- Which one would be the better approach?
  1. Add every odd-numbered card padding(or margin) to the left to add some space on the left side, and add every even-numbered card padding(or margin) to the right to add some space on the right side.
  2. Wrap all of the cards in a container and then add left and right padding(or margin) to that container.
     ⇒ 2 would be better. Use `<section>`element for the container.
- To avoid the images being squashed, set `object-fit: cover;`.

### Adding The Footer Content

```html
<section class="about">
  <h3>
    Designing, making, and selling goods of timeless design and uncompromising
    integrity—made thoughtfully, honestly, and with pride—to be enjoyed with
    similar intention.
  </h3>
  <h3 class="cta">Let's work together.</h3>
  <div class="contact">
    <p>joseph@jsceramics.com</p>
    <p>(212)772-5445</p>
  </div>
</section>
```

```css
.card img:hover {
  opacity: 0.9;
}

.about {
  width: 40%;
  min-width: 600px;
  margin: 100px 0 100px 200px;
}

.about h3 {
  font-size: 40px;
  font-weight: 300;
}

.contact {
  margin-top: 100px;
}

.contact p {
  margin: 0;
  font-size: 20px;
}

.cta {
  border-bottom: 1px solid black;
  display: inline-block;
  padding-bottom: 8px;
  margin-top: 0;
}
```

- Add a hover detail on the images.
- To make the paragraphs stop shrinking, use `min-width`.
- To avoid making the underline of `.cta` take up all the way across, set `display: inline-block;`.
- Each chunk of the page gets its own chunk of styles.- This is a common approach to organize the styles.
