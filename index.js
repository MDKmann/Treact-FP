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

/* <!-- OPENS MENU ON CLICK AND ADDS POSITION FIXED - REMOVES ON CLICK AFTER --> */
function openMenu() {
  document.querySelector('.mobile__nav--container').classList.add("menu--open");
  document.querySelector('.nav__container').style.position = "fixed";
}

function closeMenu() {
  document.querySelector('.mobile__nav--container').classList.remove("menu--open");
  document.querySelector('.nav__container').style.removeProperty("position");
}