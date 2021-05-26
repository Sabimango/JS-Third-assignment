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

/// googla javascript submit form ///
//gör en ny klass hidden,  toggle hidden element 