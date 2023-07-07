const geral = document.getElementById("texto-geral");
const roboEnt = document.getElementById("robo-todo");
const fechar = document.getElementById("fechar");

fechar.addEventListener('click', function() {
    console.log("teste");
    geral.style.display = 'none';
})

roboEnt.addEventListener("targetFound", event => {
    geral.style.display = 'block';
})

const garra = document.getElementById("texto-garra");
const garraEnt = document.getElementById("robo-garra");

garraEnt.addEventListener("targetFound", event => {
    garra.style.display = 'block';
})

const sensor = document.getElementById("texto-sensor");
const sensorEnt = document.getElementById("robo-sensor");

sensorEnt.addEventListener("targetFound", event => {
    sensor.style.display = 'block';
})

const motor = document.getElementById("texto-motor");
const motorEnt = document.getElementById("robo-motor");

motorEnt.addEventListener("targetFound", event => {
    motor.style.display = 'block';
}) 