let ModelRuta = require('../model/model.ruta')
const oModelRuta = new ModelRuta()

class ControllerRuta
{
    async readControllerAllRutasByCiudad(idCiudad)
    {
        try{
            var datos = await oModelRuta.readModelAllRutaByCiudad(idCiudad)
            return datos;
        }catch (e) {
            console.log("ERROR CONTROLLER RUTAS")
            console.log(e)
            return  {error:e.toString(),datos:[]}
        }
    }

    async readControllerAllRutaById(idRuta)
    {
        try{
            var datos = await oModelRuta.readModelAllRutaById(idRuta)
            return datos;
        }catch (e) {
            console.log("ERROR CONTROLLER RUTAS")
            console.log(e)
            return  {}
        }
    }

}

module.exports = ControllerRuta