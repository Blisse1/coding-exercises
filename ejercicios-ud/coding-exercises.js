// Practice no1.

// let name = "Andrés ";
// let age = 20;
// 
// if(name){console.log("es verdadero")}
// 
// console.log(name + age + " " + "años");

// Practice no2

// let num1 = 800; // Analizar si este es mayor
// let num2 = 1002; // o este
// let num3 = 5000; // o este

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

// let ordenados = [];
// 
// function ordenar(numeros) {
//     if (numeros[0] < numeros[1] && numeros[0] < numeros[2]) { // el primero siendo el menor de la lista
//         if (numeros[1] < numeros[2]) {
//             ordenados.push(numeros[0]); // el menor
//             ordenados.push(numeros[1]); // el segundo menor
//             ordenados.push(numeros[2]); // el mayor
//         } else {
//             ordenados.push(numeros[0]); // el menor
//             ordenados.push(numeros[2]); // el segundo menor
//             ordenados.push(numeros[1]); // el mayor
//         }
//     } else if (numeros[1] < numeros[2] && numeros[1] < numeros[2]) { // o el segundo menor de la lista
//         if (numeros[0] < numeros[2]) {
//             ordenados.push(numeros[1]); // el menor
//             ordenados.push(numeros[0]); // el segundo menor
//             ordenados.push(numeros[2]); // el mayor
//         } else {
//             ordenados.push(numeros[1]); // el menor
//             ordenados.push(numeros[2]);
//             ordenados.push(numeros[0]);
//         }
//     } else { 
//         if (numeros[0] < numeros[1]) {
//             ordenados.push(numeros[2]); // el menor
//             ordenados.push(numeros[0]); // el segundo menor
//             ordenados.push(numeros[1]); // el mayor
//         } else {
//             ordenados.push(numeros[2]); // el menor
//             ordenados.push(numeros[1]);
//             ordenados.push(numeros[0]);
//         }
//     }
// }

//ordenar([99,80,69]);

// console.log(ordenados);
// 
// const carro = {
//     marca: 'Volkswagen',
//     modelo: 'Jetta',
//     año: '2004',
//     color: 'Blanco',
//     descripcion: function () {
//         return `Hola! Mi marca es ${this.marca}, soy modelo ${this.modelo} ${this.año}, y mi color es ${this.color}.`;
//     },
//     motor : {
//         potenciaMax: 100,
//         motor : 'diésel',
//         transmision: 'automática',
//         traccion : 'delantera', 
//         suspension : 'independiente',
//         descripcion : function () {
//             let primerasTres = `Mi potencia máxima es ${this.potenciaMax}, mi motor es ${this.motor}, mi transmision es ${this.transmision}`;
//             let faltantes = ` y mi tracción es ${this.traccion}, finalmente mi suspensión es ${this.suspension}`;
//             return `${primerasTres} ${faltantes}`;
//         }
//     }
// };
// 
// console.log(carro.descripcion());
// console.log(carro.motor.descripcion());
// 

// class Figura {
//     constructor(color){
//         this.color = color;
//     }
//     saludar (){
//         return `Hola! Soy una figura y mi color es ${this.color}`;
//     }
// }
// 
// const nuevaFigura = new Figura("Amarillo");
// 
// class Cuadrado extends Figura {
// 
//     constructor(color, alto, ancho) {
//         super(color);
//         this.alto = alto;
//         this.ancho = ancho;
//     }
// 
//     saludar () {
//         return `Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto*this.ancho}`
//     }
// }

//class Triangulo extends Cuadrado {
//
//        constructor(color, alto, base, lado){
//            super(color, alto);
//            this.alto = alto;
//            this.base = base; 
//            this.lado = lado;
//        }
//
//        saludar () {
//            let area = `${(this.base * this.alto) / 2}`;
//            let perimetro = `${(this.base) + this.lado * 2}`
//            return `Hola! Soy un triángulo. Mi área es ${area} y mi perimetro es ${perimetro}.`;
//        }
//}
//
//const nuevoTriangulo = new Triangulo("Negro", 4, 3, 4);
//
//console.log(nuevoTriangulo.saludar());

// area, perimetro, otra figura 

// const nuevoCuadrado = new Cuadrado("Negro", 8, 6);
// 
// console.log(nuevoCuadrado.saludar());


let mascota = {
    nombre: "Pedro",
    edad: 5,
    tamaño: "Grande",
    color: "Blanco"
};

let { nombre, edad, tamaño, color } = mascota;

console.log(tamaño)

// Try - Catch
// El mensaje de error se capta en el try si hay alguno y luego se lanza en el bloque de catch
// function isNumber (number) {
//     try {
//         if(isNaN(number)){
//             throw new Error("¡Cuidado! No se reciben datos no numéricos.");
//         }else{
//             return `Dato introducido corresponde al tipo de dato esperado.`;
//         }
//     }catch(err){
//         return err.message;
//     }finally {
//         console.log("Análisis de datos terminado.");
//     }
// }
// 
// console.log(isNumber("a"));


// Solo entradas numericas
// Division por cero no es posible
// No es posible raiz cuadrada de negativos

// function calculator(a, b, numSqrt) {
//     try {
//         if (isNaN(a) || isNaN(b) || isNaN(numSqrt)) { // Si ambos no son números
//             throw new Error("Por favor ingrese datos numéricos");
//         }else if(b === 0){
//             throw new Error("El denominador no puede ser cero.")
//         }else if(numSqrt < 0){
//             throw new Error("El número de la raíz cuadrada no puede ser negativo");
//         }
//     } catch (err) {
//         return err.message;
//     }
// 
//     let sum = `${a + b}`;
//     let rest = `${a - b}`;
//     let mult = `${a * b}`;
//     let div = `${a / b}`;
//     let pow = `${a**b}`;
//     let sqrt = Math.sqrt(numSqrt);
// 
//     let sumMessage = `La suma es ${sum},`;
//     let restMessage = ` la resta es ${rest},`;
//     let multMessage = ` la multiplicación es ${mult},`;
//     let divMessage = ` la división es ${div},`;
//     let powMessage = ` la potencia es ${pow},`;
//     let sqrtMessage = ` la raíz es ${sqrt}.`;
// 
//     return `${sumMessage}${restMessage}${multMessage}${divMessage}${powMessage}${sqrtMessage}`;
// }
//   //Todos los inputs deben ser válidos
// console.log(calculator(4, 1, ));

// Regex
// "" comillas dobles no las incluye, solo dice que hay espacios en blanco, se lee solo lo de dentro.
// backslash evalua toda la expresión
// Los espacios en la cadena cuentan

// let expression = /^[A-C]\w+\ses\s\w+/;
//
// const arr = ["Juan es guapo", "Adriano no es feo", "Adriano deja de ser guapo", "Adriano ya es guapo", "No es ahora", "Ahora es no", "Adriano es guapo"];
//
// for(let i of arr){
//     console.log(expression.test(i));
// }

// Arrow Functions exercises.

//Comparación

// const comp = (a,b) => {
//     if(a!==b){
//         return 1;
//     }else {
//         return 0;
//     }
// }
//
// console.log(comp(4,5));

// 3 funciones

// const secToMin = s => `Los ${s} segundos son equivalentes a ${s/60} minutos`;
//
// console.log(secToMin(120));
//
// const minToHour = min => `${min} minutos son equivalentes a ${min/60} hora`;
//
// console.log(minToHour(30));
//
// const hourToDays = h  => `${h} horas son equivalentes a ${h/24} días`;
//
// console.log(hourToDays(48));
