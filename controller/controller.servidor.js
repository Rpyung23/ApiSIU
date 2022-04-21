let ModelServidor = require('../model/model.servidor')
const oModelServidor = new ModelServidor()

class ControllerServidor
{
    async readControllerAllServidores()
    {
        try{
            var datos = await oModelServidor.readModelAllServidor()
            return datos;
        }catch (e) {
            console.log("ERROR CONTROLLER SERVIDORES")
            console.log(e)
            return  {error:e.toString(),datos:[]}
        }
    }

}

module.exports = ControllerServidor