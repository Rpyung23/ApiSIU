const express = require('express')
const app = express()
let ControllerMonitoreo = require('../controller/controller.monitoreo')
let oControllerMonitoreo = new ControllerMonitoreo()

app.get('/readMonitoreoLinea/:linea', async function (req, res) {
    var linea = req.params.linea
    try{
        var datos = await oControllerMonitoreo.readControllerMonitoreoLinea(linea)
        res.status(200).json({
            status_code : datos.length > 0 ? 200 : 300,
            msm : datos.length > 0 ? 'Datos consultados con éxito' : 'No existen datos disponibles',
            datos : datos
        })

    }catch (e) {
        res.status(200).json({
            status_code : 400,
            msm : e.toString(),
            datos : [],
        })
    }
})

module.exports = app