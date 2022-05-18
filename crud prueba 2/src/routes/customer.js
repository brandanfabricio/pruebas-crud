const route = require('express').Router();
const Customer = require('../controllers/customerControler')


route.get('/',Customer.TodasLasDirecciones);
route.post('/add',Customer.AgregarDato);
route.put('/updata/:id',Customer.Actualizar)
route.delete('/delete/:id',Customer.Borrar);


route.get('/:id',Customer.UnsoloElemento)


module.exports = route