const mysql = require('mysql');

const ConecionMysql = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"company",
        multipleStatements:true
});

ConecionMysql.connect((err)=>{
        if(err)  throw err;

        console.log('DB conectado')
        
});


module.exports = ConecionMysql;