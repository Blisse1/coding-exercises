//Comparación

const comp = (a,b) => {
    if(a!==b){
        return 1;
    }else {
        return 0;
    }
}

console.log(comp(4,5));

// 3 funciones

const secToMin = s => `Los ${s} segundos son equivalentes a ${s/60} minutos`;

console.log(secToMin(120));

const minToHour = min => `${min} minutos son equivalentes a ${min/60} horas`;

console.log(minToHour(30));

const hourToDays = h  => `${h} horas son equivalentes a ${h/24} días`;

console.log(hourToDays(48));

