/* Ejercicio 25
Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.*/

let sum = 0;
const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];

for (const key in products) {
    console.log(products[key]);
    sum += products[key].sellCount; 
};
console.log(`La media de ventas es: ${sum / products.length}€ `);
