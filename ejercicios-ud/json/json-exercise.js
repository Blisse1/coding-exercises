const jsonPeliculas = `
{
    "MisPeliculasFavoritas": [
        {
            "Nombre": "When Marnie Was There",
            "Género": "Fantasía",
            "Año-estreno": "2014",
            "Director": "Hayao Miyazaki",
            "Duraction": "1h"
        },
        {
            "Nombre": "peli2",
            "Género": "genero-f",
            "Año-estreno": "2015",
            "Director": "director-m",
            "Duraction": "0.5h"
        },
        {
            "Nombre": "peli3",
            "Género": "genero-o",
            "Año-estreno": "2017",
            "Director": "director-c",
            "Duraction": "2h"
        },
        {
            "Nombre": "peli4",
            "Género": "genero-x",
            "Año-estreno": "2019",
            "Director": "director-b",
            "Duraction": "3h"
        },
        {
            "Nombre": "peli5",
            "Género": "genero-y",
            "Año-estreno": "2011",
            "Director": "director-a",
            "Duraction": "4h"
        }
    ]
}
`;

const objetoPelicula = JSON.parse(jsonPeliculas);

for(let peli of objetoPelicula.MisPeliculasFavoritas){
   console.log(peli.Nombre); 
}

