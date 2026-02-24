import { getTasks, saveTasks } from "./storage";
import { createTask } from "./taskModel";
import { renderHome } from "./renderHome";
import { renderChecklist } from "./renderChecklist";

export function addTask(title, desc, dueDate) {
  const tasks = getTasks();
  tasks.push(createTask(title, desc, dueDate));
  saveTasks(tasks);
  renderAll();
}
export function deleteTask(id) {
  const task = getTasks().filter((t) => t.id !== id);
  saveTasks(task);
  renderAll();
}
export function renderAll() {
  const tasks = getTasks();
  renderHome(tasks);
  renderChecklist(tasks);
}
