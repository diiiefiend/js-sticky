// TO USE:
// in your document, define #sticky and #sticky-trigger (and possibly #sticky-cont)
// to change trigger from top of #sticky to bottom of #sticky, use #sticky-bottom instead of #sticky
// define a container div #sticky-cont if #sticky isn't a position: fixed, position: absolute,
//  or floating element

// define the event on which to look for sticky elements. default is document ready
var jsStickyEventTrigger = "ready";

function moveScroller(trigger) {
  var move, scrollPos;

  var triggerPos = $("#sticky-trigger").offset().top;
  // may need these if your element is in a position: relative container
  var relTriggerPos = $("#sticky-trigger").position().top;
  var triggerPosDiff = triggerPos - relTriggerPos;

  var stickyEl = (trigger === "top") ? $("#sticky") : $("#sticky-bottom");

  // total = with margins
  var elTotalWidth = stickyEl.outerWidth(true);
  var elTotalHeight = stickyEl.outerHeight(true);
  // just the width of the inner content (no padding/border/margins)
  var elInnerWidth = stickyEl.css("width");

  var elLeftPos = stickyEl.offset().left - parseInt(stickyEl.css("margin-left"));

  if (trigger === "top"){

    move = function() {
      scrollPos = $(window).scrollTop();
      if (scrollPos > triggerPos) {
        // sticky it
        stickyEl.css({
            position: "fixed",
            top: "0",             // change as needed
            left: elLeftPos,
            width: elInnerWidth,
            zIndex: 100,
            // add any additional properties as needed
        });

        // need to create a "placeholder" for the element in the DOM if it
        // used to be position: static or position: relative
        if(document.getElementById("sticky-cont") !== null){
          $("#sticky-cont").css({
            width: elTotalWidth,
            height: elTotalHeight
          });
        }

      } else {
        // unsticky it
        stickyEl.css({
            position: "",
            top: "",
            left: "",
            width: "",
            zIndex: "",
            // add any additional properties as needed
        });
      }
    };
  } else if (trigger === "bottom"){
    var initialScrollPos;
    var stickied = false;

    move = function() {
      scrollPos = $(window).scrollTop();
      // pt of interest is the bottom of the element
      var benchmarkPos = stickyEl.offset().top + elTotalHeight;

      // if scrolling up, check to see if unstuck
      if ( initialScrollPos && (scrollPos < initialScrollPos)){
        // unsticky it
        stickyEl.css({
            position: "",
            top: "",
            left: "",
            width: "",
            // add any additional properties as needed
        });
        stickied = false;
        initialScrollPos = undefined;
      }

      // otherwise, if stickied, don't bother checking the rest
      if (stickied === true){
        return;
      }

      if (benchmarkPos > triggerPos) {
        // sticky it!
        // keep track of initial scroll place so can get scroll difference
        initialScrollPos = (initialScrollPos) ? initialScrollPos : scrollPos;
        stickied = true;
        stickyEl.css({
            position: "absolute",
            top: triggerPos - elTotalHeight - triggerPosDiff,
            left: elLeftPos,
            width: elInnerWidth,
            // add any additional properties as needed
        });
      }
    };
  }

  $(window).scroll(move);
  move();
}

// on event trigger, look for sticky elements
$(document).on(jsStickyEventTrigger, function() {
  if(document.getElementById("sticky") !== null){
    moveScroller("top");
  }

  if(document.getElementById("sticky-bottom") !== null){
    moveScroller("bottom");
  }
});
