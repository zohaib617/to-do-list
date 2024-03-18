function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();
    if (taskText == "") {
        alert("Please Enter The Task");
    }
    else {
        (taskText !== "");
        var li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
