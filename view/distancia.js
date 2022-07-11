let express = require('express')
let app = express()
let ControllerDistancia = require("../controller/controller.distancia")
let ControllerRuta = require("../controller/controller.ruta")
let ControllerParada_ruta = require("../controller/controller.parada_ruta");
let oControllerParadaRuta = new ControllerParada_ruta()
let {rutasIdUnicas,paradasInicioDestino} = require("../utils/distance")


const oControllerDistancia = new ControllerDistancia();
const oControllerRuta = new ControllerRuta()
app.get('/readDistance/:ciudad/:latitudI/:longitudI/:latitudF/:longitudF',
    async function (req,res)
    {
        var ciudad = req.params.ciudad
        var origins = [req.params.latitudI.toString()+','+req.params.longitudI.toString()];
        var destinations = [req.params.latitudF.toString()+','+req.params.longitudF.toString()]// ['-1.657198, -78.654732']


        var paradas = await oControllerParadaRuta.readControllerAllParadasJoinRutaByCiudad(ciudad)

        var idRutasUnicas;
        var resultadoFinal = []

        var datosOrigins = []
        var datosDestinations = []

        var origenes;
        var destinos;

        datosOrigins = await oControllerDistancia.readControllerDistancias(ciudad,origins,paradas);
        datosDestinations = await oControllerDistancia.readControllerDistancias(ciudad,destinations,paradas);

        origenes = datosOrigins
        destinos = datosDestinations

        idRutasUnicas = rutasIdUnicas(origenes,destinos)

        for (var i = 0; i < idRutasUnicas.length; i++) {
            try {
                datosOrigins = paradasInicioDestino(idRutasUnicas[i], origenes);
                datosDestinations = paradasInicioDestino(idRutasUnicas[i], destinos);

            } catch (e) {
                console.log(e)
            }
            if (datosOrigins != null && datosDestinations != null) {
                var obj = {
                    idRuta: idRutasUnicas[i],
                    origins: datosOrigins,
                    destinations: datosDestinations,
                    datosRuta: (await oControllerRuta.readControllerAllRutaById(idRutasUnicas[i])).datos
                }
                resultadoFinal.push(obj)
            }

        }

        res.status(200)
            .json({
                statusCode: resultadoFinal.length > 0 ? 200 : 300,
                result: resultadoFinal
            })
    });

module.exports = app