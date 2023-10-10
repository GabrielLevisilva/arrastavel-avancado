const movendoElemento = (elementoClicado) =>{
    if(elementoClicado.getAttribute('is-dragging') === 'true'){
        
        
        elementoClicado.style.position = 'absolute'
        elementoClicado.style.left = event.pageX - elementoClicado.offsetWidth / 2 + 'px';
        elementoClicado.style.top = event.pageY - elementoClicado.offsetHeight / 2 + 'px';

        
        // elementoClicado.style.top = posicaoY - 50 + 'px'
        // elementoClicado.style.left = posicaoX - 50 + 'px'

        // ----------------
        const quadro = elementoClicado.parentNode()
        const elemento = elementoClicado
    
        console.log('está se movendo')
        
        // ----------------
    }
}