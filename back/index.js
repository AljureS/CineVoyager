const app = require("./src/server.js")
require('dotenv').config()
const PORT = process.env.PORT
const { dbConnection } = require('./src/config/dbConnection.js')

dbConnection()
    .then((res)=>{
            app.listen(PORT, ()=>{
            console.log(`Server for Porject M2 working fine in port ${PORT}`);
        })
    })
    .catch((err)=>{
        console.log("Hay problemas con la coneccion a la DB" );
    })



/*
Implementar los elementos necesarios de manera tal que nuestra aplicación:

    Espere una petición de tipo GET a /movies.

    Al recibir la petición, debe ejecutarse el controlador correspondiente.

    El controlador responda al cliente que realizó la petición con un mensaje que indique que próximamente estarán disponibles los datos de películas.

*/