let ModelConductor = require('../model/model.conductor')
const oModelConductor = new ModelConductor()

class ControllerConductor
{
    async readControllerConductorByPlaca(placa)
    {
        try{
            var datos = await oModelConductor.readModelConductorByPlaca(placa)
            return datos;
        }catch (e) {
            console.log("ERROR CONTROLLER CONDUCTOR")
            console.log(e)
            return  {error:e.toString(),datos:[]}
        }
    }
}

module.exports = ControllerConductor