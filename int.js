document.addEventListener("DOMContentLoaded", () => {
  const columns = document.querySelectorAll(".column");

  // Create a new task card
  function createTaskCard(title, description) {
    const card = document.createElement("div");
    card.classList.add("task-card");
    card.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>`;
    return card;
  }

  // Add a new task to a column
  function addTaskToColumn(column, title, description) {
    const taskCard = createTaskCard(title, description);
    column.appendChild(taskCard);
  }

  // Enable drag-and-drop functionality
  columns.forEach((column) => {
    column.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
      e.preventDefault();
      const taskId = e.dataTransfer.getData("text/plain");
      const taskCard = document.getElementById(taskId);
      column.appendChild(taskCard);
    });
  });

  // Initialize draggable tasks
  const taskCards = document.querySelectorAll(".task-card");
  taskCards.forEach((card) => {
    card.setAttribute("draggable", "true");
    card.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", card.id);
    });
  });

  // Example usage: Adding a task
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", () => {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    if (title && description) {
      addTaskToColumn(columns[0], title, description);
    }
  });
});
