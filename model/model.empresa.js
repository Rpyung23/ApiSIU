let {dbConnection} = require('../config/conn')
let {getCodeMongoDBString} = require('../config/errorCodeMongo')
let SchemaEmpresa = require('../schema/schema.empresa')
const mongoose = require("mongoose");

class ModelEmpresa{
    async readModelAllEmpresaByCiudad(idCiudad)
    {
        try {
            var conn = await dbConnection()
            var datos = await SchemaEmpresa.find({idCiudad:mongoose.Types.ObjectId(idCiudad)})
            var response = {error:null,datos:datos}
            console.log(response)
            return response
        }catch (e) {
            console.log("ERROR MODEL EMPRESA")
            console.log(e)
            return {error:getCodeMongoDBString(e.code),datos:[]}
        }
    }

    async readModelGetConnectionsEmpresaByCiudad(idCiudad)
    {

        try {
            var conn = await dbConnection()
            var datos = await SchemaEmpresa.aggregate([
                {
                    $match:
                        {
                            idCiudad:mongoose.Types.ObjectId(idCiudad)
                        }
                },
                {
                    $lookup:{
                        from:'servidor',
                        localField:'idServidor',
                        foreignField:'_id',
                        as:'servidor'
                    }
                }
            ])
            var response = {error:null,datos:datos}
            return response
        }catch (e) {
            console.log("ERROR MODEL EMPRESA")
            console.log(e)
            return {error:getCodeMongoDBString(e.code),datos:[]}
        }
    }
}

module.exports = ModelEmpresa