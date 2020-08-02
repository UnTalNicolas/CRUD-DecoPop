var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
const routerProduct = require('./routes/products')
var app = express();

//Middleware JSON
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors());

//Middleware rutas
 app.use('/api', routerProduct)

//Export
module.exports = app