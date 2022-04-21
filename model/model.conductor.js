let {dbConnection} = require('../config/conn')
let {getCodeMongoDBString} = require('../config/errorCodeMongo')
let SchemaConductor = require('../schema/schema.conductor')
const mongoose = require("mongoose");

class ModelConductor
{
    async readModelConductorByPlaca(placa)
    {
        try{
            var conn = await dbConnection()
            //var datos = await SchemaConductor.find({placa:placa})
            var datos = await SchemaConductor.aggregate([
                {
                    $match:{placa:placa}
                },
                {
                    $lookup:{
                        from:'empresa',
                        localField:'idEmpresa',
                        foreignField:'_id',
                        as:'empresa'
                    }
                }
            ])
            var response = {error:null,datos:datos}
            console.log(response)
            return response
        }catch (e) {
            console.log("ERROR MODEL CONDUCTOR")
            console.log(e)
            return {error:getCodeMongoDBString(e.code),datos:[]}
        }
    }
}

module.exports = ModelConductor