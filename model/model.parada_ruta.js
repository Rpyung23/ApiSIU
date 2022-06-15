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
                {
                    $match:
                        {
                            idRuta:mongoose.Types.ObjectId(idRuta)
                        }
                },
                {
                    $lookup:{
                        from:'parada',//a q coleccion quiero unir
                        localField:'idParada',//atributo de la colecion q quiero utilizar para unir
                        foreignField:'_id',//atributo foraneo para unir las colecciones
                        as:'paradaRuta'//alias de la coleccion a la que quiero unir
                    }
                }
            ])
            var response = {error:null,datos:datos}
            console.log(response)
            return response
        }catch (e) {
            console.log("ERROR MODEL PARADA RUTA")
            console.log(e)
            return {error:getCodeMongoDBString(e.code),datos:[]}
        }
    }

    async readModelAllParadasJoinRutaByCiudad(ciudad)
    {
        await dbConnection()
        var datos = await SchemaParadaRuta.aggregate([
            {
                $lookup: {
                    from: "parada",
                    localField: "idParada",
                    foreignField: "_id",
                    as: "parada"
                }
            },
            {
                $lookup: {
                    from: "ruta",
                    localField: "idRuta",
                    foreignField: "_id",
                    as: "ruta"
                }
        }])
        return datos
    }

}


module.exports = ModelParada_ruta