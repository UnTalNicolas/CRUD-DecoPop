const model = require('../models/products');
const loginModel = require('../models/users');

const controllers = {

    //login Usuario
    loggedUser: (req, res)=>{
        console.log('esta aqui en controladores js')
        let params = req.body;
        console.log(params)
        loginModel.findOne( {email: params.userName}, (error, userLogged)=>{
            console.log(email);
            if(error){
                return res.status(500).send({
                    message: 'Error de conexion',
                    statusCode: 500
                })
            }else{
                if(!userLogged){
                    res.status(200).send({
                        message: 'El usuario no esxiste',
                        statusCode: 400
                    })
                }else{
                    if(params.userPasswor == userLogged.userPasswor){
                        res.status(200).send({
                            message:'Bienvenido',
                            statusCode: 200,
                            User: userLogged
                        })
                    }else{
                        res.status(200).send({
                            message: 'Datos Incorrectos',
                            statusCode: 204,
                        })
                    }
                }
            }
        })
    },

    // insertar estudiante 
    ctrlsProduct: (req, res)=>{
        var product = new model();
        var params = req.body;
        product.nombre = params.nombre;
        product.categoria = params.categoria;
        product.oferta = params.oferta;   
        product.valor = params.valor,

        product.save((err, productStore)=>{
            if (err){
                return res.status(500).send({message: 'Error al guardar'})
            }
            else{
                if(!productStore){
                    return res.status(404).send({message: 'El objeto se encuentra vacio'})
                }
                else res.status(200).send({
                    statusCode: 200,
                    message: 'Producto Registrado',
                    product: productStore
                })
            }
        })
    },

    //  Listar 1 estudiante
    oneProduct: (req, res)=>{
        var productId = req.params.id;
        model.findById(productId, (err, findProduct)=>{
            if (err){
                return res.status(500).send({message: 'Error al mostrar'})
            }
            else{
                if(!findProduct){
                    return res.status(404).send({message: 'El objeto solicitado no se encuentra'})
                }
                else res.status(200).send({
                    statusCode: 200,
                    message: 'Estas en la lista de todos los productos',
                    oneProduct: findProduct
                })
            }
        })
    },


    //  Listar estudiante
    showProduct: (req, res)=>{
        model.find((err, findProduct)=>{
            if (err){
                return res.status(500).send({message: 'Error al mostrar'})
            }
            else{
                if(!findProduct){
                    return res.status(404).send({message: 'El objeto solicitado no se encuentra'})
                }
                else res.status(200).send({
                    statusCode: 200,
                    message: 'Estas en la lista de todos los productos',
                    listProduct: findProduct
                })
            }
        })
    },

    searchProductName: (req, res)=>{
        let productName = '';
        if(req.params && req.params.nombre){
            productName =  new RegExp (`.*${req.params.nombre}.*`, 'i')
        }
        /* let productName = req.params.nombre */
        console.log(productName);     

        model.find( {nombre: productName}, (error, dataProduct)=>{
            if(error){
                res.status(500).send({
                    statusCode: 500,
                    message: 'Error en el servidor'
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: 'Informacion del Producto',
                    searchProduct: dataProduct
                })
            }
        })
    },

    //Modificar estudainte
    modifyProduct: (req, res)=>{
        var productId = req.params.id;
        var newProductData = req.body;

        model.findByIdAndUpdate(productId, newProductData, (err, modifyData)=>{
            if (err){
                return res.status(500).send({message: 'Error al mostrar'})
            }
            else{
                if(!modifyData){
                    return res.status(404).send({message: 'El objeto a modificar no se encuentra'})
                }
                else res.status(200).send({
                    statusCode: 200,
                    message: 'Se edito un producto correctamente',
                    product: newProductData
                })
            }
        })

    },

    //Eliminar estudiante
    removeProduct: (req, res)=>{
        var productId = req.params.id;

        model.findByIdAndDelete(productId, (err, productRemove)=>{
            if (err){
                return res.status(500).send({message: 'Error al mostrar'})
            }
            else{
                if(!productRemove){
                    return res.status(404).send({message: 'El objeto a eliminar no se encuentra'})
                }
                else res.status(200).send({
                    statusCode: 200,
                    message: 'Se Elimino un producto correctamente',
                    product: productRemove
                })
            }
        })
    }   

}
//Export
module.exports = controllers