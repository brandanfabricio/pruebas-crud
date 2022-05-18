const ruter  = require('express').Router();
const ControladorEmpleado = require('../controllers/Empleados');


ruter.get('/',ControladorEmpleado.Lista)
ruter.get('/:id',ControladorEmpleado.UnElemento)


ruter.delete('/:id',ControladorEmpleado.Borrar)

ruter.post('/add',ControladorEmpleado.Agregar)

ruter.put('/update/:id',ControladorEmpleado.Actualizar)
module.exports = ruter