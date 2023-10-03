let taskInput = document.getElementById("task")
let addBtn = document.getElementById("add-task")
let taskList = document.getElementById("tasks")

addBtn.addEventListener("click", function(){
    let task = taskInput.value
    addTask(task)
    taskInput.value = ""
})

function addTask(task){
    var liEl = document.createElement("li")
    liEl.innerHTML = task
    taskList.appendChild(liEl)
}