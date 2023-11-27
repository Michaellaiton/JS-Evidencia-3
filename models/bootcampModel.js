const mongoose = require('mongoose')

//Definir un modelo solo para Mongo
const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique : true,
        required : [true ,"el bootcamp ya está repetido" ],
        maxlength:  [20 , "El Nombre solo debe tener 20 caracteres"]
    },
    phone:{
        type: Number,
        required : [true ,"el bootcamp ya está repetido" ],
        maxlength: [10 , "El Telefono  solo debe tener 10 caracteres"]
    },
    address:{
        type: String,
        required : [true ,"direccion requeridad" ],
    },
    topics:{
        type: [String],
        enum:["AI ",
            "BackEnd",
            "Front End",
            "Devops"]
    },
    averageRating : Number,
    createdAt:{
        type:Date,
        required : [true ,"Debe ingresar fecha de Creación" ],
    }
})
const Bootcamp = mongoose.model("Bootcamp",bootcampSchema)
module.exports = Bootcamp
