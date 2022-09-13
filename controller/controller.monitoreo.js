let ModelMonitoreo = require('../model/model.monitoreo')
const oModelMonitoreo = new ModelMonitoreo()

class ControllerMonitoreo
{
    async readControllerMonitoreoLinea(ciudad,linea) {
       var datos = await oModelMonitoreo.readModelMonitoreoLinea(ciudad,linea)
       return datos
    }
}

module.exports = ControllerMonitoreo