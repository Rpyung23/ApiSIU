let {dbConnection} = require('../config/conn')
let {getCodeMongoDBString} = require('../config/errorCodeMongo')
let SchemaServidor = require('../schema/schema.servidor')

class ModelServidor
{
    async readModelAllServidor()
    {
        try{
            var conn = await dbConnection()
            var datos = await SchemaServidor.find()
            var response = {error:null,datos:datos}
            console.log(response)
            return response
        }catch (e) {
            console.log("ERROR MODEL SERVIDOR")
            console.log(e)
            return {error:getCodeMongoDBString(e.code),datos:[]}
        }
    }
}

module.exports = ModelServidor