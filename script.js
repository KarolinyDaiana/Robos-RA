const limpar = document.getElementById("limpar");

limpar.addEventListener('click', function() {
    geral.style.display = 'none';
    garra.style.display = 'none';
    sensor.style.display = 'none';
    motor.style.display = 'none';

    console.log("limpei")
})

// GERAL
const geral = document.getElementById("texto-geral");
const roboEnt = document.getElementById("robo-todo");
const fechar1 = document.getElementById("fechar1");

roboEnt.addEventListener("targetFound", event => {
    geral.style.display = 'block';
})

fechar1.addEventListener('click', function() {
    console.log("teste");
    geral.style.display = 'none';
})

// GARRA
const garra = document.getElementById("texto-garra");
const garraEnt = document.getElementById("robo-garra");
const fechar2 = document.getElementById("fechar2");

garraEnt.addEventListener("targetFound", event => {
    garra.style.display = 'block';
})

fechar2.addEventListener('click', function() {
    console.log("teste");
    garra.style.display = 'none';
})

// SENSOR
const sensor = document.getElementById("texto-sensor");
const sensorEnt = document.getElementById("robo-sensor");
const fechar3 = document.getElementById("fechar3");

sensorEnt.addEventListener("targetFound", event => {
    sensor.style.display = 'block';
})

fechar3.addEventListener('click', function() {
    console.log("teste");
    sensor.style.display = 'none';
})

// MOTORES
const motor = document.getElementById("texto-motor");
const motorEnt = document.getElementById("robo-motor");
const fechar4 = document.getElementById("fechar4");

motorEnt.addEventListener("targetFound", event => {
    motor.style.display = 'block';
})

fechar4.addEventListener('click', function() {
    console.log("teste");
    motor.style.display = 'none';
})