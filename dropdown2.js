/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  document.getElementById("drop3").style.paddingTop = "200px";
   
}

function myFunction6() {
  document.getElementById("drop3").style.paddingTop = "0";
  document.getElementById("myDropdown2").classList.toggle("show");
}
