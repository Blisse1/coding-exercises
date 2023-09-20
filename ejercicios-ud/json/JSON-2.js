const usuarios = [
    {
        Nombre: "Armando",
        Apellido: "Arredondo",
        Correo: "armdo@gmail.com",
        Telefono: "319264515",
        Nacionalidad: "Estadounidense",
    }, 
    {
        Nombre: "Luisa",
        Apellido: "Castano",
        Correo: "LuisaC@hotmail.com",
        Telefono: "21152015",
        Nacionalidad: "Peruana",
    }, 
    {
        Nombre: "Felipe",
        Apellido: "Perez",
        Correo: "Felipe@gmail.com",
        Telefono: "12154125",
        Nacionalidad: "Colombia",
    }, 
    {
        Nombre: "Andres",
        Apellido: "Mozart",
        Correo: "Mozand@gmail.com",
        Telefono: "91671850",
        Nacionalidad: "Nueva Guinea",
    }, 
    {
        Nombre: "Pedro",
        Apellido: "Avellaneda",
        Correo: "PedroAve@hotmail.com",
        Telefono: "2151545",
        Nacionalidad: "Canadiense",
    }, 
];

let usuariosJSON = JSON.stringify(usuarios);

usuarios.forEach(usuario => console.log(usuario));
console.log(usuariosJSON);

const jsonPeliculas = `
{
    "MisPeliculasFavoritas": [
        {
            "Nombre": "When Marnie Was There",
            "Genero": "Fantasía",
            "Año-estreno": "2014",
            "Director": "Hiromasa Yonebayashi",
            "Duration": "103 minutes"
        },
        {
            "Nombre": "Spirited Away",
            "Genero": "Fantasy",
            "Año-estreno": "2003",
            "Director": "Hayao Miyazaki",
            "Duration": "0.5h"
        },
        {
            "Nombre": "Howl's Moving Castle",
            "Genero": "Fantasy/Adventure",
            "Año-estreno": "2004",
            "Director": "Hayao Miyazaki",
            "Duration": "2h"
        },
        {
            "Nombre": "The Wind Rises",
            "Genero": "Romance/war",
            "Año-estreno": "2013",
            "Director": "Hayao Miyazaki",
            "Duration": "3h"
        },
        {
            "Nombre": "The Tale of the Princess Kaguya",
            "Genero": "Fantasy/adventure",
            "Año-estreno": "2013",
            "Director": "Isao Takahata",
            "Duration": "137 minutes"
        }
    ]
}
`;

const objetoPelicula = JSON.parse(jsonPeliculas);
console.log(jsonPeliculas);
for(let peli of objetoPelicula.MisPeliculasFavoritas){
   console.log(peli.Nombre); 
}


