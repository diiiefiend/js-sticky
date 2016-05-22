# js-sticky
## Ariel Hou, May 2016
### Dependencies
Only jQuery, post version 1.7

### Usage
Define a #sticky element (or #sticky-bottom if you want it benchmarked by the bottom of the element instead of the top), a #sticky-trigger element (if it's just a position in the page, can just make an empty div like `<div id="sticky-trigger"></div>`), and, if your #sticky element is `position: relative` or `static`, wrap #sticky in a a #sticky-cont div.

For example:
```
page stuff blah blah
<div id="sticky-trigger"></div>

<div id="sticky-cont">
  <div id="sticky">
    sticky element here!
  </div>
</div>
```

The script is pretty thoroughly commented as well.

### Examples
* an example of a sticky element anchored to the top of the page: [http://view.arielity.net/about] here
* an example of a sticky element anchored by the bottom:
[http://view.arielity.net/2016/05/every-serious-contemporary-novel-set-in-nyc/] here (scroll to the comments section)
