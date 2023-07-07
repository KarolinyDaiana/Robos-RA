const geral = document.getElementById("texto-geral");
const roboEnt = document.getElementById("robo-todo");

const fechar = document.getElementsByClassName("fecharr");

const garra = document.getElementById("texto-garra");
const garraEnt = document.getElementById("robo-garra");

const sensor = document.getElementById("texto-sensor");
const sensorEnt = document.getElementById("robo-sensor");

const motor = document.getElementById("texto-motor");
const motorEnt = document.getElementById("robo-motor");

roboEnt.addEventListener("targetFound", event => {
    geral.style.display = 'block';
})

garraEnt.addEventListener("targetFound", event => {
    garra.style.display = 'block';
})

sensorEnt.addEventListener("targetFound", event => {
    sensor.style.display = 'block';
})

motorEnt.addEventListener("targetFound", event => {
    motor.style.display = 'block';
}) 

fechar.addEventListener('click', function() {
    console.log("teste");
    geral.style.display = 'none';
})
