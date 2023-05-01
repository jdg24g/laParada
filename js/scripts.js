window.addEventListener("DOMContentLoaded", (event) => {
  // Función para reducir el tamaño de la barra de navegación
  var minimiza = function () {
    const colapzar = document.body.querySelector("#mainNav");
    if (!colapzar) {
      return;
    }
    if (window.scrollY === 0) {
      colapzar.classList.remove("navbar-shrink");
    } else {
      colapzar.classList.add("navbar-shrink");
    }
  };

  // Reducir el tamaño de la barra de navegación
  minimiza();

  // Reducir el tamaño de la barra de navegación cuando se desplaza la página
  document.addEventListener("scroll", minimiza);

  // Activate Bootstrap scrollspy on the main nav element
  const navegacion = document.body.querySelector("#mainNav");
  if (navegacion) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Colapsar la barra de navegación responsive cuando el botón de alternancia (toggler) está visible
  const hamburguesa = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(hamburguesa).display !== "none") {
        hamburguesa.click();
      }
    });
  });

  //Ver dato ingresado en el input y comparar con el json y si ambos coincides crear un div
});
const selectElement = document.querySelector("#inputGroupSelect01");
const miTabla = document.getElementById("tablaHorario");
selectElement.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  if (selectedOption != "0") {
    console.log(selectedOption);
    busqueda(selectedOption);
    miTabla.style.display = "block";
  } else {
    console.log(selectedOption);

    console.log("No hay nada");
    miTabla.style.display = "none";
  }
});
function busqueda(selectedOption) {
  fetch("../assets/data/horarios.json")
    .then((response) => response.json())
    .then((data) => {
      hours = data;
      console.log(hours[selectedOption]);
      miTabla.innerHTML = `<div class="container-fluid bg-light">${selectedOption}</div>`;
      for (i of hours[selectedOption]){
        console.log(i["Destino"],i["HORA"]);
        miTabla.innerHTML += `<div class="container-fluid bg-light">Destino: ${i["Destino"]} Hora:  ${i["HORA"]}</div>`;}}
      
    )
    .catch((error) => {
      console.log("Error:", error);
    });
}
