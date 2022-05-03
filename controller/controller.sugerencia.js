let ModelSugerencia = require('../model/model.sugerencia')
let oS = new ModelSugerencia()
class ControllerSugerencia
{
    async registerControllerSugerencia(datos,callback)
    {
        await oS.registerModelSugerencia(datos,(bandera,msm)=>{
          callback(bandera,msm)
        });
    }
}

module.exports = ControllerSugerencia