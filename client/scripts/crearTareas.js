const onSubmit = async (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  console.log(form);
  const nombre = form.name.value;
  const descripcion = form.description.value;
  const nuevaTarea = {
    name: nombre,
    description: descripcion,
  };
  const respuesta = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevaTarea),
  });
  const tareas = await respuesta.json();
  location.replace("/client/index.html");
  return tareas;
};

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);
