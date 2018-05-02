My [React]ive resume bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  So far this is pretty bare.  I may add a little Symantic-UI-React soon to spruce it up a bit.

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    images/
    index.html  - html
    favicon.ico
  src/
    index.css
    index.js  - main js file which renders the `<resume>` component
    registerServiceWorker.js
    test/
      App.test.js - this is the default test.  I haven't implemented testing for this component yet
    ResumeComponent/
      education.css - css specific to `<resume>` component
      resume.js   - actual react component
    favicon.ico
```

## Screenshots

### Component Demo
```sh
npm start
```
produces:
![alt screenshot](https://github.com/jaxonetic-github/react-resume/blob/master/demo-screenshot.png)
####Note the Component layouts in the React devtool. 