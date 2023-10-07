// Ao clicar no elemento ele mostra os resizers para editar ele
const elementos = document.querySelectorAll('.elemento')

let isDragging = false

// percorre todos os elementos e adiciona um evento em cada um deles
for(let c = 0; c < elementos.length; c++){
    elementos[c].addEventListener('click', abrirResizes)
}

document.addEventListener('mouseup', ()=>{
    // todos os elementos is-dragging = false
    const todosElementos = document.querySelectorAll('.elemento')
    for(let z = 0; z < todosElementos.length; z++){
        todosElementos[z].setAttribute('is-dragging', 'false')
        isDragging = false
        console.log('AGORA TA FALSE')
    }
})