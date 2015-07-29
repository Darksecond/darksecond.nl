(function(){
  "use strict";

  var ready = function(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  var getScrollTop = function(){
    if(typeof pageYOffset != 'undefined') {
        return pageYOffset;
    } else {
        return document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop;
    }
  };

  var element;

  var detectScroll = function() {
    if(getScrollTop() > 0) {
      element.classList.add('is-detached');
    } else {
      element.classList.remove('is-detached');
    }
    window.requestAnimationFrame(detectScroll);
  };

  ready(function(){
    element = document.getElementsByClassName('nav')[0];
    detectScroll();
  });
})();
