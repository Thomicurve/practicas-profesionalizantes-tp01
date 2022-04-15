const formulario = document.querySelector(".form");
const fragment = document.createDocumentFragment();

// ----- Generar inputs -----
for(let i = 1; i <= 5; i++) {
    const newInput = document.createElement("input");
    const container = document.createElement("div");
    const inputTitle = document.createElement('h6');

    
    newInput.id = `${i}`;
    newInput.className = 'input'
    inputTitle.style.marginBottom = "0px";
    inputTitle.textContent = "Dia " + i;
    
    container.appendChild(inputTitle);
    container.appendChild(newInput);
    fragment.appendChild(container);
}

formulario.appendChild(fragment);

// -------------------------------------------------------------------

const formButton = document.querySelector('.submit-button');
const exitText = document.querySelector('.result-text');


const calcularTemperatura = () => {
    const temperaturesInputs = document.querySelectorAll('.input');
    const temperatures = [];

    temperaturesInputs.forEach(input => {
        const parsedValue = parseInt(input.value);

        if(!input.value.trim()) return console.error('Completa los numeros');
        else temperatures.push(parsedValue);
        
    });

    if(temperatures.length != temperaturesInputs.length) return console.error('Completa los numeros');
    else {
        const minNum = Math.min(...temperatures);
        exitText.textContent =  'Resultado: ' + minNum + ' grado/s, dia ' + (temperatures.indexOf(minNum) + 1);
    }

    
}


formButton.addEventListener("click", (e) => {
    e.preventDefault();
    calcularTemperatura();
})