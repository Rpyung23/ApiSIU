let express = require('express')
let app = express()
let  ControllerSugerencia = require('../controller/controller.sugerencia')
const oControllerSugerencia = new ControllerSugerencia()

app.post('/sugerencia',async function(req,res)
{
    await oControllerSugerencia.registerControllerSugerencia(req.body.datos,(bandera,msm)=>
    {
        res.status(200).json({
            StatusCode:bandera ? 200 : 400,
            msm:msm
        })
    });
})

module.exports = app