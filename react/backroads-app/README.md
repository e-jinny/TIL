# Backroads App

## Source

[React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

[https://github.com/john-smilga/react-course-v3](https://github.com/john-smilga/react-course-v3)

## Step By Step Learning

### Create React App

- install
  `npx create-react-app@latest backroads-app`
    <aside>
    📖 The `@latest`tag specifies that you want to use the latest version of Create React App.
    
    </aside>

- run dev server
  `npm start`

### Set up the boilerplate

- REMOVE in src
  - App.css
  - App.test.js
  - logo.svg
  - reportWebVitals.js
  - setupTest.js
- App.js - The root component
  - remove logo.svg
  - remove App.css
- index.js
  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ```
- index.css - This is where I set up my global styles or maybe all the styles (it’s a common approach)
  - When I first create react app, I see two CSS fies. - App.css and index.css
  - I can nicely split up the CSS code but I need to be careful because all of the CSS code ends up in one place.
  - Keep in mind that it’s not scoped by default to a certain component
- It is a common convention in React development to set up a separate root component, often referred to as the "App" component.
- Simply remove reportWebBitals() and the import
- `<React.strickMode>` - React.strickMode is a tool for highlighting potential problems in application.
  It activates additional checks and warnings for its descendants. - If I go with `console.log("hello")` in App component, I see two “hello” in the console.
  It basically runs twice because I have `<React.StricMode>` wrapping my `<App/>` component. - however, it’s not going to affect the production. - I can remove it if I want.

### Set up The Structure

- html project → [https://github.com/john-smilga/react-course-v3/tree/main/02-backroads-project/backroads-html](https://github.com/john-smilga/react-course-v3/tree/main/02-backroads-project/backroads-html)
- public/index.html
  - change title
  - copy/paste font-awesome link (from html project)
- index.css
  - copy/paste css (from html project - css/style.css)
  - coment out this
    ```jsx
    @media screen and (min-width: 768px) {
      /* .hero {
        background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
          url('../images/main.jpeg') center/cover no-repeat;
      } */
    }
    ```
- src folder
  - copy/paste images folder (from html project)
  - move favicon.ico to public
- App.js
  - refactor to <React.Fragment>
    Fragment → let's us group elements without adding extra nodes
  - copy/paste all the content within body tags, up to <script> (index.html)
  - select all "class" instances and refactor to "className" (CMD + D or SHIFT + CMD + L)
  - fix the comment bug (remove or comment out) - if I have some commetns coming from HTML, JSX will complain
  - don't worry about - Using target="\_blank" without rel="noreferrer" warning, will fix it later
  - move README.md from final to current project
  - I have all the code in App.js (and it’s possible) BUT one of the benefits of React is the fact that I can split up our code effectively.
- html/css feature - **Smooth Scroll**
  ```html
  <!-- link -->
  <a href="#services"> services </a>
  <!-- element -->
  <section id="services"></section>
  ```
  ```css
  html {
    scroll-behavior: smooth;
  }
  .section {
    /* navbar height */
    scroll-margin-top: 4rem;
  }
  ```
  - Just because I work with React does not mean I have to use JavaScript for everything.
    There are features which I can nicely set up with just HTML, CSS or Vanilla JS.

### Set up The Components

- in src create components folder
- in the components create following files
  - Navbar.js
  - Hero.js
  - About.js
  - Services.js
  - Tours.js
  - Footer.js
- setup components with default export (snippet - rafce)
- carefully split up the code from App.js into each component (files)
- import and render all components in App.js (try auto imports)
- result is going to be the same, it's just easier to manage the code

### Fix The Logo Image

- in Navbar.js
  ```
  <img src='./images/logo.svg' className='nav-logo' alt='backroads' />
  ```
  event though the images folder is in the src, this is not how it works
- setup import from images and update source
  ```jsx
  // import
  import logo from '../images/logo.svg';

  // JSX
  <img src={logo} className='nav-logo' alt='backroads' />;
  ```

### Create Page Links Data

- figure out which data is repeating - href, text
  ```jsx
  <li>
    <a href='#home' className='nav-link'>
      home
    </a>
  </li>
  ```
- in src create data.js and set up a structure - `[{property:value},{property:value}]`
  ```jsx
  export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' },
  ];
  ```
- export/import `pageLinks` data
- the data is located in one place - it’s easy to remove and add data
  HTML does not have the templating option, so I just had to hard code everything

### Refactor Repeating Code - Page Links

- iterate over data
  ```jsx
  import { pageLinks } from '../data';

  {
    pageLinks.map((link) => {
      return (
        <li key={link.id}>
          <a href={link.href} className='nav-link'>
            {link.text}
          </a>
        </li>
      );
    });
  }
  ```
- Now I can control the links in one place and the browser is just responsible for rendering them.

### Create Social Links Data

- figure out which data is repeating - href, text
  ```jsx
  <li>
    <a href='https://www.twitter.com' target='_blank' className='nav-icon'>
      <i className='fab fa-facebook'></i>
    </a>
  </li>
  ```
- in src create data.js and set up a structure - `[{property:value},{property:value}]`
  ```jsx
  export const socialLinks = [
    { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
  ];
  ```
- export/import `socialLinks` data

### Refactor Repeating Code - Social Links

- use JavaScirpt object destructuring
- add `rel='noreferrer'` for security issue
  ```jsx
  {
    socialLinks.map((link) => {
      const { id, href, icon } = link;
      return (
        <li key={id}>
          <a href={href} target='_blank' rel='noreferrer' className='nav-icon'>
            <i className={icon}></i>
          </a>
        </li>
      );
    });
  }
  ```

### Change The Hero Title

- change title to ‘backroads app’
  ```jsx
  <h1>Backroads App</h1>
  ```

### Set Up The Hero Background Image

- fix the image path in css `('../images/main.jpeg')` → `('./images/main.jpeg')`
  ```css
  .hero {
    background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url('./images/main.jpeg') center/cover no-repeat;
  }
  ```

### Set Up The About Image

- fix the image just like with logo in the navbar
  ```jsx
  import aboutImg from '../images/about.jpeg';
  ```
  ```jsx
  <img src={aboutImg} className='about-photo' alt='awesome beach' />
  ```

### Create Title Component

- refactor repeating code on a global level - in multiple components and sections
  ```jsx
  <div className='section-title'>
    <h2>
      about <span>us</span>
    </h2>
  </div>
  ```
- in components create Title.js
  ```jsx
  const Title = ({ title, subTitle }) => {
    return (
      <div className='section-title'>
        <h2>
          {title} <span>{subTitle}</span>
        </h2>
      </div>
    );
  };
  export default Title;
  ```
- get the structure from one of the sections

### Replace The Title in About, Services, Tours Component

- setup two props
- replace in About, Services, Tours like below :
  ```jsx
  // import
  import Title from './Title';

  // display
  <Title title='about' subTitle='us' />;
  ```

### Create Services Data

- setup data, export/import
  - data.js
  ```jsx
  export const services = [
    {
      id: 1,
      icon: 'fas fa-wallet fa-fw',
      title: 'saving money',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
    },
    // rest of the objects
  ];
  ```

### Create Service Component

- move elements to separate components
  ```jsx
  const Service = ({ icon, title, text }) => {
    return (
      <article className='service'>
        <span className='service-icon'>
          <i className={icon}></i>
        </span>
        <div className='service-info'>
          <h4 className='service-title'>{title}</h4>
          <p className='service-text'>{text}</p>
        </div>
      </article>
    );
  };

  export default Service;
  ```

### Refactor Repeating Code - Services

- import Service component and Iterate over the `<Service />` instance
  - pass props using `...` operator
- Services.js
  ```jsx
  import Title from './Title';
  import { services } from '../data';
  import Service from './Service';

  const Services = () => {
    return (
      <section className='section services' id='services'>
        <Title title='our' subTitle='services' />
        <div className='section-center services-center'>
          {services.map((service) => {
            return <Service key={service.id} {...service} />;
          })}
        </div>
      </section>
    );
  };

  export default Services;
  ```

### Create Tours Data

- Don’t forget to get the images in the data
  ```
  import tour1 from './images/tour-1.jpeg';
  import tour2 from './images/tour-2.jpeg';
  import tour3 from './images/tour-3.jpeg';
  import tour4 from './images/tour-4.jpeg';
  ```

### Create Tour Component

- move elements to separate components
  ```jsx
  const Tour = ({ image, date, title, info, location, duration, cost }) => {
    return (
      <article className='tour-card'>
        <div className='tour-img-container'>
          <img src={image} className='tour-img' alt={title} />
          <p className='tour-date'>{date}</p>
        </div>
        <div className='tour-info'>
          <div className='tour-title'>
            <h4>{title}</h4>
          </div>
          <p>{info}</p>
          <div className='tour-footer'>
            <p>
              <span>
                <i className='fas fa-map'></i>
              </span>{' '}
              {location}
            </p>
            <p>{duration} days</p>
            <p>from ${cost}</p>
          </div>
        </div>
      </article>
    );
  };
  ```

### Refactor Repeating Code - Tours

- refactor repeating code (just like I did for services..)

### Refactor Repeating Code - Footer

- refactor repeating code (Same thing..)
- re-use page and social links
- in the provide current year
  - `new Date().getFullYear()`
  ```jsx
  <p className='copyright'>
    copyright &copy; Backroads travel tours company
    <span id='date'>{new Date().getFullYear()}</span> all rights reserved
  </p>
  ```
- **Alternative Approach** - **I can also create PageLinks component and NavLinks component for the entire list.  
  And set up and pass the props for className.
  BUT the more "moving parts" I will have the harder it's going to be to manage.
  So if possible, let’s just use data. The Best way is to follow the company’s Guidelines.**

### Deployment

- make sure to fix warnings and errors
- with github repo
  - push up to github repo
  - netlify - import an existing project
  - Benefits
    - don't need to keep project locally
    - automatic builds
- However I pushed this project up to my TIL repo..so I’m going to deploy this manually on Netlify
  - `npm run build`
  - https://til-1-backroads-app.netlify.app/
