const express = require('express');
const path = require('path');
const morgan = require('morgan');
const myConnectionDB = require('express-myconnection');
const mysql = require('mysql')

const app = express();
const customerRuta = require('./routes/customer')


app.set('port',process.env.PORT || 3000);
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(morgan('dev'));
app.use(express.json());


const dbOption ={
    host : 'localhost',
    user : 'root',
    password: 'root',
    port : 3306,
    database: 'crudnodejsmysql',
    multipleStatements: true
};

app.use(myConnectionDB(mysql,dbOption,'single'))


app.use('/api',customerRuta);
app.use(express.static(path.join(__dirname + 'public')))

// const coneccionSql = mysql.createConnection(dbOption);

//     coneccionSql.connect(function(err){
//             if(err){
//                 console.log(err);
//                 return;
//             }else{
//                 console.log('db conectado')
//             }
//     })




app.use(express.urlencoded({extended : false}))











app.listen(app.get('port'), ()=>{
        console.log(`server on port ${app.get('port')}`)
})