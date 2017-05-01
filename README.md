# React Redesign for jevinsite.org

## Running Locally
1. Begin by cloning down the repo: `git clone https://github.com/FXStrato/jevinsite.git`
1. Install node modules and dev dependencies: `npm i` and `npm --only=dev`
1. Start the server with `npm start`

## Making Changes
### Style changes
- Changes to style will be in either `index.css` or in any of the JS files hosting that specific page. For things like small, single element changes, you can perform inline styling like this: `<div style={{color: '#000'}}>`. The syntax for inline React styling does not allow the use of `-`, so properties like `font-size` will now be `fontSize`. Also, since you're passing in an object, don't forget quotations. Ex. `div style={{fontSize: '1rem'})>`
### Code Changes
- Adding data to each specific page will be from Data.js. Each page has it's own data object, and is either written out as an array of objects, or in React HTML.
You will see the code like such from the Data.js file:
```
inPrep: [
    {
      title: 'Mapping mathematical jargon in the scholarly literature (2016)',
      authors: <div>J. Portenoy, <span className="bold">J.D. West</span></div>,
      volume: '[In Review]'
    },
```
as well as
```
//Data for Bio.js. Data stored as react HTML
const bioData = Immutable.Map({
  bio: (
    <div>
      <h1 className="hidden">Bio</h1>
      <Row>
      ...
      </Row>
    </div>
 });
```
Notice each object contains parameters that can be a single element, such as a `<div>`, or a string, like a regular JSON object.

If you need assistance in finding out where in the data the information is being pulled from for a page, you can go to the page's JS file. For example, News.js pulls from `newsData.data` in Data.js, which is a singular React element. Once you know where the elements are, it's relatively straightforward to change it. Adding new data is as simply as copying and pasting one of the objects into the beginning of the array and editing the data.

### Running build
Once you've successfully made edits, you need to run `npm run build` to create a new build with your edited changes. After pushing those changes, simply take the build folder that is generated after it is done and move that over to the server.
