class Persona{
    constructor(){
        this.nombre = null;
        this.apellido = null;
        this.edad = null;
        this.nacionalidad = null;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }
    set setApellido (apellido){
        this.apellido = apellido;
    }
    set setEdad (edad){
        this.edad = edad;
    }
    set setNacionalidad (nacionalidad){
        this.nacionalidad = nacionalidad;
    }
    get getNombre(){
        return this.nombre;
    }
    get getApellido(){
        return this.apellido;
    }
    get getEdad(){
        return this.edad;
    }
    get getNacionalidad(){
        return this.nacionalidad;
    }
}

const newPersona = new Persona();


newPersona.setNombre = "Carlos";
newPersona.setApellido = "Marin";
newPersona.setEdad = 41;
newPersona.setNacionalidad = "Peru";
console.log(newPersona);
console.log(newPersona.getApellido);
