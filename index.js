function dropFunction() {
  var x = document.getElementById("dropDropdown");
  if (x.style.opacity === "0") {
    x.style.opacity = "1",
    x.style.margin = "0 0 120px 0"
  } else {
    x.style.opacity = "0",
    x.style.margin = "0 0 24px 0";
  }
}

// function openMenu() {
//     document.body.classList += " menu--open"
// }

// function closeMenu() {
//     document.body.classList.remove( 'menu--open')
// }
function openMenu() {
  document.querySelector('.mobile__nav--container').classList += " menu--open"
}

function closeMenu() {
  document.querySelector('.mobile__nav--container').classList.remove( 'menu--open')
}