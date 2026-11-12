const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const taskListContainer = document.getElementById("task-list");
const errorDisplay = document.getElementById("error-message");
const toggleBtn = document.getElementById("theme-toggle-btn");

function handleFormSubmit(event) {
  event.preventDefault();

  const taskName = taskNameInput.value.trim();
  const priority = taskPrioritySelect.value;

  errorDisplay.textContent = "";

  if (taskName === "") {
    errorDisplay.textContent = "Please enter a task name.";
    return;
  }

  const li = document.createElement("li");
  li.className = `task-item priority-${priority}`;
  li.textContent = `${taskName} - ${priority} Priority`;

  taskListContainer.appendChild(li);

  taskNameInput.value = "";
}

taskForm.addEventListener("submit", handleFormSubmit);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
