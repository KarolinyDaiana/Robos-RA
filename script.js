const geral = document.getElementById("texto-geral");
const roboTodo = document.getElementById("robo-todo");

geral.style.display = 'none';

roboTodo.addEventListener("TargetFound", event => {
    geral.style.display = 'block';
})