// Preguntas y respuestas

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Cambiar icono

    const icon = faq.querySelector(".faq_icon i");

    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

//Eliminar fotos del formulario

const photosInput = document.querySelector("input[name='File[]']");
const deletePhotosButton = document.querySelector("#delete-photos");


//Mostrar y ocultar el nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn"); 
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
menu.style.display = "flex";
closeBtn.style.display = "inline-block";
menuBtn.style.display = "none";
})

//Cerrar Barra de navegacion

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display="none";
  menuBtn.style.display = "inline-block";
}
  closeBtn.addEventListener('click', closeNav)