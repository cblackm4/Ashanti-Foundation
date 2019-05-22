$(document).ready(function () {
  var displayResources = $('#donors');

  // Get Data
  $.ajax({
    type: "GET",
    url: "data/donators.json",
    success: function(result)
    {
      var output="<table><thead><tr><th>Name</th><th>Contribution</th><th>Date</th></thead><tbody>";

      for (var i in result) {
        output += "<tr><td>" + result[i].name +
        "</td><td>" + result[i].contribution +
        "</td><td>" + result[i].date +
        "</td></tr>";
      }
      output += "</tbody></table>";
      displayResources.append(output);

      $("table").addClass("table");
    }
  });
});
