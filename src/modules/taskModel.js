export function createTask(title, description, dueDate) {
  return {
    id: Date.now().toString(),
    title,
    description,
    dueDate,
    createdAt: new Date().toString(),
  };
}
