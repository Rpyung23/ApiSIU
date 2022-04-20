let express = require('express')
let app = express()
let ControllerParadaRuta = require("../controller/controller.parada_ruta")
const oControllerParadaRuta = new ControllerParadaRuta();

app.get('/readModelAllParadasByRuta/:idRuta',
    async function (req,res)
    {
        var datos = await oControllerParadaRuta.readControllerAllParadasByRuta(req.params.idRuta);
        try{
            if (datos!=null)
            {
                res.status(200)
                    .json({
                        statusCode: datos.datos.length > 0 ? 200 : 300,
                        msm: datos.datos.length > 0 ? 'Datos consultados con éxito' : 'No existen datos disponibles',
                        datos: datos.datos
                    })

            }else{
                res.status(200)
                    .json({
                        statusCode: 400,
                        msm:datos == null ? 'Error en Controller' : datos.error,
                        datos:[]
                    })
            }
        }catch (e) {
            console.log("ERROR APIREST")
            console.log(e.toString())
            res.status(400)
                .json({
                    statusCode: 400,
                    msm:e.toString(),
                    datos:[]
                })
        }

    });

module.exports = app