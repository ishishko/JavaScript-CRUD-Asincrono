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

function eliminarCliente(id) {
  console.log("eliminar a " + id);
  return fetch(`${url}/${id}`, {
    method: "DELETE",
  });
}

function detalleCliente(id) {
  return fetch(url + `/${id}`).then((respuesta) => respuesta.json());
}

function actualizarCliente(nombre, email, id) {
  return fetch(url + `/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ nombre, email }),
  }).then((respuesta) => respuesta);
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  idCliente,
  detalleCliente,
  actualizarCliente,
};

function idCliente() {
  clientServices.listaClientes().then((resultado) => {
    resultado.forEach(() => {
      id++;
    });
  });
}
