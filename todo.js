
const inputtodo = document.querySelector("#inputtodo");
const buttonadd = document.querySelector("#buttonadd");
const list = document.querySelector("#list");
const message = document.querySelector("#message");
let tododata = [];

inputtodo.addEventListener("input", function (e) {
  const value = e.target.value;});

buttonadd.addEventListener("click", function (e) {
  createtodo();
});
function createtodo() {
  const value = inputtodo.value;
  if (value === "") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
    tododata.push(value);
    inputtodo.value = "";
    render(tododata); }}

inputtodo.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    createtodo();
  }});

function removetodo(todo) {
  const newtododata = tododata.filter(function (item) {
    return item !== todo;
  });
  tododata = newtododata;
  render(tododata);}

function render(arr) {
  const newcontent = arr.map(function (todo, index) {
      return `<li>${index + 1}. ${todo}
      <span  class ="del" onclick="removetodo('${todo}')">&times;</span>  </li>`})
    .join("");
  list.innerHTML = newcontent;
}


