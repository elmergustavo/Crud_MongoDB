const Alumno = require('../model/Alumno')


//MOnstrar
module.exports.mostrar = (req, res)=> {
    Alumno.find({}, (error, alumnos) => {
        if(error){
            return res.status(500).json({
                message: 'Error monstrano los alumnos'
            })
        }
        console.log(alumnos)
    })
}