// Practice no1.


    // let name = "Andrés ";
// let age = 20;
// 
    // if(name){console.log("es verdadero")}
// 
    // console.log(name + age + " " + "años");

// Practice no2

let num1 = 800; // Analizar si este es mayor
let num2 = 1002; // o este
let num3 = 5000; // o este

// Cuál es el número mayor e imprimirlos en orden

// if(num1 > num2 && num1 > num3){ // num1 es el mayor
    // 	console.log( `El número ${num1} es el mayor`); // 
        // 	if (num2 < num3) { 
            // 		console.log(`El número ${num2} es el menor y el número ${num3} es el del medio`);
            // 	} else {
                // 		console.log(`El número ${num3} es el menor y el número ${num2} es el del medio`);
                // 	}
    // }else if(num2 > num1 && num2 > num3){ // num2 siendo mayor
        // 	console.log(`El número ${num2} es el mayor`);
        // 	
            // 	if (num1 < num3) {
                // 		console.log(`El número ${num1} es el menor y el número ${num3} es el del medio`);
                // 	}else {
                    // 		console.log(`El número ${num3} es el menor y el número ${num1} es el del medio`);
                    // 	}
        // }else { //num3 siendo mayor
            // 	console.log(`El número ${num3} es el mayor`); 
            // 	if (num1 < num2) {
                // 		console.log(`El número ${num1} es el menor, y el número ${num2} es el del medio`);
                // 	}else {
                    // 		console.log(`El número ${num2} es el menor y el número ${num1} es el del medio`);
                    // 	}
            // }

//let i = 10;
//
    //for(let i = 2; i < 11; i++){
        //	if(i % 2 === 0) {
            //		console.log(i);
            //	}
        //}

// for(let i = 1; i < 6; i++){
    // 	console.log(i);
    // }

//let i = 0;
//while(i){
    //	i++;
    //	console.log(i);
    //	if(i === 5){
        //		console.log(i);
        //	}
    //}
// function asd (parametros){
    // 
        // }
// 
    // asd(argumentos);
// 
    // let j = 7;
// 
    // for(let i = 0; i < 11; i++){
        // 	console.log(` ${j} * ${i} = ` + (j*i) );
        // }
// 
    // // function expression
// 
    // const saludo = function(){
        // 	//algo de codigo aquí
        // };
// 
    // console.log(saludo());

// function suma (a,b){
    // 	return a+b
    // }
// 
    // console.log(suma(4, 5));

// dolar a pesos

// let dolarHoyEnCop = 4423;
// 
    // function aDolar (pesos){
        // 	let conversion = pesos / dolarHoyEnCop;
        // 	let finalConversion = conversion.toFixed(2);
        // 	return finalConversion;
        // }
// 
    // console.log(aDolar(50000));

// Area circulo
// pi * r2 

// function areaCirculo(radio){
    // 	let operacion = 2 * Math.PI * radio;
    // 	let operacionRedondeada = operacion.toFixed(4);
    // 	return operacionRedondeada;
    // }
// 
    // 
    // console.log(areaCirculo(5));


//const exercise = function (a,b){
    //	return a > b ? 1 : -1; // menor
    //	let equal = a === b ? 0 : result;
    //
        //	if(a > b){
            //		return 1;
            //	}else if (a < b){
                //		return -1;
                //	}else {
                    //		return 0;
                    //	}
    //};

// console.log(exercise(5,5));

//Self-invoking functions
// (function (a, c) {
    // 	if(a < 0){ // controlar primero lo que no quiero que entre en el código
        // 		return c(`Es número no es un entero positivo`);
        // 	}else if (a % 2 === 0){
            // 		return c(`Es número es par` );
            // 	}else {
                // 		return c(`Es un número impar`);
                // 	}
    // })(2, console.log)

// Arrays
// Un objeto es una instancia de una clase.
    // indexOf

// coches.length - 1 es el último item del arreglo o coches.at(-1) da el último elemento

//const autos = [-2, -3, -5];
//
    //const ejemplo = autos.splice(1,2);
//// splice modifica la array original
//
    //// const ultimoAuto = autos[autos.length - 1];
//
    //console.log(ejemplo);

// Arrays ejemplo UD

const peliculas = ["La Milla Verde", "Parásitos", "El Viaje de Chihiro", "Coco", "Interstellar"];

//peliculas.forEach((peli, index) => console.log(`Pelicula Posición #${index} : ${peli}`));

// for(const [peli, index] of peliculas.entries()){
    // 	console.log(peli, index);
    // }

// Encapsulamiento son métodos y atributos	
// dinámico valor del dato, débil es flexible en suma de string y numero

// for (let i = 0; i < peliculas.length ; i++){
    // 	console.log(`Pelicula #${i} ` + peliculas[i]);
    // }

// let nombre = 'Andres';
// console.log(nombre.length)
// 
    // console.log(String instanceof Array)

//const pares = [];
//
    //for(let i = 0; i < 101; i++){
        //    if(i % 2 === 0){
            //        pares.push(i);
            //        console.log(pares);
            //    }
        //}

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

