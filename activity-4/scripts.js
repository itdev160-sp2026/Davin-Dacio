console.log("Activity 4: Interactive To-Do List (Part 1)")

//Globals
let tasks = [];
let taskIdCounter = 1;

//Part A 
console.log("Element Creation Demonstations");

const demoDiv = document.createElement("div");
const demoSpan = document.createElement("span");
const demoButton = document.createElement("button");

console.log("Created div element:", demoDiv);
console.log("Created span element:", demoSpan);
console.log("Created button element:", demoButton);

demoDiv.textContent = "This is a demo div";
demoDiv.id = "demo-div";
demoSpan.innerHTML = "<strong>Demo span with HTML</strong>";
demoButton.textContent = "Demo Button";

console.log("Div after setting properties:", demoDiv);
console.log("Div textContent:", demoDiv.textContent);
console.log("Div id:", demoDiv.id);

//Part B
console.log("Element Styling Demonstations");

// Direct Modifications
demoDiv.style.backgroundColor = "lightblue"
demoDiv.style.padding = "10px";
demoDiv.style.border = "1px solid blue";

console.log("Applied direct styles to demo div");

//Class list Demos
demoDiv.classList.add("demo-class");
demoDiv.classList.add("highlighted");
console.log("Added classes. ClassList:", demoDiv.classList);
console.log("Has 'demo-class':", demoDiv.classList.contains("demo-class"));

demoDiv.classList.remove("highlighted");
console.log("After removing 'highlighted':", demoDiv.classList);

demoDiv.classList.toggle("active");
console.log("After toggling 'active':", demoDiv.classList);

demoSpan.style.marginTop = "10px";
demoSpan.style.display = "block";
demoButton.style.marginTop = "10px";
demoButton.style.display = "block";


//Part C
console.log("\n=== ELEMENT APPENDING DEMONSTRATIONS ===");

const outputDiv = document.getElementById("output");
console.log("Output div before appending:", outputDiv.children.length, "children");

//Append Demo Elements
outputDiv.appendChild(demoDiv);
outputDiv.appendChild(demoSpan);
outputDiv.appendChild(demoButton);

console.log("Output div after appending:", outputDiv.children.length, "children");


//Part D
console.log("\nTo-Do List Functionality");
function addTask() {
   const taskInput = document.getElementById("taskInput");
   const taskText = taskInput.value.trim();

   console.log(`Attempting to add task: "${taskText}"`);

   //Validate input
   if (taskText === ""){
    alert("Please enter a task");
    console.log("Task addition failed: empty input");
    return;
   }

   if(taskText.length > 100) {
    alert("Task is too long! Please keep it under 100 characters.");
    console.log("Task addition failed: Too long");
    return;
   }

   //create task object
   const task = {
    id: taskIdCounter++,
    text: taskText,
    completed: false,
    createdAt: new Date()
   };

   //add to task array
   tasks.push(task);
   console.log("Task added to array:", task);

   //create list item
   const listItem = createTaskElement(task);

   // Append to list
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(listItem);

   //clear input
   taskInput.value = "";

   //update stats
   updateTaskStats();

   console.log(`Task "${taskText}" added successfully. Total tasks:${tasks.length}`);
}

function createTaskElement(task){
 //create list item
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.setAttribute("data-task-id", task.id);

    //create task text span
    const taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text"
    taskTextSpan.textContent = task.text;

    //Create status span
    const statusSpan = document.createElement("span");
    statusSpan.className = "task-status";

    //set inital state
    if(task.completed) {
        listItem.classList.add("done");
        statusSpan.textContent = "\u2713 Done";
        statusSpan.className += " status-done";
    } else {
        statusSpan.textContent = "\u23f3 Pending";
        statusSpan.className += " status-pending";
    }

    //Append spans to list item
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(statusSpan);

    //Add click event for toggling completion
    listItem.onclick = function() {
        toggleTaskCompletion(task.id);
    };

    console.log("Created task element: ", listItem);
    return listItem;
}

//Part E Task State Mangement
function toggleTaskCompletion(taskId) {
    console.log(`Toggling complerion for task ID: ${taskId}`);

    // Find task in array
    const task = tasks.find(t => t.id === taskId); //this finds the task from the array
    if (!task) {
        console.error(`Task with ID ${taskId}`);
        return;
    }

    //Toggle completion status
    task.completed = !task.completed;
    console.log(`Task "${task.text}" is now ${task.completed ? 'completed' : 'pending'}`);

    //find and update DOM element
    const listItem = document.querySelector(`[data-task-id="${taskId}"]`);
    const statusSpan = listItem.querySelector(".task-status");

    if (task.completed) {
        listItem.classList.add("done");
        statusSpan.textContent = "\u2713 Done";
        statusSpan.className = "task-status status-done";
    } else {
        listItem.classList.remove("done");
        statusSpan.textContent = "\u23F3 Pending";
        statusSpan.className = "task-status status-pending";
    }

    //update statistics
    updateTaskStats();
}


function updateTaskStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    document.getElementById("taskCount").textContent = `(${totalTasks} task${totalTasks !== 1 ? 's' : ''})`;
    document.getElementById("totalTasks").textContent = `Total: ${totalTasks}`;
    document.getElementById("completedTasks").textContent = `Completed: ${completedTasks}`;
    document.getElementById("pendingTasks").textContent = `Pending: ${pendingTasks}`;

    console.log(`Stats updated - Total: ${totalTasks}, Compleated: ${completedTasks}, Pending: ${pendingTasks}`);

}

document.getElementById("taskInput").onkeydown = function(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

//Initialize Application
console.log("To-Do List application initialized successfully!");
console.log("Try adding some tasks and clicking them to mark as complete!");

//Display Initial Demo Content
const initialDemo = `
    <h3>DOM Manipulation Demonstrations</h3>
    <p>Element creation examples loaded above</p>
    <p>Styling and classList demonstrations complete</p>
    <p>Ready to create and manage to-do tasks!</p>
`;

setTimeout(() => {
    document.getElementById("output").innerHTML = initialDemo + document.getElementById("output").innerHTML;
}, 100);
