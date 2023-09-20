const jsonPeliculas = `
{
    "MisPeliculasFavoritas": [
        {
            "Nombre": "Pulp Fiction",
            "Género": "Genero Cualquiera",
            "Año-estreno": "Numero",
            "Director": "Director-Nombre",
            "Duraction": "Horas"
        },
    ]
}
`;

const objetoPelicula = JSON.parse(jsonPeliculas);

for(let peli of objetoPelicula.MisPeliculasFavoritas){
   console.log(peli.Nombre); 
}

