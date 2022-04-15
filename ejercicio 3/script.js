const numbersLength = 350;
const numbers = [];
let zeroCount = 0;

const positiveNums = [];
let posPlus = 0;

//generar los aleatoriamente
for(let i = 0; i < numbersLength; i++) {
    var newNum = parseInt((Math.random() - 0.5) * 1000);
    let stringedNum = newNum.toString();

    // contar los ceros
    if(stringedNum.includes('0')) {
        for(let n of stringedNum) {
            if(n == '0') zeroCount++;
        }
    } 

    // colocar los numeros positivos en un array
    if(!stringedNum.includes('-')) positiveNums.push(newNum);

    numbers.push(newNum);
}

// sacar promedio de numeros positivos
positiveNums.forEach(n => {
    posPlus += n;
})
const positiveAverage = positiveNums.length == 0 ? 0 : posPlus / positiveNums.length;

// obtener el menor y el mayor
const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

// rango de numeros
let numbersRange = 0;
for(let i = minValue; i <= maxValue; i++) {
    numbersRange++;
}


console.log('numbers:', numbers, '/ zeros:', zeroCount, '/ positive average:', positiveAverage, '/ min number:', minValue, 
'/ max number:', maxValue, '/ numbers range:', numbersRange);