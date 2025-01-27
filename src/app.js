/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generarExcusa() {
    const excusa1 = document.getElementById("excusa1").value;
    const excusa2 = document.getElementById("excusa2").value;
    const excusa3 = document.getElementById("excusa3").value;
    const excusa4 = document.getElementById("excusa4").value;
    const excusa5 = document.getElementById("excusa5").value;

    const excusas = [excusa1, excusa2, excusa3, excusa4, excusa5];

    const excusaAleatoria = excusas[Math.floor(Math.random() * excusas.length)];

    document.getElementById("excusaGenerada").textContent = excusaAleatoria;
  }

  document
    .getElementById("excusaForm")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      generarExcusa();
    });
};
