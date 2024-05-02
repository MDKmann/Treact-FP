Example
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

