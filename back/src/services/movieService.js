// const axios = require("axios")

const Movie = require("../models/Product")

module.exports ={
    getServiceMovies: async () =>{
        try {
            const movies = await Movie.find()
            return movies
        } catch (error) {
            console.error('no te funciono wey, algo paso en el service ');
        }
    },

    //función async que reciba por parámetro los datos de las películas y llame al método correspondiente del modelo Movie para crear una nueva película en la base de datos.
    serviceCreateMovie: async (movie) => {
        try {
            const newMovie = await Movie.create(movie)
            return newMovie
        } catch (error) {
            console.error ('Algo paso en el service, no se añadio a la BD')
        }
        
    }
}

// module.exports ={
//     getServiceMovies: async () =>{
//         try {
//             const movies = await axios('https://students-api.up.railway.app/movies')
//             const movieConstructor = movies.data.map((peli) => new Movie(peli))
//             return movieConstructor
//         } catch (error) {
//             console.error('no te funciono wey, algo paso');
//         }
//     }
// }