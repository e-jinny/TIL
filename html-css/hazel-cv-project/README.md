## Source

## Step By Step Learning

### Setting Up The Navbar

```css
body {
  padding: 0;
  margin: 0;
}
```

- Reset `padding` and `margin` to `0` to make the coral box go all the way to the edges. (→remove the default value)

### Finishing The Navbar

```html
<a class="contact" href="#contact">Contact Me</a>
```

```css
.navbar .contact {
  background-color: white;
  color: #f08e80;
  padding: 16px 24px;
  text-decoration: none;
}

.navbar .contact:hover {
  opacity: 0.8;
}
```

- The contact button is styled like a button, but it’s really more of a link. So use `<a>` instead of a `<button>`.

### Starting The Hero Content

```html
<div class="hero-content">
  <h1 class="tagline">
    I'm a <em>Scientist</em> and <em>Speaker</em> who is interested in the
    psychology of greed.
  </h1>
</div>
```

- To make texts italicized, use an `<em>` element. We also have an `<i>` element, but the `<em>` element would make more sense because we’re trying to make the texts stand out.
- The headline tag is as important as the name(Hazel), so use `<h1>` tag.

### Making The Skills Section

```html
<div class="two-column-section">
  <p>My Mission</p>
  <p>
    This is my mission. Maecenas a varius odio egestas auctor. Praesent
    facilisis, ex a gravida ultricies, quam sed magna placerat eros, et vehicula
    lectus ligula id dui. Aliquam uto cursus velit ut eros lorem ipsum
    ullamcorper iaculis.
  </p>
</div>
```

```css
.two-column-section p {
  width: 50%;
  box-sizing: border-box;
  float: left;
}
```

- `float` is not really made to do this, but if we set `float` to left, they’re now going to well float and the content will flow around them.

```css
.hero {
  min-height: 90vh;
  background-color: #f08e80;
  color: white;
  display: inline-block;
}
```

- If my window is smaller, shorter or less tall, then our content gets cut off.(It actually starts overflowing onto the white area. So instead of setting `height: 90vh;`, set `min-height: 90vh;` and git it a `display: inline-block;`

### Creating The Blog Section

```html
<section class="blog-section">
  <div class="blog-content">
    <div class="two-column-section">
      <p>Tech Blog</p>
      <div class="blog-posts">
        <p class="blog-heading">This Is Your Brain On Helium</p>
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          voluptate mollitia voluptates iure harum autem facere aut cum.
          Dolorem, molestias animi nisi esse quam quo optio! Quidem nobis
          inventore voluptatum.
        </p>
        <p class="blog-date">May 19, 2025</p>
        <p class="blog-heading">In Search Of Intelligence</p>
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          voluptate mollitia voluptates iure harum autem facere aut cum.
          Dolorem, molestias animi nisi esse quam quo optio! Quidem nobis
          inventore voluptatum.
        </p>
        <p class="blog-date">June 12, 2025</p>
        <p class="blog-heading">Should Public Transit Be Free?</p>
        <p class="blog-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          voluptate mollitia voluptates iure harum autem facere aut cum.
          Dolorem, molestias animi nisi esse quam quo optio! Quidem nobis
          inventore voluptatum.
        </p>
        <p class="blog-date">March 17, 2025</p>
      </div>
    </div>
  </div>
</section>
```

```css
.two-column-section > p {
  width: 50%;
  box-sizing: border-box;
  float: left;
}
```

- We have nested paragraphs. Add `>` operator to target direct descendant paragraph, not all paragraphs in a two column section.

```css
.blog-posts .blog-date {
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 32px;
}

.blog-posts p {
  margin: 8px 0;
}
```

- Make `.blog-date` more specific because if we do like the code below the margin-bottom will not work:
  ```css
  .blog-date {
    font-size: 0.9rem;
    color: gray;
    margin-bottom: 32px;
  }

  .blog-posts p {
    margin: 8px 0;
  }

  // just one class selector VS. (a class selector + an element selector)
  // the second rule is more specific
  // so setting the margin-bottom of .blog-date won't work.
  ```

```css
.blog-posts {
  margin-top: 24px;
}
```

- Calculate the margin to make the blog title and blog posts aligned.
  `.blog-title`(32px) = `.blog-posts`(x px) + `.blog-post .p` (8px)
  (⇒ the x is `24`)

### Adding The Events Section

- The process is similar to the previous one

### Making A Simple Footer

- Add space by adding the padding the footer element with the black background.
