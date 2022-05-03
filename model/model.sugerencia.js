const SchemaSugerencia = require('../schema/schema.sugerencia')
let {dbConnection} = require('../config/conn')
let {getCodeMongoDBString} = require('../config/errorCodeMongo')
const mongoose = require("mongoose");
class ModelSugerencia
{
    readModelSugerencia(ciudad,callback)
    {
    }

    async registerModelSugerencia(datos,callback)
    {
        try{
            await dbConnection()
            let oS = new SchemaSugerencia()
            oS.nombres = datos.nombres
            oS.telefono = datos.telefono
            oS.email = datos.email
            oS.segurencia = datos.segurencia
            oS.IdCiudad = mongoose.Types.ObjectId(datos.IdCiudad)
            await oS.save()
            callback(true,'ok')
        }catch (e) {
            callback(false,e.toString())
        }
    }

}

module.exports = ModelSugerencia