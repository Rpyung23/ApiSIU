let express = require('express')
let app = express()
let ControllerDistancia = require("../controller/controller.distancia")
let ControllerRuta = require("../controller/controller.ruta")
let {rutasIdUnicas,paradasInicioDestino} = require("../utils/distance")

const oControllerDistancia = new ControllerDistancia();
const oControllerRuta = new ControllerRuta()
app.get('/readDistances/:ciudad/:latitudI/:longitudI/:latitudF/:longitudF',
    async function (req,res)
    {
        var ciudad = req.params.ciudad
        var origins = [req.params.latitudI.toString()+','+req.params.longitudI.toString()];
        var destinations = [req.params.latitudF.toString()+','+req.params.longitudF.toString()]// ['-1.657198, -78.654732']

        var idRutasUnicas = []
        var resultadoFinal = []

        var datosOrigins = []
        var datosDestinations = []

        datosOrigins = await oControllerDistancia.readControllerDistancias(req.params.ciudad,origins);
        datosDestinations = await oControllerDistancia.readControllerDistancias(req.params.ciudad,destinations);

        idRutasUnicas = rutasIdUnicas(datosOrigins,datosDestinations)

        for (var i = 0;i<idRutasUnicas.length;i++)
        {
            try{
                datosOrigins = paradasInicioDestino(idRutasUnicas[i],datosOrigins)
                datosDestinations = paradasInicioDestino(idRutasUnicas[i],datosDestinations)
            }catch (e) {
                console.log(e)
            }

            if (datosOrigins!=null && datosDestinations != null){
                var obj = {
                    idRuta: idRutasUnicas[i],
                    origins:datosOrigins,
                    destinations:datosDestinations,
                    datosRuta : (await oControllerRuta.readControllerAllRutaById(idRutasUnicas[i])).datos
                }
                resultadoFinal.push(obj)
            }
        }
        res.status(200)
            .json({
                statusCode: resultadoFinal.length > 0 ? 200 : 300,
                result:resultadoFinal
            })
    });

module.exports = app