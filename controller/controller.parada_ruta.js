let ModelParada_ruta = require('../model/model.parada_ruta')
const oModelParada_ruta = new ModelParada_ruta()

class ControllerParada_ruta
{
    async readControllerAllParadasByRuta(idRuta)
    {
        try{
            var datos = await oModelParada_ruta.readModelAllParadasByRuta(idRuta)
            return datos;
        }catch (e) {
            console.log("ERROR CONTROLLER PARADAS RUTA")
            console.log(e)
            return  {error:e.toString(),datos:[]}
        }
    }

}

module.exports = ControllerParada_ruta