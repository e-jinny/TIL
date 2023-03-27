## Source

## Step By Step Learning

### Centering The Main Content

```html
<body>
  <div class="content">
    <p>
      <!--lorem ipsum goes here-->
    </p>
  </div>
</body>
```

```css
content {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px;
}
```

- Start with a container(not the whole body) that has all the paragraphs, headings,…etc inside of it.
- It’s to set a `max-width` on this container to keep those things from going all the way across the page.
- Set `margin: 0 auto;` to make it centered.

### Working on Typography

```css
body {
  font-family: 'Mukta', sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  letter-spacing: 0.5px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Bitter', serif;
}
```

- Serif fonts are considered a little bit harder to read at small sizes, and san-serif fonts are considered better for small sizes for body text.
- Make the font of the body `sans-serif`
- Group the heading and make the font of them `serif`.

```html
<blockquote class="quote">
  "This is a quote - you probably knew that at a glance since we gave it some
  nice styling. Pretty nice, huh? A great lesson in User Experience Design,
  where we take special care to implement our web page in a way that makes it
  pleasant and intuitive for our users/readers. Differentiating our different
  typography components visually makes information much more organized and
  easier to digest for our users."
  <cite>– A wise person</cite>
</blockquote>
<hr />
```

- Use `<blockquote>` element, and `<cite>` element instead of `<p>`. `<cite>` element is used to cite the source of a quote or a piece of information.
- We could make the divider, which is the horizontal line, by using border-bottom. But there is an element made for it, the horizontal rule. The `<hr>` element. it’s a self-closing element.

### Creating the Headline Section

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Bitter', serif;
  font-weight: 500;
}

h1 {
  font-size: 80px;
  font-weight: 400;
  letter-spacing: -1.5px;
}
```

- When `h1` has a font weight of 500 and then 400. The second one wins out → The Cascade

### Adding in Code Styles

```html
<p class="headline">
  Headlines, like this one, are great ways to quickly capture the reader's
  attention, to give them a sumary, intro, or other important information in a
  web page. You can use <code>text-transform: uppercase;</code> to make a whole
  body of text uppercase using CSS if you really need to grab attention!
</p>
```

- Instead `<span>`, use `<code>` element to make the pieces of code orange. It is more semantic.

### Creating the Footer

```css
footer ul {
  list-style: none;
  margin: 0 auto;
  max-width: 900px;
  text-align: center;
  padding: 28px 0;
}
```

- The `ul` element itself takes up the full width, so the margin auto doesn’t work. Instead, set some width on it first and then set text-align to make lists centered.
- Instead of setting a hard height on the footer, add padding to `ul` so I can make the lists in the middle

### Writing The Full Size Hero

```css
hero {
  background-color: #863ae8;
  height: 100vh;
  color: white;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

- To make hero take up all of the screen height, use `vh` unit. `100vh` will have a height of 100% of the view height.
- `flex` is one of easiest way of positioning the child elements
