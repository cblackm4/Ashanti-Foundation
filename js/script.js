$(document).ready(function () {

  // Click function to close mobile hamburger menu after clicking link
  $("#nav-wrap a").click(function(){
     $("#toggle").prop("checked", false);
  });

  // Toggle hamburger icon with an X while menu is open
  $('#toggle').click(function(){
    if ($("#toggle").prop("checked") == true) {
      $(".hamburger").html("X");
    } else {
      $(".hamburger").html("&#9776");
    }
  });

  // Animate images
  $(".card-image").hover(function(){
    $(this).addClass('hover-image');
  }, function() {
    $(this).removeClass("hover-image");
  });
});
