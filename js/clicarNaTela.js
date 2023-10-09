const clicarTela = () =>{
    // Tirar todos os resizers de todos os elementos e as bordas
    console.log('tirei os resizers')
    const elementos = document.querySelectorAll('.elemento')
    for (let c = 0; c < elementos.length; c++) {
        const elementoAtual = elementos[c];
        const redimensionadorFilhoX = elementoAtual.querySelector('.redimensionador-x');
        const rotacionadorFilho = elementoAtual.querySelector('.rotacionador')
    
        elementoAtual.disabled = true;
        elementoAtual.style.border = '';
        if(rotacionadorFilho){
          elementoAtual.removeChild(rotacionadorFilho)
        }
    
        if (redimensionadorFilhoX) {
          elementoAtual.removeChild(redimensionadorFilhoX);
          
        }
      }
}

document.addEventListener('click', clicarTela)
const todosElementos = document.querySelectorAll('.elemento')

for(let x = 0; x < todosElementos.length; x++){
    todosElementos[x].addEventListener('click', (e)=>{
        e.stopPropagation()
    })
}

