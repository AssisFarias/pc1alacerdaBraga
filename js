console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");
titulo.textContentent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente); // tr
console.log(tdAltura); // td que tem o peso
console.log(altura); // Obter 100

var imc = peso / 
