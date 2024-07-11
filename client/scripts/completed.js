export const isCompleted = async (e) => {
  const id = e.target.parentElement.parentElement.children[0].innerHTML;
  const completed = e.target.checked;
  const response = await fetch(
    `http://localhost:3000/tasks/complete/${id}?completed=${completed}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
