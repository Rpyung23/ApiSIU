let ModelDistancia = require('../model/model.distancia')
const ControllerParada = require("../controller/controller.parada");
const ControllerParada_ruta = require("../controller/controller.parada_ruta");
const oControllerParada = new ControllerParada()
const oControllerParadaRuta = new ControllerParada_ruta()
const e = require("express");

const oModelDistancia = new ModelDistancia()

class ControllerDistancia
{
    async readControllerDistancias(ciudad,origins)
    {
        try{
            var datos = []
            var paradas = await oControllerParadaRuta.readControllerAllParadasJoinRutaByCiudad(ciudad)
            /*let paradas = await oControllerParada.readControllerAllParadasByCiudad(ciudad);*/
            var LONGITUD_PEDAZOS = Math.trunc(paradas.length / 25);
            var mListaParadasDivider = []


            console.log("LONGITUD PEDAZOS : "+LONGITUD_PEDAZOS)
            /**DIVIDE LAS PARADAS EN ARRAYS DE TAMAÑO 25**/

            var start = 0;
            var end = 25;

            for(var i = 0;i<LONGITUD_PEDAZOS;i++)
            {

                mListaParadasDivider.push(paradas.slice(start,end))
                start = start + 25;
                end = end + 25;
            }

            /******************************************/

            for (var j=0;j<mListaParadasDivider.length;j++)
            {
                var resultadoModelDistance = await oModelDistancia
                    .readModelDistancia(ciudad,mListaParadasDivider[j],origins)

                for (var k = 0;k<resultadoModelDistance.length;k++)
                {
                    datos.push(resultadoModelDistance[k])
                }
            }

            return datos

        }catch (e) {
            console.log("ERROR CONTROLLER DISTANCIAS")
            console.log(e)
            return []
        }
    }
    async readControllerTiempoViaje(origin,destination)
    {
        try{
            var datos = await oModelDistancia.readModelTiempoViaje(origin,destination)
            return datos

        }catch (e) {
            console.log("ERROR CONTROLLER DISTANCIAS")
            console.log(e)
            return []
        }
    }
}

module.exports = ControllerDistancia