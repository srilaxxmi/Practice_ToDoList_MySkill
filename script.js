var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add button clicked!");
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var toDoItems = document.createElement(li);
    var toDoText = document.createTextNode(itemText);
    toDoItems.appendChild(toDoText);

    if (completed); {
        toDoItems.classList.add("completed");
    }
    toDoList.appendChild(toDoItems);
    toDoItems.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
    var itemText = toDoEntryBox.Value;
    newToDoItem(itemText, false);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);
//This will alert "something to store"

var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {

        var toDoInfo = {
            "task": toDoEntryBox.innerText,
            "completed": toDo.classList.contains("completed")
        };
        
        toDos.push(toDoInfo);

    }
    localStorage.setItem("toDos", JSON.stringify(toDos));;
}

function loadList() {
    if (localStorage.getItem("toDos") !=null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
loadList();