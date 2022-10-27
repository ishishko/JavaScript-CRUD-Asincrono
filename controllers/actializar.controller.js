import { clientServices } from "../service/client-service.js";

const nombre = document.querySelector("[data-nombre]");
const email = document.querySelector("[data-email]");
const formulario = document.querySelector("[data-form]");
const url = new URL(window.location);
const id = url.searchParams.get("id");

async function obtenerInfo() {
  if (id === null) {
    window.location.href = "../screens/error.html";
  }

  try {
    const perfil = await clientServices.detalleCliente(id);
    if (perfil.nombre && perfil.email) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Error catch - ", error);
    window.location.href = "../screens/error.html";
  }
}

obtenerInfo();

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  clientServices.actualizarCliente(nombre.value, email.value, id).then(() => {
    window.location.href = "../screens/edicion_concluida.html";
  });
});
