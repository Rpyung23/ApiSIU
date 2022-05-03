let express = require('express')
let app = express()
let ControllerDistancia = require("../controller/controller.distancia")
const oControllerDistancia = new ControllerDistancia();

app.get('/readDistances/:ciudad',
    async function (req,res)
    {
        var origins = ['-1.65579125689191, -78.6780999210139'];
        var destinations = ['-1.657198, -78.654732']

        var datosOrigins = await oControllerDistancia.readControllerDistancias(req.params.ciudad,origins);
        var datosDestinations = await oControllerDistancia.readControllerDistancias(req.params.ciudad,destinations);

        res.status(200)
            .json({
                statusCode: '200',
                msm: 'msm',
                datosOrigins: datosOrigins,
                datosDestinations:datosDestinations
            })
    });

module.exports = app