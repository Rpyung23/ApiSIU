let ModelParada_ruta = require('../model/model.parada_ruta')
let ModelParada = require('../model/model.parada')
const oModelParada_ruta = new ModelParada_ruta()
const oModelParada = new ModelParada()
class ControllerParada_ruta
{
    async readControllerAllParadasByRuta(idRuta)
    {
        try{
            var datos = await oModelParada_ruta.readModelAllParadasByRuta(idRuta)
            return datos;
        }catch (e) {
            console.log("ERROR CONTROLLER PARADAS RUTA")
            console.log(e)
            return  {error:e.toString(),datos:[]}
        }
    }



    async readControllerAllParadasJoinRutaByCiudad(ciudad)
    {

        var datos = await oModelParada_ruta.readModelAllParadasJoinRutaByCiudad(ciudad)
        var paradas = await oModelParada.readModelAllParadaByCiudad(ciudad)
        console.log("datos length")
        console.log(datos)
        console.log("paradas length")
        console.log(paradas.datos.length)

        var datosPro = []
        var datosParada = []
        var datosPro2 = []

        for (var i = 0;i<datos.length;i++)
        {

            var rutas = []

            for(var j = 0;j<datos[i].ruta.length;j++)
            {
                var oR = {
                    _id : datos[i].ruta[j]._id,
                    codeRuta : datos[i].ruta[j].codeRuta,
                    detalleRuta : datos[i].ruta[j].detalleRuta
                }
                rutas.push(oR)
            }


            var obj = {
                idParada : datos[i].idParada,
                idRuta : datos[i].idRuta,
                parada : datos[i].parada,
                ruta : rutas
            }
            datosPro.push(obj)
        }

        //console.log(datosPro[195])
        for(var j = 0;j<paradas.datos.length;j++)
        {
            var rutasP = []

            for (var k = 0;k<datosPro.length;k++)
            {
                //console.log(k)
                //console.log(datosPro[k].parada[0]._id.toString())
                if(datosPro[k].parada.length > 0)
                {
                    if (paradas.datos[j]._id.toString() == datosPro[k].parada[0]._id.toString())
                    {
                        //console.log("ok")
                        rutasP.push(datosPro[k].ruta[0]);
                        datosPro.slice(0,k)
                    }
                }
            }

            datosPro2.push({
                parada:paradas.datos[j],
                ruta:rutasP
            })
        }

        return datosPro2
    }
}

module.exports = ControllerParada_ruta