// Número mayor solo con if.
// let num1 = 15;
// let num2 = 5;
// let num3 = 5;
//
// if(num1 > num2 && num1 > num3){ // num1 es el mayor
//     if(num2 === num3){
//         console.log(`Hay dos números repetidos (${num3}). ${num1} es el mayor.`)
//     }else if (num2 < num3) {
// 		console.log(`El número ${num2} es el menor y el número ${num3} es el del medio`);
// 	} else {
// 		console.log(`El número ${num3} es el menor y el número ${num2} es el del medio`);
// 	}
// }else if(num2 > num1 && num2 > num3){ // num2 siendo mayor
//     if (num3 === num1){
//         console.log(`Hay dos números repetidos (${num3}). ${num2} es el mayor.`)
//     }else if (num1 < num3) {
// 		console.log(`El número ${num1} es el menor y el número ${num3} es el del medio`);
// 	}else {
// 		console.log(`El número ${num3} es el menor y el número ${num1} es el del medio`);
// 	}
// }else if(num3 > num2 && num3 > num1){ //num3 siendo mayor
//     if (num2 === num1){
//         console.log(`Hay dos números repetidos (${num2}). ${num3} es el mayor.`)
//     }else if(num1 < num2) {
// 		console.log(`El número ${num1} es el menor, y el número ${num2} es el del medio`);
// 	}else {
// 		console.log(`El número ${num2} es el menor y el número ${num1} es el del medio`);
// 	}
// }else{
//     console.log("Todos los números son iguales");
// }

// Número par o impar

// let n1 = 3;
//
// if(n1 % 2 === 0){
//    console.log("El número es par"); 
// }else{
//     console.log("El número es impar"); 
// }
//

// Ejercicio docenas

let docenas = 11;

if(docenas > 10){
    let docenaPrecio = (docenas * 60000)
    let descuento = docenaPrecio * 0.2;
    let resultado = docenaPrecio - descuento;
    console.log(`El valor inicial de las docenas compradas es ${docenaPrecio} y tiene un descuento de ${descuento}`,'\n',`El valor final es: ${resultado}`);
} else if(docenas >= 5 && docenas < 11){
    let docenaPrecio = (docenas * 60000)
    let descuento = docenaPrecio * 0.15;
    let resultado = docenaPrecio - descuento;
    console.log(`El valor inicial de las docenas compradas es ${docenaPrecio} y tiene un descuento de ${descuento}`,'\n',`El valor final es: ${resultado}`);
} else if(docenas > 1 && docenas < 5){
    let docenaPrecio = (docenas * 60000)
    let descuento = docenaPrecio * 0.1;
    let resultado = docenaPrecio - descuento;
    console.log(`El valor inicial de las docenas compradas es ${docenaPrecio} y tiene un descuento de ${descuento}`,'\n',`El valor final es: ${resultado}`);
}



