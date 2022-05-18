const express = require('express');
const app = express();

app.set('port',process.env.PORT || 3000);

app.use(express.json());

app.use('/api/empleado', require('./routes/rutaEmpleado'));


app.listen(app.get('port'),()=>{
        console.log(`Server endando en el puerto ${app.get('port')}` )
});