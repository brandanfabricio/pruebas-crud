const mysql = require('mysql');


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:'3306'
});

con.connect(function(err){
    if (err) throw err;
    console.log('db Conectado')
    con.query('CREATE DATABASE mybdprue', function(err,result){
        if(err)throw err;
        console.log('Database created')
    })
});



