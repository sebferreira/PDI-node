export const BorrarTarea = async (elemento) => {
  const id = elemento.srcElement.getAttribute("data-id");
  const padre = elemento.srcElement.parentNode;
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  padre.remove();
};
