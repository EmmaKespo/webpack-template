import { addTask } from "./taskActions";

export function initDomEvents() {
  console.log("initDomEvents running");
  const btn = document.getElementById("addTask");
  console.log("buttton", btn);
  btn.addEventListener("click", () => {
    console.log("button clicked");

    const title = document.getElementById("title").value;
    const desc = document.getElementById("description").value;
    const due = document.getElementById("due-date").value;
    addTask(title, desc, due);
  });
  if (!title || !desc || !due) {
    alert("Please fill in all fields");
    return;
  }
}
