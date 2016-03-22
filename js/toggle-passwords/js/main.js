(function($) {
  "use strict";

  $( function() {

    var $form = $(".js-form"),
      $submit = $(".js-submit"),
      $field = $(".js-password"),
      _template = "<a href='#' class='js-password-toggle form__toggle'><i class='fa  fa-eye-slash fa-eye form__toggle-button'></a>",
      $toggle;

    $field.after( _template );
    $toggle = $(".js-password-toggle");

    $toggle.on("click", function toggleFieldType (e) {
      var
        $target;

      if (e) {
        e.preventDefault();
        $target = $(e.target);
      }

      if ($field.attr("type") === "password") {
        $field.attr("type","text");
        $target
          .removeClass("fa-eye-slash")
          .addClass("fa-eye");
      }

      else {
        $field.attr("type","password");
        $target
          .removeClass("fa-eye")
          .addClass("fa-eye-slash");
      }

    });

    // Set the form field back to a regular password element
    $submit.on( "click", function setToRegularPasswordElement (e) {
      if (e) {
        e.preventDefault();
      }

      $field.attr("type","password");
    });

    // Stop the form submitting so that we can test it (remove this in a real form):
    $form.submit( function stopSubmittingForm (e) {
      if (e) {
        e.preventDefault();
      }

      console.log( "Form submitted" );
    });
  });
})(jQuery);