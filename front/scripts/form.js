const axios = require('axios')

// class Movie {
//     constructor({ title, year, director, duration, genre, rate, poster }){
//         if (!title || !poster || !director || !duration|| !genre|| !rate|| !year) {
//             alert('Missing required properties')
//             throw new Error('Missing required properties'); // es para parar la app
//         }
//         this.title= title,
//         this.poster = poster,
//         this.year = year,
//         this.director = director,
//         this.duration = duration,
//         this.genre = genre,
//         this.rate = rate
//     }
// }

module.exports={
    //Funcion que vacie el forms
    emptyForms: () =>{
        const inputs = document.querySelectorAll('#formAddMovie .input')

        inputs.forEach((input) =>{
            input.value =''
        })
    },
    //Funcon que envie el forms
    sendMovie : () => {
        const inputTitle = document.getElementById('inputTitle')
        const inputYear = document.getElementById('inputYear')
        const inputDirector = document.getElementById('inputDirector')
        const inputDuration = document.getElementById('inputDuration')
        const inputGenre = document.getElementById('inputGenre')
        const inputRate = document.getElementById('inputRate')
        const inputPoster = document.getElementById('inputPoster')
        
        let inputMovie = {}
        inputMovie.title = inputTitle.value
        inputMovie.year = inputYear.value
        inputMovie.director = inputDirector.value
        inputMovie.duration = inputDuration.value
        inputMovie.genre = inputGenre.value.split(',')
        inputMovie.rate = inputRate.value
        inputMovie.poster = inputPoster.value

        if (inputTitle.value === '' ) {
            alert('Missing movie Title')
        } else if (inputYear.value === ''){
            alert('Premier year is required')
        } else if (inputDirector.value === ''){
            alert('Missing Director of the movie')
        } else if (inputDuration.value === ''){
            alert('Missing duration of the movie')
        } else if (inputGenre.value === ''){
            alert('There has to be at least 1 genre')
        } else if (inputRate.value === ''){
            alert('Missing movie Rate')
        } else if (inputPoster.value === '' ){
            alert('Please add a movie URL')
        } else axios.post("http://localhost:3000/movies", inputMovie)
    }
}




