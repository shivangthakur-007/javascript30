const input = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addTask() {
  if (input.value === "") {
    alert("You have to write something");
  } else {
    let createli = document.createElement("li");
    createli.innerHTML = input.value;
    list.appendChild(createli);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    createli.appendChild(span);
  }
  input.value = "";
  savedata();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", list.innerHTML);
}

function showtask() {
  list.innerHTML = localStorage.getItem("data");
}
showtask();
