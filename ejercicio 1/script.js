const letters = {
    i: 5,
    a: 6,
    b: 7,
    m: 8,
    d: 9,
    e: 10
};


const submitButton = document.getElementById("submit-button");
const resultText = document.getElementById("result-text");

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const letterInput = document.getElementById("letter-input").value.toLowerCase();
    const lettersKeys = Object.keys(letters);

    if(lettersKeys.includes(letterInput)) {
        lettersKeys.forEach(l => {
            if(letterInput == l)
                return resultText.textContent = `Calificacion: ${letters[l]}`;
        })
    } else return resultText.textContent = `Calificacion: Error en la calificacion`;
    
})  