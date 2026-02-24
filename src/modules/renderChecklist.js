import { formatDate } from "../utils/dateformat";

export function renderChecklist(tasks) {
  const container = document.querySelector(".checklist");
  container.innerHTML = "";
  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <p>${formatDate(task.dueDate)}</p>
    
    `;
    container.appendChild(div);
  });
}
