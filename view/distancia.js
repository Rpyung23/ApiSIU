let express = require('express')
let app = express()
let ControllerDistancia = require("../controller/controller.distancia")
const oControllerDistancia = new ControllerDistancia();

app.get('/readDistances/:ciudad',
    async function (req,res)
    {
        var datos = await oControllerDistancia.readControllerDistancias(req.params.ciudad,(error,datos)=>
        {
            try{
                if (datos!=null)
                {
                    res.status(200)
                        .json({
                            statusCode: datos.distances.length > 0 ? 200 : 300,
                            msm: datos.distances.length > 0 ? 'Datos consultados con éxito' : 'No existen datos disponibles',
                            datos: datos
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

    });

module.exports = app