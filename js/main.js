// SipleSuite — menu movil y formulario de contacto

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

// Sin servidor: el formulario prepara un correo en el programa de correo del
// visitante. Cuando la web este publicada se puede cambiar por un servicio de
// formularios (Formspree, Netlify Forms...).
const CORREO = "siplecost@gmail.com";
const formulario = document.querySelector("#formulario-contacto");
if (formulario) {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = new FormData(formulario);
    const asunto = `Solicitud de demo - ${datos.get("empresa") || datos.get("nombre")}`;
    const cuerpo = [
      `Nombre: ${datos.get("nombre")}`,
      `Empresa: ${datos.get("empresa") || "-"}`,
      `Email: ${datos.get("email")}`,
      "",
      datos.get("mensaje") || "",
    ].join("\n");
    window.location.href =
      `mailto:${CORREO}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  });
}

document.querySelectorAll("[data-anio]").forEach((el) => (el.textContent = new Date().getFullYear()));
