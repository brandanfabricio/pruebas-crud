const Sequelize = require('sequelize');
const FilmModel = require('./filme');
const UserModel = require('./usuarios');

const db = new Sequelize('prueba','root','root',{
    
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    operatorsAliases: false,
    define: {
        timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }

        

})


const Film = FilmModel(db,Sequelize);
const User = UserModel(db,Sequelize)


db.sync({force:false})
    .then(()=>{
        console.log('Tabla sincronizada');

    })
    module.exports = {Film,User}


