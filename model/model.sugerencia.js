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
            oS.telefono = datos.telefono
            oS.nombres = datos.nombres
            oS.email = datos.email
            oS.descripcion = datos.descripcion
            oS.IdCiudad = mongoose.Types.ObjectId(datos.IdCiudad)
            console.log();
            await oS.save()
            callback(true,'ok')
        }catch (e) {
            callback(false,e.toString())
        }
    }

}

module.exports = ModelSugerencia