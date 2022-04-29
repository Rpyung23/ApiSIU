let {dbConnection} = require('../config/conn')
let {getCodeMongoDBString} = require('../config/errorCodeMongo')
let oCon
let SchemaParada = require('../schema/schema.parada')
const mongoose = require("mongoose");

class ModelParada
{
    async readModelAllParadaByCiudad(idCiudad)
    {
        try{
            var conn = await dbConnection()
            var datos = await SchemaParada.find({idCiudad:mongoose.Types.ObjectId(idCiudad)})
            var response = {error:null,datos:datos}
            return response
        }catch (e) {
            console.log("ERROR MODEL PARADA")
            console.log(e)
            return {error:getCodeMongoDBString(e.code),datos:[]}
        }
    }
}

module.exports = ModelParada