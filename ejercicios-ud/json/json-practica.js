let personas  = []; 
let persona1  = {
    Nombre : "Juan",
    Apellido: "Ibañez",
    Correo : "juaniba34@gmail.com",
    Telefono : null,
    Nacionalidad : "Peruana",
};
let persona2  = {
    Nombre : "Pablo",
    Apellido: "Hernandez",
    Correo : "pabloh12@hotmail.com",
    Telefono : null,
    Nacionalidad : null,
};
let persona3  = {
    Nombre : "Mariana",
    Apellido: "Perez",
    Correo : "marip34@gmail.com",
    Telefono : null,
    Nacionalidad : null,
};
let persona4  = {
    Nombre : "Pedro",
    Apellido: "Castaño",
    Correo : "pedroc@hotmail.com",
    Telefono : null,
    Nacionalidad : null,
};
let persona5  = {
    Nombre : "Camila",
    Apellido: "Fernandez",
    Correo : "camif@gmail.com",
    Telefono : null,
    Nacionalidad : null,
};

personas.push(persona1);
personas.push(persona2);
personas.push(persona3);
personas.push(persona4);
personas.push(persona5);


let personasAJSON = JSON.stringify(personas);

console.log(personasAJSON);
