const abrirResizes = (event) => {
    const elementoClicado = event.target;

    console.log(elementoClicado)

    // Adiciona evento e arrastar ao elemento clicado
    elementoClicado.addEventListener('mousedown', ()=>{
      elementoClicado.setAttribute('is-dragging', 'true')
      isDragging = true

      document.addEventListener('mousemove', ()=>{movendoElemento(elementoClicado)})
      elementoClicado.addEventListener('mouseup', ()=>{
        elementoClicado.setAttribute('is-dragging', 'false')
        isDragging = false
      })
    })
  
  
    // Cria o redimensionador e o rotacionador
  
    const redimensionadorX = document.createElement('div');
    redimensionadorX.setAttribute('class', 'redimensionador-x');

    const rotacionador = document.createElement('div')
    rotacionador.setAttribute('class', 'rotacionador')
    
  
    // Desabilita todos os elementos e retira suas bordas
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
    
    // Adiciona os redimensionadores no elemento clicado e habilita-o
    elementoClicado.disabled = false;
    elementoClicado.style.border = '2px solid rgb(187, 124, 238)';
  
    // Importante que os redimensionadores sejam adicionados ao elemento nessa ordem: primeiro X e depois rotacionador, por causa do position relative
    elementoClicado.appendChild(redimensionadorX);
    elementoClicado.appendChild(rotacionador);

    

    addEventosResizers(elementoClicado) //adiciona eventos aos resizers criados
    addEventosRotacionador(elementoClicado)
  }

//   TO DO: ao clicar no quadroAtual (não clicando nos filhos) ele remove todos os resizers e todas as bordas e desabilita todos. Ou pode ter um botão no menu que faz isso, mais fácil



  