// SipleSuite — menu movil

const botonMenu = document.querySelector(".boton-menu");
const menu = document.querySelector(".menu");
if (botonMenu && menu) {
  botonMenu.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("abierto");
      botonMenu.setAttribute("aria-expanded", "false");
    })
  );
}


document.querySelectorAll("[data-anio]").forEach((el) => (el.textContent = new Date().getFullYear()));
