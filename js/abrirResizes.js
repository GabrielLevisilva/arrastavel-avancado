const abrirResizes = (event) => {
    const elementoClicado = event.target;

    console.log(elementoClicado)

    // Adiciona evento e arrastar ao elemento clicado
    elementoClicado.addEventListener('mousedown', ()=>{
      elementoClicado.setAttribute('is-dragging', 'true')

      document.addEventListener('mousemove', ()=>{movendoElemento(elementoClicado)})
      elementoClicado.addEventListener('mouseup', ()=>{elementoClicado.setAttribute('is-dragging', 'false')})
    })
  
  
    // Cria o redimensionador
  
    const redimensionadorX = document.createElement('div');
    redimensionadorX.setAttribute('class', 'redimensionador-x');
  
    // Desabilita todos os elementos e retira suas bordas
    for (let c = 0; c < elementos.length; c++) {
      const elementoAtual = elementos[c];
      const redimensionadorFilhoX = elementoAtual.querySelector('.redimensionador-x');
  
      elementoAtual.disabled = true;
      elementoAtual.style.border = '';
  
      if (redimensionadorFilhoX) {
        elementoAtual.removeChild(redimensionadorFilhoX);
      }
    }
    
    // Adiciona os redimensionadores no elemento clicado e habilita-o
    elementoClicado.disabled = false;
    elementoClicado.style.border = '2px solid rgb(187, 124, 238)';
  
    // Importante que os redimensionadores sejam adicionados ao elemento nessa ordem: primeiro X e depois Y, por causa do position relative
    elementoClicado.appendChild(redimensionadorX);
    

    addEventosResizers(elementoClicado) //adiciona eventos aos resizers criados
  }

//   TO DO: ao clicar no quadroAtual (não clicando nos filhos) ele remove todos os resizers e todas as bordas e desabilita todos. Ou pode ter um botão no menu que faz isso, mais fácil



  