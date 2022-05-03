const distance = require("google-distance-matrix");
const NodeDistanceMatrix = require('node-distance-matrix');
const e = require("express");

const distanceWalking = 500;/**METROS**/
class ModelDistancia
{
    async readModelDistancia(ciudad,paradas,origins)
    {
        try{
            //console.log("*****************************************************")
            //console.log(paradas)
            var datos = []
            var listParadasPosition = []

            for (var j = 0; j < paradas.length; j++)
            {
                var aux = paradas[j].position.lat + ',' + paradas[j].position.lng

                listParadasPosition.push(aux.toString())
            }


            var distanceMatrix = await NodeDistanceMatrix
                .getDistanceMatrix('AIzaSyDOAdi7ZLdoctlCRA3_gYTeeIAjEHsTTY4',
                    origins, listParadasPosition, 'walking','metric');


            for (var i = 0;i<distanceMatrix.data.rows[0].elements.length;i++)
            {
                if (distanceMatrix.data.rows[0].elements[i].distance.value <= distanceWalking)
                {
                    var obj = {
                        paradaMongoDB : paradas[i],
                        distance: distanceMatrix.data.rows[0].elements[i].distance.text,
                        distanceValue: distanceMatrix.data.rows[0].elements[i].distance.value,
                        duration: distanceMatrix.data.rows[0].elements[i].duration.text
                    }

                    datos.push(obj)
                }

            }

            return datos;

        }catch (e) {
            console.log("ERROR MODEL DISTANCIA")
            console.log(e)
            return [];
        }
    }
}

module.exports = ModelDistancia