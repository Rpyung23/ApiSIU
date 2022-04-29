const distance = require("google-distance-matrix");
let ControllerParada = require('../controller/controller.parada')
const oControllerParada = new ControllerParada()
class ModelDistancia
{
    async readModelDistancia(ciudad,callback)
    {
        try{
            var paradas = await oControllerParada.readControllerAllParadasByCiudad(ciudad);
            var listParadasPosition = []
            for (var j = 0; j < 25; j++)
            {
                var aux = paradas.datos[j].position.lat + ',' + paradas.datos[j].position.lng

                listParadasPosition.push(aux.toString())
            }
            var origins = ['-1.65579125689191, -78.6780999210139'];
            distance.key('AIzaSyDOAdi7ZLdoctlCRA3_gYTeeIAjEHsTTY4');
            distance.mode('walking');
            distance.matrix(origins, listParadasPosition, async function (err, distances)
            {
                var n = distances.rows[0].elements.length;
                for (var k = 1; k < n; k++)
                {
                    var destination = distances.destination_addresses[k];
                    for (var i = 0; i < (n - k); i++)
                    {
                        if (distances.rows[0].elements[i].distance.value > distances.rows[0].elements[i+1].distance.value) {
                            aux = distances.rows[0].elements[i].distance.value;
                            distances.rows[0].elements[i].distance.value = distances.rows[0].elements[i+1].distance.value;
                            distances.rows[0].elements[i+1].distance.value = aux;
                        }
                    }
                    if(distances.rows[0].elements[i].distance.value < 2000 && i <= 5)
                    {
                        var data = {distances:distances.rows[0].elements[i].distance.value+'m',destination:destination}
                    }
                }
                if(data != undefined){
                    callback(null,data)
                }
            })
        }catch (e) {
            console.log("ERROR MODEL DISTANCIA")
            console.log(e)
            callback(e.toString(),[])
        }
    }
}

module.exports = ModelDistancia