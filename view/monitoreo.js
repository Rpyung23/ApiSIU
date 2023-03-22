const express = require('express')
const app = express()
let ControllerMonitoreo = require('../controller/controller.monitoreo')
let oControllerMonitoreo = new ControllerMonitoreo()

app.get('/readMonitoreoLinea/:ciudad/:linea/:viaje_or_ruta', async function (req, res) {
    var linea = req.params.linea
    var ciudad = req.params.ciudad
    var viaje_or_ruta = req.params.viaje_or_ruta

    console.log(ciudad)
    if(viaje_or_ruta == 'r' && ciudad == '62e2b34a4212142c0ff78ff8'){
        res.status(200).json({
            status_code : 300,
            msm : 'SIN MONITOREO POR RUTA',
            datos : [],
        })
    }else{
        try{
            var datos = await oControllerMonitoreo.readControllerMonitoreoLinea(ciudad,linea)
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
    }
})


module.exports = app