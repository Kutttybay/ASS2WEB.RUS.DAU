
document.getElementById("myForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    let hasError = false;

    if (name === "") {
        hasError = true;
        document.getElementById("nameError").innerText = "Name is required";
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (email === "") {
        hasError = true;
        document.getElementById("emailError").innerText = "Email is required";
    } else {
        document.getElementById("emailError").innerText = "";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        hasError = true;
        document.getElementById("emailError").innerText = "Invalid email address";
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (hasError) {
        event.preventDefault(); // Prevent form submission if there are errors
    }
});

document.getElementById("startCountdown").addEventListener("click", function () {
    const countdownElement = document.getElementById("countdown");
    let countdownValue = parseInt(countdownElement.textContent);
    const interval = setInterval(function () {
        countdownValue--;
        countdownElement.textContent = countdownValue;
        if (countdownValue <= 0) {
            clearInterval(interval);
        }
    }, 1000);
});


// Initialize the popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})


document.getElementById("showHideButton").addEventListener("click", function() {
    const hiddenContent = document.getElementById("hiddenContent");
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
    } else {
        hiddenContent.style.display = "none";
    }
});

document.getElementById("toggleAccordion").addEventListener("click", function() {
    const accordionContent = document.getElementById("accordionContent");
    if (accordionContent.style.display === "none") {
        accordionContent.style.display = "block";
    } else {
        accordionContent.style.display = "none";
    }
});


document.getElementById("showAlert").addEventListener("click", function() {
    alert("Это оповещение о чем-то важном.");
});

document.getElementById("showPrompt").addEventListener("click", function() {
    const userInput = prompt("Пожалуйста, введите ваш комментарий:");
    if (userInput !== null) {
        alert("Вы ввели следующий комментарий: " + userInput);
    } else {
        alert("Вы ничего не ввели.");
    }
});

document.getElementById("showConfirm").addEventListener("click", function() {
    const userConfirmed = confirm("Вы уверены, что хотите удалить этот файл?");
    if (userConfirmed) {
        alert("Файл удален.");
    } else {
        alert("Удаление отменено.");
    }
});


// Initialize the popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl) 
})


document.getElementById("addTask").addEventListener("click", function () {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      taskInput.value = "";
  }
});