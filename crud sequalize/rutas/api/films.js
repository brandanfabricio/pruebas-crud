const router = require('express').Router();
const {Film} =require('../../db')

router.get('/', async (req,res)=>{
 const films = await Film.findAll();
    res.json(films)

})

router.post('/',async (req,res)=>{
    const nuevofilms = await Film.create(req.body);
    console.log(nuevofilms)
    res.json(nuevofilms)
})

router.put('/:filmsId',async (req,res)=>{

//    const actualizar = await Film.findOne({where:{ id:req.params.filmsid}});
//    console.log(actualizar)
//    
//    res.json(actualizar)
    console.log(req.body)
        const actualizar = await Film.update(req.body,
            {
                where:{
                    id:req.params.filmsId
                }
            }
        );
        res.json({success:"Se actualizo"})
});


router.delete('/:filmId', async (req,res)=>{
    await Film.destroy({
        where:{
            id:req.params.filmId
        }
    })

        res.json({
            success: 'Se elimino la pelicula'
        })
})

module.exports = router;

