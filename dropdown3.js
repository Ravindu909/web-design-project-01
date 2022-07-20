/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
  document.getElementById("footer1").style.paddingTop = "200px";
   
}

function myFunction7() {
  document.getElementById("footer1").style.paddingTop = "0";
  document.getElementById("myDropdown3").classList.toggle("show");
}

