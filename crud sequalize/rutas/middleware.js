    const jwt = require('jwt-simple');
    const moment = require('moment')
const checkToken = (req,res,next)=>{
    if(!req.headers['token']){
        return res.json({
            error:"Necesitas incluir el token en la cabecera"
        })
    }

    const userToken = req.headers['token'];
    let payload = {};
    
    try {
        payload = jwt.decode(userToken,'se creto')
        
    } catch (error) {
        return res.json({
            error : 'El token es invalido'
        })
    }

    if(payload.expiredAd < moment().unix()){
        return res.json({
            error : 'El token ha espirado'
        })
    }
    req.usuarioId = payload.usuarioId;
    next()
}

module.exports = {

    checkToken
}