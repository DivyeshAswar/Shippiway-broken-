var load;

function loadPage() {
    load = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader1").style.display = "none";
  document.getElementById("loader2").style.display = "none";
  document.getElementById("loader3").style.display = "none";
  document.getElementById("loader4").style.display = "none";
  document.getElementById("loader5").style.display = "none";
  document.getElementById("loader6").style.display = "none";
  document.getElementById("loader7").style.display = "none";
  document.getElementById("mainpage").style.display = "block";
}