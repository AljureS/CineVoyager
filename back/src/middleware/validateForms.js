module.exports = {
    validateForm: (req, res, next)=>{
        const {title, year, director, duration, genre, rate, poster} = req.body

        if ((![title, year, director, duration, genre, rate, poster].every(Boolean)) ){
            return res.status(400).json({message: "Alguno de los datos esta vacio"})
        } else if ((year <1984) || (year >2024)){
            return res.status(400).json({message: "El año añadido es invalido"})
        } else next()
        
    }
}