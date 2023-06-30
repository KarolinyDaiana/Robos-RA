const geral = document.getElementById("texto-geral");
const roboTodo = document.getElementById("robo-todo");
const fechar = document.getElementById("fechar");

roboTodo.addEventListener("targetFound", event => {
    geral.style.display = 'block';
})

fechar.addEventListener('click', function() {
    console.log("teste");
    geral.style.display = 'none';
})