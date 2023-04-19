const inputTask = document.getElementById("inputTask");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function() {
  if (inputTask.value === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = inputTask.value;
  taskList.appendChild(li);
  inputTask.value = "";
});
