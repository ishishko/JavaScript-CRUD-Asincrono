export let id = 1;

const url = "http://localhost:3000/perfil";

function listaClientes() {
  return fetch(url).then((respuesta) => respuesta.json());
}

function crearCliente(nombre, email) {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email, id }),
  });
}

export const clientServices = {
  listaClientes,
  crearCliente,
  idCliente,
};

function idCliente() {
  clientServices.listaClientes().then((resultado) => {
    resultado.forEach(() => {
      id++;
    });
  });
}
