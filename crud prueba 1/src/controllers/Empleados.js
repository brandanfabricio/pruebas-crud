const sql = require('../db/ConexDB')

class ControladorEmpleado {

    Lista(req,res){

            sql.query('SELECT * FROM empleado', (err,tabla)=>{
                    if(err){
                        res.json(err)
                    }else{
                        res.json({
                         tabla
                     
                        })
                    }

            })    ;

    }

    UnElemento (req,res){
        const {id} = req.params;
        sql.query('SELECT * FROM empleado where  id = ?',[id],(err,tabla)=>{
                if(err){
                    res.json(err)
                }
                res.json(tabla)
        } )

    }

    Borrar(req,res){
        const {id} = req.params;
        sql.query('DELETE FROM empleado where id = ?',[id],(err,tabla)=>{
                if(err){
                    res.json(err)
                }
                res.json({
  
                    estado :"Dato elimunado"
                })
        })
    }


    Agregar(req,res){
       const dato = req.body;
       // console.log(dato)
       sql.query('insert into empleado set ?' ,[dato],(err,tabla)=>{
            if(err){
                res.json(err)
            }
            res.json({
                estado : 'Dato Añanido'
            })
       })

    }

    Actualizar(req,res){
        const nuevoDato = req.body;
        const {id}= req.params;
        sql.query('UPDATE empleado set ? where id = ?',[nuevoDato,id],(err,tabla)=>{
                if(err){
                    res.json(err)
                }
                res.json({
                    estado :" Dato actualizado "
                })
        })
    }
}


module.exports = new  ControladorEmpleado;