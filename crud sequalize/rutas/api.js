const router = require('express').Router();
const {checkToken}= require('./middleware')
const apiFilmsRouter = require('./api/films');
const apiUsuario = require('./api/usuario')

router.use('/films',checkToken,apiFilmsRouter);
router.use('/user',apiUsuario);






module.exports =router;