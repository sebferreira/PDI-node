export const EditarTarea = (e) => {
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const form = document.getElementById("form");
  const id = e.target.parentElement.children[0].innerHTML;
  name.value = e.target.parentElement.children[1].innerHTML;
  description.value = e.target.parentElement.children[2].innerHTML;
  form.addEventListener("submit", async (event) => {
    const data = {
      name: name.value,
      description: description.value,
      /* complete: complete.checked, */
    };
    console.log(data);
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
  });
};
