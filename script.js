const modal = document.getElementById("modal-content");
const btn = document.getElementById("modal-btn-id");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const nav = document.getElementById("nav-links");
const navbtn = document.getElementById("nav-button");

navbtn.onclick = function() {
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}