const renderFilms = require("./renderCards")

/*
    ? Requerir axios en el módulo de JavaSript donde estemos realizando la petición.

    ?Realizar la petición a la URL que veníamos trabajando utilizando el método get de axios.

    ? Manejar la asincronía de esta operación utilizando una de las dos estrategias vistas en la clase:

    ? Promesas, definiendo con el método then un success handler y con método catch un error handler.

*/
const axios = require("axios")

const getFilms =()=>{
    const promiseMovies = axios.get("http://localhost:3000/movies")
        promiseMovies
            .then((res)=>{
                res.data.forEach(renderFilms)
            })
            .catch((err)=>{
                console.error(err.message);
            })
    }

module.exports = getFilms




















/*
const getFilms = async () => {
    try {
        const response = await axios.get("http://localhost:3000/movies/");
        response.data.forEach(renderFilms);
    } catch (err) {
        console.error(err.message);
    }
};
*/

 



