const girando = (elementoClicado, rotacionadorElemento, isRotating, initialAngle, currentAngle) =>{
    event.stopPropagation();
    
    const centerX = elementoClicado.offsetWidth / 2;
    const centerY = elementoClicado.offsetHeight / 2;
    const startX = event.clientX;
    const startY = event.clientY;
    const initialDivAngle = currentAngle;

    document.addEventListener('mousemove', (e) => {
        if (isRotating) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const newAngle = initialDivAngle + calculateAngle(centerX, centerY, mouseX, mouseY) - calculateAngle(centerX, centerY, startX, startY);
            currentAngle = newAngle;
            elementoClicado.style.transform = `rotate(${newAngle}deg)`;
        }
    });

    document.addEventListener('mouseup', () => {
        isRotating = false;
    });



}

const addEventosRotacionador = (elementoClicado) =>{
    console.log('ENTREI NO ADDEVENTOSROTACIONADOR')
    const rotacionadorElemento = elementoClicado.children[1]

    // Variáveis para rastrear o estado de rotação
    let isRotating = false;
    let initialAngle = 0;
    let currentAngle = 0;

     // Função para calcular o ângulo entre dois pontos
     function calculateAngle(centerX, centerY, x, y) {
       const radians = Math.atan2(y - centerY, x - centerX);
       return radians * (180 / Math.PI);
   }

    rotacionadorElemento.addEventListener('mousedown', ()=>{girando(elementoClicado, rotacionadorElemento, isRotating, initialAngle, currentAngle)})

    rotacionadorElemento.addEventListener('click', (event)=>{
        event.stopPropagation();
    })
    
}