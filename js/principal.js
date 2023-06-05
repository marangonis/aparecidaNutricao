// console.log('Olá Mundo!');

var titulo = document.querySelector('.titulo');
var conteudo = titulo.textContent;

// descendo nos elementos
var paciente = document.querySelector('#primeiro-paciente');
var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

// "." para pegar classe     # para pegar id
var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var alturaValida = true;
var pesoValido = true;

if (peso < 0 || peso > 1000) {
	pesoValido = false;
	tdImc.textContent = 'Peso inválido';
}

if (altura < 0 || altura > 3) {
	alturaValida = false;
	tdImc.textContent = 'Altura inválida';
}

if (alturaValida && pesoValido) {
	var imc = peso / (altura * altura);
	var tdImc = paciente.querySelector('.info-imc');
	// impostando o imc na tabela
	tdImc.textContent = imc;
}

console.log(paciente);
console.log(altura);
console.log(peso);
console.log(imc);
