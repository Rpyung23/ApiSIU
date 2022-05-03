let ModelParada = require('../model/model.parada')
const oModelParada = new ModelParada()

class ControllerParada
{
    async readControllerAllParadasByCiudad(idCiudad)
    {
        try{
            var datos = await oModelParada.readModelAllParadaByCiudad(idCiudad)
            return datos;
        }catch (e) {
            console.log("ERROR CONTROLLER PARADAS")
            console.log(e)
            return  {error:e.toString(),datos:[]}
        }
    }


}

module.exports = ControllerParada