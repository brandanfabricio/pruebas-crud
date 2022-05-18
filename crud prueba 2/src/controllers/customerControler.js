class CustomerRutas{

    TodasLasDirecciones  (req,res){
        req.getConnection((err,conec)=>{
                if(err) throw err
                conec.query('SELECT * FROM customer',(err,tabla)=>{
                    if(err)  res.json( err);

                    res.json({tabla})
                })
        })      
        
    
    }


    UnsoloElemento(req,res){
        const {id}= req.params;
        req.getConnection((err,conec)=>{
            if(err) throw err;
            conec.query('SELECT * FROM customer WHERE id =  ?',[id],(err,tabla)=>{
                if(err){
                    res.json(err)
                }
                res.json(tabla[0])
            })
        })
    }




    AgregarDato(req,res){
            const data = req.body;
        req.getConnection((err,conec)=>{
            if(err)throw err;
        conec.query('INSERT INTO customer set ?',data,(err,tabla)=>{
            if(err){
                res.json(err)
            }
                res.json({
                    success:"Dato insertado"
                })

            })
        })
        
    }

    Actualizar(req,res){
     const {id} = req.params;
     const newData = req.body;

        req.getConnection((err,conec)=>{
            if(err) throw err;
                conec.query('UPDATE customer set ? where id= ?',[newData,id],(err,tabla)=>{
                        if(err){
                            res.json(err)
                        }

                        res.json({
                            success :"Dato actualizado"
                        })
                })

        })

    }

    Borrar(req,res){

        const {id} = req.params;
        req.getConnection((err,conec)=>{
                if(err) throw err;
                conec.query('DELETE FROM customer where id = ?', [id],(err,resp)=>{
                    if(err){
                        res.json(err)
                    }
                    res.json({
                        success: "Dato Eliminado"
                    })
                })
        })
    }


}


module.exports = new CustomerRutas