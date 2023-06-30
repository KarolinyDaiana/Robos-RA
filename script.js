const geral = document.getElementById("texto-geral");
const roboTodo = document.getElementById("robo-todo");

roboTodo.addEventListener("targetFound", event => {
    geral.style.display = 'block';
})