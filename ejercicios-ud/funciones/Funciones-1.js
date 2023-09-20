//
// function suma (a,b){
// 	return a+b
// }
// function resta (a,b){
// 	return a-b
// }
// function multipliacion (a,b){
// 	return a*b
// }
// function division (a,b){
// 	return a/b
// }
//
// console.log(suma(4, 5));
//
//
// // dolar a pesos
//
// let dolarHoyEnCop = 4423;
//
// function aDolar (pesos){
// 	let conversion = pesos / dolarHoyEnCop;
// 	let finalConversion = conversion.toFixed(2);
// 	return finalConversion;
// }
//
// console.log(aDolar(50000));

// Areas
function areaCirculo(radio){
	let operacion = Math.PI * radio**2;
	let operacionRedondeada = operacion.toFixed(4);
	return operacionRedondeada;
}
function areaCuadrado(lado){
	let operacion = lado * lado;
	return operacion;
}
function areaTriangulo(base, altura){
	let operacion = (base * altura)/ 2;
	return operacion;
}


console.log(areaCirculo(5));
console.log(areaCuadrado(5));
console.log(areaTriangulo(5, 4));

