$(document).ready(function () {
  var displayResources = $('#winners'); // set this to the display-resources ID in index.html

  /* AJAX Call to RESTful Service */
  $.ajax({
    type: "GET",
    url: "data/scholarship-winners.json",
    success: function(result)
    {
      // Build output render
      var output="<table><thead><tr><th>Name</th><th>State</th><th>Award Received</th></thead><tbody>";
      // Add data to the output render
      // Create a for loop that will iterate over the result.RestResponse.result object and add <tr><td> element
      // Hint: You will want to display result.RestResponse.result[i].name, result.RestResponse.result[i].alpha2_code, and result.RestResponse.result[i].alpha3_code in your table

      for (var i in result) {
        output += "<tr><td>" + result[i].name +
        "</td><td>" + result[i].state +
        "</td><td>" + result[i].award +
        "</td></tr>";
      }
      output += "</tbody></table>";
      displayResources.append(output);

      // Add bootstrap class to the table for styling
      $("table").addClass("table");
    }
  });
});
