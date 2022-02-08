const mongoose = require('mongoose')
//const url = 'mongodb://localhost/db_alumnos'

mongoose.connect('mongodb://localhost/db_alumnos');

const db = mongoose.connection
db.on('error', console.error.bind(console, "Error al conectarse"))
db.once('open', function callback(){
    console.log("Conexion exitosa")
})

module.exports = db