const express = require('express')
const app = express();
const bodyParser = require('body-parser');


 require('./db')




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api',require('./rutas/api'))




app.listen(3000,()=>{
    console.log('Servidor andando ')
})