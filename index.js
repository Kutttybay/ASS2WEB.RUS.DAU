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



// Функция для валидации формы
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    nameError.textContent = "";
    emailError.textContent = "";

    if (name.value.trim() === "") {
        nameError.textContent = "Поле 'Имя' обязательно для заполнения";
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Поле 'Email' обязательно для заполнения";
    } else if (!validateEmail(email.value)) {
        emailError.textContent = "Введите корректный email";
    }
}

// Функция для валидации email
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.getElementById("my-form").addEventListener("submit", validateForm);


// Таймер


let timerInterval;
let totalTime;

function startTimer() {
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;
    
    if (minutes === 0 && seconds === 0) {
        return;
    }

    totalTime = minutes * 60 + seconds;
    const timer = document.getElementById("timer");
    let remainingTime = totalTime;
    
    timerInterval = setInterval(function() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timerInterval);
            timer.textContent = "Время вышло!";
        }
    }, 1000);
}
document.getElementById("start-button").addEventListener("click", startTimer);



// Интерактив обьект 

const content = document.getElementById("content");
const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", function() {
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});


// Алерт

const showAlertButton = document.getElementById("show-alert");
showAlertButton.addEventListener("click", function() {
    alert("Маладес!!!!");
});