const { getServiceMovies, serviceCreateMovie } = require('../services/movieService')

module.exports ={
    getMovies: async (req, res )=>{
        try {
            const movie = await getServiceMovies();
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
        
    },
    //función en el controlador de películas que se encargue de desestructurar del body los datos de la película para así llamar a la función del servicio que implementamos en el paso anterior. Que maneje errores de manera tal que si todo salió correctamente, se envíe un mensaje descriptivo al cliente con el status 201. 
    createMovie : async (req, res) =>{
        try {
            const {title, year, director, duration, genre, rate, poster} = req.body
            const newMovie = await serviceCreateMovie({title, year, director, duration, genre, rate, poster})
            res.status(201).json(newMovie)
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }
}