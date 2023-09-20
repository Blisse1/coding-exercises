// const arr = [];
// for(let i = 1; i < 101; i++){
//     arr.push(i);
// }
//
// console.log(arr);
//

// Números pares

// const par = [];
//
// for(let i = 1; i < 101; i++){
//     if(i % 2 === 0){
//         par.push(i);
//     }
// }
// console.log(par);

// Ordenamiento
let ordenados = [];

function ordenar(numeros) {
    if (numeros[0] < numeros[1] && numeros[0] < numeros[2]) { // el primero siendo el menor de la lista
        if (numeros[1] < numeros[2]) {
            ordenados.push(numeros[0]); // el menor
            ordenados.push(numeros[1]); // el segundo menor
            ordenados.push(numeros[2]); // el mayor
        } else {
            ordenados.push(numeros[0]); // el menor
            ordenados.push(numeros[2]); // el segundo menor
            ordenados.push(numeros[1]); // el mayor
        }
    } else if (numeros[1] < numeros[2] && numeros[1] < numeros[2]) { // o el segundo menor de la lista
        if (numeros[0] < numeros[2]) {
            ordenados.push(numeros[1]); // el menor
            ordenados.push(numeros[0]); // el segundo menor
            ordenados.push(numeros[2]); // el mayor
        } else {
            ordenados.push(numeros[1]); // el menor
            ordenados.push(numeros[2]);
            ordenados.push(numeros[0]);
        }
    } else { 
        if (numeros[0] < numeros[1]) {
            ordenados.push(numeros[2]); // el menor
            ordenados.push(numeros[0]); // el segundo menor
            ordenados.push(numeros[1]); // el mayor
        } else {
            ordenados.push(numeros[2]); // el menor
            ordenados.push(numeros[1]);
            ordenados.push(numeros[0]);
        }
    }
}

ordenar([99,80,69]);
console.log(ordenados);
