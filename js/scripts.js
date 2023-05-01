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
  const selectElement = document.querySelector("#inputGroupSelect01");
  const miImagen = document.getElementById("miImagen");
  const miTabla = document.getElementById("miTabla")
  selectElement.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    if (selectedOption != "0") {
      console.log(selectedOption);
      //recordar editar fotos para agregar imagenes
      miTabla.style.display = "table";
      miImagen.src = `/../assets/img/bus/${selectedOption}.png`;
    } else {
      console.log(selectedOption);
      //recordar editar fotos para agregar imagenes
      console.log("No hay nada");
      miTabla.style.display = "none";
      miImagen.src = "/../assets/img/ipad.png";
    }
  });
});
