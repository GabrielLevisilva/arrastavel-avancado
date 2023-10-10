// eventosResizers.js
let initialX, initialY, currentX, currentY;

const aumentarX = (elementoResizerX, elementoClicado) => {
    if (elementoClicado.getAttribute('data-redimensionando') === 'true') {
        // Se o atributo data-redimensionando for true, então estamos redimensionando este elemento
        currentX = event.clientX;
        currentY = event.clientY;

        const width = parseInt(getComputedStyle(elementoClicado, null).getPropertyValue('width'));
        const height = parseInt(getComputedStyle(elementoClicado, null).getPropertyValue('height'));

        const deltaX = currentX - initialX;
        const deltaY = currentY - initialY;

        elementoClicado.style.width = width + deltaX + 'px';
        elementoClicado.style.height = width + deltaX + 'px';

        initialX = currentX;
        initialY = currentY;

    }
};

const addEventosResizers = (elementoClicado) => {
    const elementoResizerX = elementoClicado.children[0];
    elementoResizerX.style.backgroundColor = 'green';

    elementoResizerX.addEventListener('mousedown', (event) => {
        event.stopPropagation();

        initialX = event.clientX;
        initialY = event.clientY;
            

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


