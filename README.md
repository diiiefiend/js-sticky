# js-sticky

Light javascript utility to "sticky" elements to the top or bottom of the viewport.

### Dependencies
* jQuery, post version 1.7

### Installation
`npm install js-sticky`
or just include the js file in your project.

Then in the file:
```html
<script src="js-sticky.js"></script>
```

### Usage
On your page, define these ids: 
* a `#sticky` or `#sticky-bottom` element (former is stickied to the top of the viewport, latter is stickied to the bottom of the viewport)
* a `#sticky-trigger` element (the point at which the sticky behavior should trigger--if it's just a position in the page, can just make an empty div like `<div id="sticky-trigger"></div>`) 
* if your `#sticky` element takes up space in the DOM (i.e. is `position: relative` or `static` and NOT floating), wrap `#sticky` in a `#sticky-cont` div

For example:
```html
page stuff blah blah
<div id="sticky-trigger"></div>

<div id="sticky-cont">
  <div id="sticky">
    sticky element here!
  </div>
</div>
```
Behavior: On scrolling past `sticky-trigger`, `sticky` div will be stuck. On scrolling back up past `sticky-trigger`, `sticky` will act as normal.

Nothing is needed to initialize the sticky behavior; the jQuery takes care of that. Default trigger is `document ready`, or you can overwrite with your own event in the script. The script is pretty thoroughly commented.

### Examples
* an example of a sticky element anchored to the top of the page: [here](http://view.arielity.net/about) (on left)
* an example of a sticky element anchored by the bottom: [here (scroll to the comments section)](http://view.arielity.net/2016/05/every-serious-contemporary-novel-set-in-nyc/) (on right)

### Current limitations (future to-dos)
* must manually define a `sticky-cont` container
* can only have 1 `sticky` and `sticky-bottom` element per page

### License
[MIT](http://www.opensource.org/licenses/mit-license.php)

### Reporting issues
Please report issues through Github, or feel free to open a PR with a fix. Thanks!