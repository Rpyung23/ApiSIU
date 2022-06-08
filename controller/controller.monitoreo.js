let ModelMonitoreo = require('../model/model.monitoreo')
const oModelMonitoreo = new ModelMonitoreo()

class ControllerMonitoreo
{
    async readControllerMonitoreoLinea(linea) {
       var datos = await oModelMonitoreo.readModelMonitoreoLinea(linea)
       return datos
    }
}

module.exports = ControllerMonitoreo