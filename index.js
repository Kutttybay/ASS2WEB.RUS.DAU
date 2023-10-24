// Создаем массив для хранения задач
let tasks = [];

// Функция для добавления новой задачи
function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() !== "") {
        tasks.push({ text: taskText, completed: false });
        updateTaskList();
        document.getElementById("new-task").value = "";
    }
}

// Функция для обновления списка задач
function updateTaskList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}> ${task.text} <button onclick="deleteTask(${index})">Удалить</button>`;
        taskList.appendChild(listItem);
    });
}

// Функция для удаления задачи
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Функция для отметки задачи как выполненной
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}




// Форма
function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Пожалуйста, заполните все обязательные поля.");
        return false;
    }
    return true;
}



// Таймер

let timerInterval;
let countdown = document.getElementById("countdown");

function startTimer() {
    const duration = parseInt(document.getElementById("duration").value);
    if (!isNaN(duration) && duration > 0) {
        let remainingTime = duration;
        countdown.style.display = "block";

        timerInterval = setInterval(function () {
            countdown.innerText = remainingTime + " сек.";
            remainingTime -= 1;

            if (remainingTime < 0) {
                clearInterval(timerInterval);
                countdown.style.display = "none";
                alert("Таймер завершился!");
            }
        }, 1000);
    }
}



// Интерактив обьект 

let textHidden = true;
const hiddenText = document.getElementById("hidden-text");

function toggleText() {
    textHidden = !textHidden;
    hiddenText.style.display = textHidden ? "none" : "block";
}


// Алерт

function showAlert() {
    alert("Маладец, ты сделал все !!!");
}