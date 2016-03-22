(function($) {
  "use strict";

  $(function() {
    var
      $form = $(".js-form"),
      $field = $(".js-password"),

      _template = [
        "<a href='#' class='js-password-toggle form__toggle'>",
          "<i class='fa  fa-eye-slash fa-eye form__toggle-button'>",
        "</a>"
      ].join(""),

      $submit,
      $toggle;

    $field.after( _template );

    function toggleFieldType (e) {
      var
        eyeSlash = "fa-eye-slash",
        eye = "fa-eye",
        $target;

      if (e) {
        e.preventDefault();
        $target = $(e.target);
      }

      if ($field.attr("type") === "password") {
        $field.attr("type","text");
        $target
          .removeClass(eyeSlash)
          .addClass(eye);
      }

      else {
        $field.attr("type","password");
        $target
          .removeClass(eye)
          .addClass(eyeSlash);
      }
    }

    function setToRegularPasswordElement (e) {
      if (e) {
        e.preventDefault();
      }

      $field.attr("type","password");
      $submit.submit();
    }

    $toggle = $(".js-password-toggle")
      .on("click", toggleFieldType);

    $submit = $(".js-submit")
      .on("click", setToRegularPasswordElement);

    // Stop the form submitting so that we can test it (remove this in a real form):
    $form.submit(function stopSubmittingForm (e) {
      if (e) {
        e.preventDefault();
      }

      console.log( "Form submitted" );
    });
  });
})(jQuery);