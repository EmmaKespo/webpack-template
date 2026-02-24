import { formatDate } from "../utils/dateformat";
export function renderHome(tasks) {
  const container = document.querySelector(".my-task");
  container.innerHTML = "";

  tasks.forEach((task) => {
    const div = document.createElement("div");

    div.innerHTML = `
  <div>
    <h3>${task.title}</h3>
    <p>${formatDate(task.dueDate)}</p>
    <button data-delete="${task.id}">Delete</button>
    <button data-edit="${task.id}">Edit</button>
  </div>
  `;
    container.appendChild(div);
  });
  console.log("due date:", tasks.dueDate);
}
