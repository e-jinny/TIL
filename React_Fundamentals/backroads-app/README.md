## Source

[React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

[https://github.com/john-smilga/react-course-v3](https://github.com/john-smilga/react-course-v3)

### Create React App

- install
  `npx create-react-app@latest backroads-app`
    <aside>
    📖 The `@latest`tag specifies that you want to use the latest version of Create React App.
    
    </aside>

- run dev server
  `npm start`

### SRC Folder (boilerplate)

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
  // It is a common convention in React development to set up a separate root component, often referred to as the "App" component.
  import App from './App';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  //Simply remove reportWebBitals() and the import
  ```
- index.css - This is where I set up my global styles or maybe all the styles
  - When I first create react app, I see two CSS fies. - App.css and index.css
  - **I can nicely split up the CSS code but I need to be careful because all of the CSS code ends up in one place.**
  - **Keep in mind that it’s not scoped by default to a certain component**

### Set up Structure

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
  - copy/paste all the content within body tags, up to <script> (index.html)
  - select all "class" instances and refactor to "className" (CMD + D or SHIFT + CMD + L)
  - fix the comment bug (remove or comment out)
  - don't worry about - Using target="\_blank" without rel="noreferrer" warning, will fix it later
  - move README.md from final to current project
  - **I have all the code in App.js (and it’s possible) BUT one of the benefits of React is the fact that I can split up our code effectively.**

### Set up Components

- in src create components folder
- in the components create following files
  - Navbar.js
  - Hero.js
  - About.js
  - Services.js
  - Tours.js
  - Footer.js
- setup components with default export (snippet - rafce)
- carefully move the code from App.js into components (files)
  - hint - look for navbar, footer and section tags
- App.js should be empty
- import and render all components in App.js (try auto imports)
- result is going to be the same, it's just easier to manage the code
- again, it's just my preference to split up code in such way. You can split it up in any way that makes the most sense to you.

### Logo

- in Navbar.js
  - setup import from images and update source
    ```jsx
    // import
    import logo from '../images/logo.svg'

    // JSX
    ;<img src={logo} className='nav-logo' alt='backroads' /
    ```

### Smooth Scroll

- html/css feature
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
    There are features whice I can nicely set up with just HTML, CSS.

### Page Links

- refactor repeating code
  - figure out which data is repeating - href, text
    ```jsx
    <li>
      <a href='#home' className='nav-link'>
        home
      </a>
    </li>
    ```
  - in src create data.js and set up a structure - [{property:value},{property:value}]
  - iterate over data
    ```jsx
    export const pageLinks = [
      { id: 1, href: '#home', text: 'home' },
      { id: 2, href: '#about', text: 'about' },
      { id: 3, href: '#services', text: 'services' },
      { id: 4, href: '#tours', text: 'tours' },
    ];
    ```
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
- **Now I can control the links in one place and the browser is just responsible for rendering them. I don’t have to hard code anything.**

### **Nav Icons (social-links)**

- refactor repeating code
  - figure out which data is repeating - href, icon
    ```jsx
    <li>
      <a href='https://www.twitter.com' target='_blank' className='nav-icon'>
        <i className='fab fa-facebook'></i>
      </a>
    </li>
    ```
  - add rel='noreferrer' for security issue
    ```jsx
    {
      socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              target='_blank'
              rel='noreferrer'
              className='nav-icon'>
              <i className={icon}></i>
            </a>
          </li>
        );
      });
    }
    ```

### Hero

- change title to ‘backroads app’
- fix the image path in css

### About

- fix the image just like with logo in the navbar

### Title

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
- setup two props
- replace in About, Services, Tours
  ```jsx
  // import
  import Title from './Title';

  // display
  <Title title='about' subTitle='us' />;
  ```

### Services

- refactor repeating code (do the same thing as page and social links)
  - setup data, export/import, iterate
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
- Services.js
  ```jsx
  import Title from './Title';
  import { services } from '../data';
  const Services = () => {
    return (
      <section className='section services' id='services'>
        <Title title='our' subTitle='services' />

        <div className='section-center services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className='service' key={id}>
                <span className='service-icon'>
                  <i className={icon}></i>
                </span>
                <div className='service-info'>
                  <h4 className='service-title'>{title}</h4>
                  <p className='service-text'>{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  };
  export default Services;
  ```

### Tours

- refactor repeating code (Same thing..)
- Don’t forget to get the images in the data

### Footer

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

**I can also create PageLinks component and NavLinks component for the entire list.**

**And set up and pass the props for className.**

**BUT the more "moving parts" I will have the harder it's going to be to manage.**

**So if possible, let’s just use data. The Best way is to follow the company’s Guidelines.**

### Challenge

- create more components (essentially, split up the code more)
  - Tour.js
  - Service.js
- find all map methods and move elements to separate components

### Deployment

- make sure to fix warnings and errors
- push up to github repo
- netlify - import an existing project
