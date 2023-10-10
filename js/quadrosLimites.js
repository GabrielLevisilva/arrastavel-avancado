const quadroAtual = (e) =>{
    const quadroAtual = e.target
    const infoQuadroAtual = quadroAtual.getBoundingClientRect()
    console.log('Quadro Atual: ' + quadroAtual)
    console.log('Informações do Quadro: ' + infoQuadroAtual.left)

    
    
}

const quadros = document.querySelectorAll('.quadro')
for(let c = 0; c < quadros.length; c++){
    quadros[c].addEventListener('click', quadroAtual)
}

