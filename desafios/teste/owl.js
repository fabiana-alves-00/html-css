document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(removeButton);
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
});
