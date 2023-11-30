/* Ejercicio 10
Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];

function getAverage(number) {
    let sum = 0;

    for (let i = 0; i < number.length; i++){
        sum += number[i];
    }
    return sum
};
console.log(getAverage(numbers) / numbers.length);