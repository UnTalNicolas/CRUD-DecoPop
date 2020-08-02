const mongoose = require('mongoose');
const {Schema} = mongoose;


//Crear schema de usuaruio
const userLogin = new Schema({
    userName: String,
    userPasswor: String,
})

//export modelo
module.exports = mongoose.model('users', userLogin);