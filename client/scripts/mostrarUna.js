export const verUno = (e) => {
  const modal = document.getElementById("Modal");
  const span = document.getElementsByClassName("close")[0];
  modal.firstElementChild.lastElementChild.children[0].innerHTML = `Titulo: <span> ${e.target.parentElement.children[1].innerHTML}</span>`;
  modal.firstElementChild.lastElementChild.children[1].innerHTML = `Descripcion: <span>${e.target.parentElement.children[2].innerHTML}</span> `;
  modal.firstElementChild.lastElementChild.children[2].innerHTML = `Está completado: <span>${
    e.target.parentElement.children[3].children[0].checked ? "Sí" : "No"
  }</span>`;

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };
};
