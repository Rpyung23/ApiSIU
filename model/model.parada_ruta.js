let {dbConnection} = require('../config/conn')
let {getCodeMongoDBString} = require('../config/errorCodeMongo')
let SchemaParadaRuta = require('../schema/schema.parada_ruta')
const mongoose = require("mongoose");

class ModelParada_ruta
{
    async readModelAllParadasByRuta(idRuta){
        try{
            var conn = await dbConnection()
            var datos = await SchemaParadaRuta.find({idRuta:mongoose.Types.ObjectId(idRuta)})
            var response = {error:null,datos:datos}
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