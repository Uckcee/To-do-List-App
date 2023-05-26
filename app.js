const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let clear = document.createElement("clear");
    clear.innerHTML = "\u00d7";
    li.appendChild(clear);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (a) {
    if (a.target.tagName === "LI") {
      a.target.classList.toggle("checked");
      saveData();
    } else if (a.target.tagName === "CLEAR") {
      a.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
