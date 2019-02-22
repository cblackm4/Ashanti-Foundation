
// Menu JS to close menu after clicking a link
var menu = document.getElementById("nav");
var cbox = document.getElementById("toggle");

menu.addEventListener('click', menuClick);

function menuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    cbox.checked = false;
  }
}
