// min.js

// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function() {
  // Get the crop form element
  var cropForm = document.getElementById("crop-form");

  // Attach event listener to the form submission
  cropForm.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input values
    var nitrogen = parseInt(document.getElementsByName("nitrogen")[0].value);
    var phosphorous = parseInt(document.getElementsByName("phosphorous")[0].value);
    var potassium = parseInt(document.getElementsByName("potassium")[0].value);
    var temperature = parseInt(document.getElementsByName("temperature")[0].value);
    var humidity = parseInt(document.getElementsByName("humidity")[0].value);
    var rainfall = parseInt(document.getElementsByName("rainfall")[0].value);
    var pH = parseInt(document.getElementsByName("ph value")[0].value);

    // Validate the input values
    if ( nitrogen > 140) {
      // Display an error message
      alert("Input values should not be less than 3.");
    } else {
      // Submit the form
      cropForm.submit();
    }
  });
});
