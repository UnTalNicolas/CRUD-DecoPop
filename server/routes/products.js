const express = require('express');
const routesController = require('../controllers/products');
const router = express.Router();

// rutas
//ruta de login
/* router.post('/login', routesController.loggedUser); */
//insertar estudiante
router.post('/show', routesController.ctrlsProduct);
//Listar estudiante
router.get('/find-student', routesController.showProduct);
//1 producto
router.get('/:id', routesController.oneProduct);
//filtrar por nombre
router.get('/searchName/:nombre', routesController.searchProductName);
//Actualizar estudiante
router.put('/:id', routesController.modifyProduct);
//Eliminar estudiante
router.delete('/:id', routesController.removeProduct);

//export
module.exports = router;