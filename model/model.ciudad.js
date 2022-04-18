let {dbConnection} = require('../config/conn')
let {getCodeMongoDBString} = require('../config/errorCodeMongo')
let SchemaCiudad = require('../schema/schema.ciudad')

class ModelCiudad
{
    async verificaLocation(lat,lng)
    {
        try{
            var conn = await dbConnection()
            var datos = await SchemaCiudad.find({estado:true})
            var response = {error:null,datos:datos}
            return response
        }catch (e) {
            console.log("ERROR MODEL CIUDAD")
            console.log(e)
            return {error:getCodeMongoDBString(e.code),datos:[]}
        }
    }
}

module.exports = ModelCiudad