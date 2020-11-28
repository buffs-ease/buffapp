var side_bar = document.getElementById("mySidebar");
var over_lay = document.getElementById("myOverlay");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

//nav bar template source
//https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_analytics&stacked=h
