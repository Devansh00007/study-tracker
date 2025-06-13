let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  tasks.push({ text: taskText, completed: false });
  input.value = "";
  updateTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  updateTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  updateTasks();
}

function updateTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <button onclick="removeTask(${index})">X</button>
    `;
    list.appendChild(li);
  });

  updateProgress();
}

function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  progressBar.value = total === 0 ? 0 : (completed / total) * 100;
}
