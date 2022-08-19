const mongoose = require('mongoose');
const { Schema } = mongoose;

const Mensaje = new Schema({
    nombre: String,
    correo: String,
    mensaje: String,
    // date: Date
}, {
    collection: "Mensajes"
})

module.exports = mongoose.model("Mensaje", Mensaje);