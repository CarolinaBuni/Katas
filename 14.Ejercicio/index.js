/* Ejercicio 14
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada 
una de las palabras que lo conforma. Puedes usar este array para probar tu función:*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(params) {
    let count = {};
    const repeatedWords = {};

    for (let i = 0; i < params.length; i++) {
        let word = params[i];
        if (count[word]){
            count[word] += 1;
        } else {
            count[word] = 1;
        }
    }
    for (const word in count) {
        if (count[word] > 1) {
            repeatedWords[word] = count[word];
        }
    }
    return repeatedWords;
};
const wordCount = repeatCounter(counterWords);
console.log(wordCount);


