const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const{User} = require('../../db')
const {check,validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');




router.post('/register',[
    check('username',"El nombre es obligarorio").not().isEmpty(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    check('email','El email debe ser correcto').isEmail()
],async(req,res)=>{
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(422).json({errores:errores.array()})
    }

    req.body.password = bcryptjs.hashSync(req.body.password,10);
    const user = await  User.create(req.body);

    console.log(user)
    res.json(user);


})




router.post('/login',async (req,res)=>{
    const user = await User.findOne({
        where:{
            email: req.body.email
        }
    })

    if(user){
        const comparacion = bcryptjs.compareSync(req.body.password, user.password);
        if(comparacion){
            res.json({
                success: crearTokent(user)
            })
        }else{
            res.json({error : "Error en El usuao y/o cntraseña "})
        }


    }else{
        res.json({error : "Error en El usuao y/o cntraseña "})
    
    }

});


const crearTokent = (user)=>{
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload,'secreto')
}



module.exports = router;