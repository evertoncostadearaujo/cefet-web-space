// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
const constante = document.querySelector('#constante')
let massa1El = document.querySelector('#massa1')
let massa2El = document.querySelector('#massa2')
let distanciaEl = document.querySelector('#distancia')
let forcaGEl = document.querySelector('#resultado')
let calcularEl = document.querySelector('#calcular')
calcularEl.addEventListener('click', function() {
    forcaGEl.value = constante.value * massa1El.value * massa2El.value / (Math.pow(distanciaEl.value, 2))
});