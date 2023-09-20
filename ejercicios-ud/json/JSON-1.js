const miInfo = JSON.parse(`{
    "Nombre": "Andres",
    "Apellido": "Morales",
    "Edad": 13,
    "Hobbies" : ["lectura", "musica", "idiomas"], 
    "Contacto" : {
        "correo" : null,
        "telefono": {
            "celular": 1926214,
            "fijo": null
        }
    },
    "Direccion" : null
}
`);

console.log(miInfo.Hobbies[0]);

let aObjeto = `
{
    "Productos" : [
        {
            "Nombre": "Coca-Cola",
            "Marca": null,
            "Valor" : {
                "Valor_Compra": 3400,
                "Valor_Venta": 3800
            },
            "Tipo": "Bebida" 
        }
    ]
}
`;

let obj = JSON.parse(aObjeto);

let galletasItem = {
    "Nombre": "Galletas",
    "Marca": "Festival",
    "Valor" : {
        "Valor_Compra": 5400,
        "Valor_Venta": 9800
    },
    "Tipo": "Alimento" 
}

obj.Productos.push(galletasItem); 


let arrozItem = {
    "Nombre": "Arroz",
    "Marca": "Diana",
    "Valor" : {
        "Valor_Compra": 6000,
        "Valor_Venta": 9000
    },
    "Tipo": "Alimento" 
}
let detergenteItem = {
    "Nombre": "Detergente",
    "Marca": "Suavitel",
    "Valor" : {
        "Valor_Compra": 5400,
        "Valor_Venta": 6000
    },
    "Tipo": "Aseo" 
}
let aceiteItem = {
    "Nombre": "Aceite",
    "Marca": "Gourmet",
    "Valor" : {
        "Valor_Compra": 8000,
        "Valor_Venta": 10500
    },
    "Tipo": "Alimento" 
}
let cervezaItem = {
    "Nombre": "Cerveza",
    "Marca": "Poker",
    "Valor" : {
        "Valor_Compra": 3000,
        "Valor_Venta": 3200
    },
    "Tipo": "Bebida" 
}
let cremaItem = {
    "Nombre": "Crema-dental",
    "Marca": "Colgate",
    "Valor" : {
        "Valor_Compra": 3000,
        "Valor_Venta": 4000
    },
    "Tipo": "Higiene" 
}
let jabonItem = {
    "Nombre": "Jabon",
    "Marca": "Ariel",
    "Valor" : {
        "Valor_Compra": 6000,
        "Valor_Venta": 7000
    },
    "Tipo": "Aseo" 
}

obj.Productos.push(arrozItem); 
obj.Productos.push(detergenteItem); 
obj.Productos.push(aceiteItem); 
obj.Productos.push(cervezaItem); 
obj.Productos.push(cremaItem); 
obj.Productos.push(jabonItem); 

for(let i of obj.Productos){
    console.log(i.Nombre);
}




