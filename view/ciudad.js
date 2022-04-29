let express = require('express')
let app = express()
let ControllerCiudad = require("../controller/controller.ciudad")
const oControllerCiudd = new ControllerCiudad();
app.get('/verificaCiudad/:latitud/:longitud',
    async function (req,res)
{
    var datos = await oControllerCiudd.verificaControllerCiudad(req.params.latitud,req.params.longitud);
    try{
        if (datos!=null)
        {
            res.status(200)
                .json({
                    statusCode: datos.error == null && datos.datos != null ? 200 : 300,
                    msm: datos.error == null && datos.datos != null ? 'Datos consultados con éxito' : 'Ubicación fuera de rango.',
                    datos: datos.datos
                })

        }else{
            res.status(200)
                .json({
                    statusCode: 400,
                    msm: 'Error en Controller',
                    datos:[]
                })
        }
    }catch (e) {
        console.log("ERROR APIREST")
        console.log(e)
        res.status(400)
            .json({
                statusCode: 400,
                msm:e.toString(),
                datos:[]
            })
    }
});

module.exports = app