const mongoose = require('mongoose');
const {Schema} = mongoose;

//crear schema
const productSchema = new Schema({
    nombre: String,
    categoria: String,
    oferta: String,
    valor: Number,
})


//export modelo
module.exports = mongoose.model("products", productSchema);