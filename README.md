
=======
# My **React**ive resume. 

View Codepen [Demo here](https://codepen.io/jaxonetic/pen/KZrdYK).  Please note that my most up-to-date resume can be found [HERE](https://drive.google.com/open?id=1DmMsnAhEoaQ163A4rn3wVIbbN3K-mG2PLp4jrUz49wg) on my Google Drive.


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
```sh
npm start
```
produces:
![alt screenshot](https://github.com/jaxonetic-github/react-resume/blob/master/demo-screenshot.png)

####Note the Component layouts in the React devtool. 