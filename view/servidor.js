let express = require('express')
let app = express()
let ControllerServidor = require("../controller/controller.servidor")
const oControllerServidor = new ControllerServidor();

app.get('/readAllServidores',
    async function (req,res)
    {
        var datos = await oControllerServidor.readControllerAllServidores();
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