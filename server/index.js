const mongoose = require('mongoose');
const colors = require('colors');
const app = require('./app');
const port = 3001;

const URI = 'mongodb://localhost:27017/eduBIT';


// conection to mongo
mongoose.connect(URI)

// validar la conexion DB
const DB = mongoose.connection
DB.on('error', console.error.bind(console, 'conection error'))
DB.once('open', function(){
    console.log('Conexion establecida con exito de Mongo'.blue)
    app.listen(port, ()=>{
        console.log(`Conexion con el puerto ${port} establecida`.cyan)
    })
})