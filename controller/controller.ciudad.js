let ModelCiudad = require('../model/model.ciudad')
const oModelCiudad = new ModelCiudad()
class ControllerCiudad
{
    async verificaControllerCiudad(lat,lng)
    {
        try{
            var datos = await oModelCiudad.verificaLocation(lat,lng)
            return datos;
        }catch (e) {
            console.log("ERROR CONTROLLER CIUDAD")
            console.log(e)
            return  {error:e.toString(),datos:[]}
        }
    }
}

module.exports = ControllerCiudad