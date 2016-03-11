(function ($) {
  'use strict';

  var
    speedOfAnimation = 400,
    $window,
    $nav;

  function isOnTop() {
    var scrollTop = $window.scrollTop();

    return scrollTop === 0;
  }

  function hideNavigation() {
    var animationConfig = {
      opacity: 0.2
    };

    if (!isOnTop()) {
      $nav
        .stop()
        .animate(
          animationConfig,
          speedOfAnimation
        );
    }
  }

  function showNavigation() {
    var animationConfig = {
      opacity: 1
    };

    $nav
      .stop()
      .animate(
        animationConfig,
        speedOfAnimation
      );
  }

  function toggleNavigation() {
    if (!isOnTop()) {
      hideNavigation();
    }

    else {
      showNavigation();
    }
  }

  $(function () {
    $nav = $('#nav');
    $window = $(window);

    $window
      .scroll(toggleNavigation);

    $nav
      .hover(
        showNavigation,
        hideNavigation
      );
  });
}(jQuery));
