let {dbConnection} = require('../config/conn')
let {getCodeMongoDBString} = require('../config/errorCodeMongo')
let SchemaRuta = require('../schema/schema.ruta')
const mongoose = require("mongoose");

class ModelRuta
{
    async readModelAllRutaByCiudad(idCiudad)
    {
        try{
            var conn = await dbConnection()
            var datos = await SchemaRuta.find({IdCiudad:mongoose.Types.ObjectId(idCiudad)})
            var response = {error:null,datos:datos}
            console.log(response)
            return response
        }catch (e) {
            console.log("ERROR MODEL RUTA")
            console.log(e)
            return {error:getCodeMongoDBString(e.code),datos:[]}
        }
    }


    async readModelAllRutaById(idRuta)
    {
        try{
            var conn = await dbConnection()
            var datos = await SchemaRuta.findById({_id:mongoose.Types.ObjectId(idRuta)})
            var response = {error:null,datos:datos}
            return response
        }catch (e) {
            console.log("ERROR MODEL RUTA")
            console.log(e)
            return {}
        }
    }


}

module.exports = ModelRuta