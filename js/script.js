// Ao clicar no elemento ele mostra os resizers para editar ele
const elementos = document.querySelectorAll('.elemento')

// percorre todos os elementos e adiciona um evento em cada um deles
for(let c = 0; c < elementos.length; c++){
    elementos[c].addEventListener('click', abrirResizes)
}
