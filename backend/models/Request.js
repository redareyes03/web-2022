const mongoose = require('mongoose');
const { Schema } = mongoose;

const Request = new Schema({
    plan: String,
    planId: Number,
    nombre: String,
    correo: String,
    telefono: String,
    contactar: String,
    date: Date
}, {
    collection: "Requests"
})

module.exports = mongoose.model("Request", Request);