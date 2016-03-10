$(function() {
  var
    $inputPassword = $('<input/>', {
      type: 'password'
    }),

    $inputText = $('<input/>', {
      type: 'text'
    });

  $('#showcharacters')
    .click(function() {
      var value = $('#password').prop('value');

      if ($(this).prop('checked')) {
        $inputText
          .prop({
            value: value,
            id: 'password'
          });

        $('#password')
          .replaceWith($inputText);
      }

      else {
        $inputPassword
          .prop({
            value: value,
            id: 'password'
          });

        $('#password')
          .replaceWith($inputPassword);
      }
    });
});
