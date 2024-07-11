/**
 * Obtiene las tareas de la base de datos
 * @returns {Array[Object]} - Un listado de tareas
 */
import {BorrarTarea} from "./borrarTareas.js";
import {EditarTarea} from "./editarTareas.js";
import {verUno} from "./mostrarUna.js";
import {isCompleted} from "./completed.js";

const obtenerTareas = async () => {
  const respuesta = await fetch("http://localhost:3000/tasks", {
    method: "GET",
  });
  const tareas = await respuesta.json();

  return tareas;
};

/**
 * Completa la tabla con las tareas obtenidas
 */
const renderizarTareas = async () => {
  // Su implementación
  const tareas = await obtenerTareas();
  console.log(tareas);
  const tabla = document.querySelector("#tbody-tareas");

  tareas.forEach((tarea) => {
    const fila = document.createElement("tr");
    const editar = document.createElement("button");
    const borrar = document.createElement("button");
    const ver = document.createElement("button");
    const check = document.createElement("input");
    const contenedorCheck = document.createElement("th");
    check.type = "checkbox";
    check.checked = tarea.completed;
    check.classList.add("completed");
    check.addEventListener("change", isCompleted);
    contenedorCheck.append(check);

    ver.innerText = "Ver";
    ver.classList.add("btn", "btn-info");
    ver.setAttribute("data-id", tarea.id);
    ver.addEventListener("click", verUno);

    borrar.innerText = "borrar";
    borrar.classList.add("btn", "btn-delete");
    borrar.setAttribute("data-id", tarea.id);
    borrar.addEventListener("click", BorrarTarea);

    editar.innerText = "Editar";
    editar.classList.add("btn", "btn-edit");
    editar.setAttribute("data-id", tarea.id);
    editar.addEventListener("click", EditarTarea);

    const tareaFila = `
    <th>${tarea.id}</th>
    <th>${tarea.name}</th>
    <th>${tarea.description}</th>`;
    fila.innerHTML = tareaFila;
    fila.append(contenedorCheck);
    tabla.append(fila);
    fila.append(editar, borrar, ver);
  });
};
renderizarTareas();
