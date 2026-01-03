let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let list = document.getElementById("taskList");

showTasks();

function showTasks() {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task.text;
        if (task.done) li.classList.add("done");

        li.onclick = () => toggleTask(index);

        let btn = document.createElement("button");
        btn.textContent = "Sil";
        btn.onclick = (e) => {
            e.stopPropagation();
            deleteTask(index);
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addTask() {
    let text = document.getElementById("task").value;
    if (text === "") return;

    tasks.push({ text: text, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("task").value = "";
    showTasks();
}

function toggleTask(i) {
    tasks[i].done = !tasks[i].done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

function deleteTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}
