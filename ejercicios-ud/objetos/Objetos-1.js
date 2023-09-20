const carro = {
    marca: 'Volkswagen',
    modelo: 'Jetta',
    año: '2004',
    color: 'Blanco',
    descripcion: function () {
        return `Hola! Mi marca es ${this.marca}, soy modelo ${this.modelo} ${this.año}, y mi color es ${this.color}.`;
    },
    motor : {
        potenciaMax: 100,
        motor : 'diésel',
        transmision: 'automática',
        traccion : 'delantera', 
        suspension : 'independiente',
        descripcion : function () {
            let primerasTres = `Mi potencia máxima es ${this.potenciaMax}, mi motor es ${this.motor}, mi transmision es ${this.transmision}`;
            let faltantes = ` y mi tracción es ${this.traccion}, finalmente mi suspensión es ${this.suspension}`;
            return `${primerasTres} ${faltantes}`;
        }
    }
};
console.log(carro.descripcion());
console.log(carro.motor.descripcion());
