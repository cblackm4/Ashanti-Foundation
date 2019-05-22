// Form Validation using JQuery Validation Plugin
$(document).ready(function () {
  $("form[name='contact']").validate({
    rules: {
      fname: "required",
      lname: "required",
      phone: {
        required: true
      },
      comment: {
        required: true,
        maxlength: 250
      }
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      phone: {
        required: "Phone number is required",
      },
      comment: {
        required: "Please leave a reason for contact",
        maxlength: "Too many characters. Please limit your comment to 250 characters"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
