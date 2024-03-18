function addTask () {
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;
    const taskList = document.getElementById("taskList") as HTMLUListElement;

    const taskText = taskInput.value.trim();
    if (taskText ==""){
        alert("Please Enter The Task")
    }else{ 
    
    
    (taskText !=="") 
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value="";
    }

}