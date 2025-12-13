document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");
  const emptyImage = document.querySelector(".empty-image");
  const todoContainer = document.querySelector(".todo-container");
  const form = document.querySelector(".input-area");
  const progressBar = document.getElementById("progress");
  const progressNumbers = document.getElementById("numbers");

  if (addTaskBtn) addTaskBtn.type = "button";

  const toggleEmptyState = () => {
    const empty = taskList.children.length === 0;
    emptyImage.style.display = empty ? "block" : "none";
    todoContainer.style.width = empty ? "50%" : "100%";
  };

  const updateProgress = (checkCompletion = true) => {
    const totalTasks = taskList.children.length;
    const completedTasks =
      taskList.querySelectorAll(".checkbox:checked").length;

    progressBar.style.width = totalTasks
      ? `${(completedTasks / totalTasks) * 100}%`
      : "0%";
    progressNumbers.textContent = `${completedTasks} / ${totalTasks}`;

    if (checkCompletion && totalTasks > 0 && completedTasks === totalTasks) {
      confetti_effect();
    }
  };

  const saveTastToLocalStorage = () => {
    const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => ({
      text: li.querySelector("span").textContent,
      completed: li.querySelector(".checkbox").checked,
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const loadTasksFronLocalStorage = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(({ text, completed }) =>
      addTask(text, completed, false)
    );
    toggleEmptyState();
    updateProgress();
    console.log("localStorage");
  };

  const createTaskElement = (taskText, completed) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    if (completed) checkbox.checked = true;

    const span = document.createElement("span");
    span.textContent = taskText;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.setAttribute("aria-label", "Edit task");
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.setAttribute("aria-label", "Delete task");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonsDiv);

    if (completed) {
      li.classList.add("completed");
      editBtn.disabled = true;
      editBtn.style.opacity = "0.5";
      editBtn.style.pointerEvents = "none";
    }

    checkbox.addEventListener("change", () => {
      const isChecked = checkbox.checked;
      li.classList.toggle("completed", isChecked);
      editBtn.disabled = isChecked;
      editBtn.style.opacity = isChecked ? "0.5" : "1";
      editBtn.style.pointerEvents = isChecked ? "none" : "auto";
      updateProgress();
      saveTastToLocalStorage();
    });

    editBtn.addEventListener("click", () => {
      if (!checkbox.checked) {
        taskInput.value = span.textContent;
        taskInput.focus();
        li.remove();
        toggleEmptyState();
        updateProgress(false);
        saveTastToLocalStorage();
      }
    });

    deleteBtn.addEventListener("click", () => {
      li.remove();
      toggleEmptyState();
      updateProgress();
      saveTastToLocalStorage();
    });

    return li;
  };

  const addTask = (text = "", completed = false, checkCompletion = true) => {
    const taskText = text || taskInput.value.trim();
    if (!taskText) return;

    const li = createTaskElement(taskText, completed);
    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
    toggleEmptyState();
    updateProgress();
    saveTastToLocalStorage();
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
  });

  addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
  });

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  });

  toggleEmptyState();
  updateProgress();
  loadTasksFronLocalStorage();
});

const confetti_effect = () => {
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
  console.log("executed");
};
