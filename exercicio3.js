// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let paragrafos = document.querySelectorAll('p > button')
for (let pEl of paragrafos) {
    pEl.addEventListener('click', expande)
}

function expande(e) {
    let el = e.target;
    el.parentElement.classList.toggle('expandido')
    console.log('clicado')
}