// Função para calcular o ângulo entre dois pontos
function calculateAngle(centerX, centerY, x, y) {
    const radians = Math.atan2(y - centerY, x - centerX);
    return radians * (180 / Math.PI);
}

// Função para manipular a rotação
const girando = (elementoClicado, rotacionadorElemento, isRotating, initialAngle, currentAngle, event) => {
    event.stopPropagation();

    const centerX = elementoClicado.offsetWidth / 2;
    const centerY = elementoClicado.offsetHeight / 2;
    const startX = event.clientX;
    const startY = event.clientY;
    const initialDivAngle = currentAngle;

    document.addEventListener('mousemove', (e) => {
        if (isRotating) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const newAngle = initialDivAngle + calculateAngle(centerX, centerY, mouseX, mouseY) - calculateAngle(centerX, centerY, startX, startY);
            currentAngle = newAngle;
            elementoClicado.style.transform = `rotate(${newAngle}deg)`;
        }
    });

    document.addEventListener('mouseup', () => {
        isRotating = false;
    });
}

// Função para adicionar eventos ao rotacionador
const addEventosRotacionador = (elementoClicado) => {
    const rotacionadorElemento = elementoClicado.children[1];

    // Variáveis para rastrear o estado de rotação
    let isRotating = false;
    let initialAngle = 0;
    let currentAngle = 0;

    rotacionadorElemento.addEventListener('mousedown', (event) => {
        isRotating = true;
        girando(elementoClicado, rotacionadorElemento, isRotating, initialAngle, currentAngle, event);
    });

    rotacionadorElemento.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

// Adicione eventos ao elemento rotacionável
const rotatableDiv = document.getElementById('rotatableDiv');
addEventosRotacionador(rotatableDiv);