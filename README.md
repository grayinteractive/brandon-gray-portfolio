# brandongray.dev
[![Travis (.com)](https://img.shields.io/travis/com/brandonagray/brandonagray.github.io.svg?style=flat-square)](https://travis-ci.com/brandonagray/brandonagray.github.io)
[![Coveralls github branch](https://img.shields.io/coveralls/github/brandonagray/brandonagray.github.io/master.svg?style=flat-square)](https://coveralls.io/github/brandonagray/brandonagray.github.io)
[![Deploys with Netlify](https://img.shields.io/badge/Netlify-deployed-brightgreen.svg?style=flat-square)](https://www.netlify.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/github/license/brandonagray/brandonagray.github.io.svg?style=flat-square)](https://github.com/brandonagray/brandonagray.github.io/blob/master/LICENSE)

Personal website/portfolio of Brandon Gray.

Custom built, from the props up.  
Powered by [React](https://reactjs.org/) and [GatsbyJS](https://www.gatsbyjs.org/).  
Follows [Airbnb](https://github.com/airbnb/javascript) and [Prettier](https://prettier.io/) coding style.  
Tests written with [Jest](https://jestjs.io/) + [Enzyme](https://github.com/airbnb/enzyme)/[React Test Renderer](https://reactjs.org/docs/test-renderer.html).  
Continuous integration through [TravisCI](https://travis-ci.org/).  
Deploys from [Netlify](https://www.netlify.com/).  

**Check it out [here](http://www.brandongray.dev)!**

### Setting up
- Use `git clone` to clone this repository. Alternatively, download the source code.
- Make sure required dependencies have been installed using `npm install`.

### Development and testing
- Execute:
  - `gatsby develop` to view site in development mode with hot reloading enabled.
  - `npm run test` to run tests and generate code coverage results.
  - `npm run test:update` to run tests and update snapshots if necessary.
  - `npm run lint` to run ESLint and check for improper code.
  - `npm run prettier` to format files in accordance with Prettier.
  - `npm run prettier:check` to see if Prettier style is being followed.
- All tests live in the `/test` directory. All source code can be found in the `/src` directory. The `/static` folder holds resources like images and documents used on the website.

### Building for production
 - Run `gatsby build` to generate a production optimized build. Files and artifacts will be stored in the `/static` directory.
 - Run `gatsby serve` for a local production version of the site.
 - Host on your favourite static site CMS or hosting serv-wait, you really shouldn't need to host my personal website yourself...

###### Questions? [Shoot Brandon an email.](mailto:me@brandongray.dev)
