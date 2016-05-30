var valvars = {
    addReview: $('#addReview')
};

valvars.addReview.submit(function (e) {
  valvars.aADanger = $('.alert.alert-danger');
  valvars.aADanger.hide();
    if (!$('input#name').val() || !$('select#rating').val() || !$('textarea#review').val()) {
      if (valvars.aADanger.length) {
        valvars.aADanger.show();
      } else {
        valvars.addReview.prepend('<div role="alert" class="alert alert-danger">Please fill out all three fields, thank you</div>');
      }
      return false;
  }
});

// $('#addReview').submit(function (e) {
//   $('.alert.alert-danger').hide();
//   if (!$('input#name').val() || !$('select#rating').val() || !$('textarea#review').val()) {
//     if ($('.alert.alert-danger').length) {
//       $('.alert.alert-danger').show();
//     } else {
//       $(this).prepend('<div role="alert" class="alert alert-danger">Please fill out all three fields, thank you</div>');
//     }
//     return false;
//   }
// });