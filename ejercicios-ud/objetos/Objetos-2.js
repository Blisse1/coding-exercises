class Figura {
    constructor(color){
        this.color = color;
    }
    saludar (){
        return `Hola! Soy una figura y mi color es ${this.color}`;
    }
}

const nuevaFigura = new Figura("Amarillo");

class Cuadrado extends Figura {

    constructor(color, alto, ancho) {
        super(color);
        this.alto = alto;
        this.ancho = ancho;
    }

    saludar () {
        return `Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto*this.ancho}`
    }
}

class Triangulo extends Cuadrado {

       constructor(color, alto, base, lado){
           super(color, alto);
           this.alto = alto;
           this.base = base; 
           this.lado = lado;
       }

       saludar () {
           let area = `${(this.base * this.alto) / 2}`;
           let perimetro = `${(this.base) + this.lado * 2}`
           return `Hola! Soy un triángulo. Mi área es ${area} y mi perimetro es ${perimetro}.`;
       }
}
class Circulo extends Figura {

       constructor(color, radio){
           super(color);
           this.radio = radio;
       }

       saludar () {
           return `Hola! Soy un círculo. Mi color es ${this.color} y mi radio es ${this.radio}.`;
       }
}

const nuevoCirculo = new Circulo("Blanco", 4);
console.log(nuevoCirculo.saludar());

const nuevoTriangulo = new Triangulo("Negro", 4, 3, 4);

console.log(nuevoTriangulo.saludar());

// area, perimetro, otra figura 

const nuevoCuadrado = new Cuadrado("Negro", 8, 6);

console.log(nuevoCuadrado.saludar());

