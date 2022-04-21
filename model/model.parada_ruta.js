let {dbConnection} = require('../config/conn')
let {getCodeMongoDBString} = require('../config/errorCodeMongo')
let SchemaParadaRuta = require('../schema/schema.parada_ruta')
const mongoose = require("mongoose");

class ModelParada_ruta
{
    async readModelAllParadasByRuta(idRuta){
        try{
            var conn = await dbConnection()
            //var datos = await SchemaParadaRuta.find({idRuta:mongoose.Types.ObjectId(idRuta)})
            var datos = await SchemaParadaRuta.aggregate([
                {$match:{idRuta:mongoose.Types.ObjectId(idRuta)}},
                {
                    $lookup:{
                        from:'parada',//a q coleccion quiero unir
                        localField:'idParada',//atributo de la colecion q quiero utilizar para unir
                        foreignField:'_id',//atributo foraneo para unir las colecciones
                        as:'paradaRuta'//alias de la coleccion a la que quiero unir
                    }
                }
            ])
            var datosP = []
            if (datos.length>0){
                for (var i = 0;i<datos.length;i++)
                {
                    var obj = {
                        _id :datos[i]._id,
                        idParada:datos[i].idParada,
                        idRuta:datos[i].idRuta,
                        fechaCreacion:datos[i].fechaCreacion,
                        parada:{
                            id:datos[i].paradaRuta[0]._id,
                            position:datos[i].paradaRuta[0].position
                        }
                    }
                    datosP.push(obj)
                }
            }
            var response = {error:null,datos:datosP}
            console.log(response)
            return response
        }catch (e) {
            console.log("ERROR MODEL PARADA")
            console.log(e)
            return {error:getCodeMongoDBString(e.code),datos:[]}
        }
    }
}


module.exports = ModelParada_ruta