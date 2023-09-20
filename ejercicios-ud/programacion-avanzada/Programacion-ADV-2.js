const palabrasEvaluar = ["edificio", "perla", "estrella", "pescado", "salero", "biblioteca", "guitarra", "dinero", "música"];


palabrasEvaluar.forEach(palabra => {
    const regEvaluacion = /a$/;

    if (regEvaluacion.test(palabra)){
        console.log(`La palabra ${palabra} cumple con la condición`);
    }else {
        console.log(`La palabra ${palabra} no cumple con la condición`);
    }
});

const palabra = "barco@gmail.com";
const expression = /^[a-zA-Z]+@[a-zA-Z]+(\.(com))/;

console.log(expression.test(palabra));



