// eventosResizers.js
const aumentarX = (elementoResizerX, elementoClicado) => {
    if (elementoClicado.getAttribute('data-redimensionando') === 'true') {
        // Se o atributo data-redimensionando for true, então estamos redimensionando este elemento
        elementoResizerX.style.backgroundColor = 'pink';
        let cursorX = event.pageX;
        elementoResizerX.style.left = cursorX - 25 + 'px';
        let elementoWidth = elementoClicado.getBoundingClientRect().width;
        let espacoEntre = cursorX - elementoWidth;
        elementoClicado.style.width = (elementoWidth + espacoEntre ) - 25 + 'px';
        elementoClicado.style.height = (elementoWidth + espacoEntre ) - 25 + 'px';
    }
};

const addEventosResizers = (elementoClicado) => {
    const elementoResizerX = elementoClicado.children[0];
    elementoResizerX.style.backgroundColor = 'green';

    elementoResizerX.addEventListener('mousedown', (event) => {
        event.stopPropagation();
        
        elementoClicado.setAttribute('data-redimensionando', 'true');
        
        document.addEventListener('mousemove', () => {
            aumentarX(elementoResizerX, elementoClicado);
        });
        document.addEventListener('mouseup', () => {
            
            elementoClicado.setAttribute('data-redimensionando', 'false');
        });
    });

    elementoResizerX.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Clique no resizer X');
    });

};


