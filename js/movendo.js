const movendoElemento = (elementoClicado) =>{
    if(elementoClicado.getAttribute('is-dragging') === 'true'){
        console.log('está se movendo')
        let posicaoX = event.pageX
        let posicaoY = event.pageY

        elementoClicado.style.position = 'absolute'
        elementoClicado.style.top = posicaoY -25 + 'px'
        elementoClicado.style.left = posicaoX -25 + 'px'
    }
}