const distance = require("google-distance-matrix");
const NodeDistanceMatrix = require('node-distance-matrix');
const {distanciaParadaAproximada} = require('../utils/distance')
const e = require("express");

const distanceWalking = 0.5;/**METROS**/
const veloWalking = 5; /**km/h**/
class ModelDistancia
{
    async readModelDistancia(ciudad,paradas,origins)
    {
        try{
            var datos = []
            var listParadasPosition = []
            var originSeparado = origins.toString().split(",")
            for (var j = 0; j < paradas.length; j++)
            {
                var distanceAprox = distanciaParadaAproximada(originSeparado[0],originSeparado[1],paradas[j].parada.position.lat,paradas[j].parada.position.lng)
                if(distanceAprox < distanceWalking){
                    var obj = distanceAprox
                    var time = distanceAprox/veloWalking
                    paradas[j].distanciaAproximada = obj
                    paradas[j].tiempoAproximado = Math.round((time*100))
                    //paradas[j].push()
                    listParadasPosition.push(paradas[j])
                }
            }
            return listParadasPosition;
        }catch (e) {
            console.log("ERROR MODEL DISTANCIA")
            console.log(e)
            return [];
        }
    }
}

module.exports = ModelDistancia