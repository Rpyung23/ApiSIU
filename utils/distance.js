let rutasIdUnicas = (datosOrigins,datosDestinations)=>
{
    var StringIdRutas = []
    /**********************************************************************************/
    for (var i = 0; i<datosOrigins.length;i++)
    {
        for (var j = 0; j<datosOrigins[i].paradaMongoDB.ruta.length;j++)
        {
            var bandera = 0
            for (var k = 0; k<datosDestinations.length;k++)
            {
                for (var l = 0; l<datosDestinations[k].paradaMongoDB.ruta.length;l++)
                {
                    /*console.log(datosOrigins[i].paradaMongoDB.ruta[j].codeRuta + " == " +
                        datosDestinations[k].paradaMongoDB.ruta[l].codeRuta )*/
                    if (datosOrigins[i].paradaMongoDB.ruta[j]._id.toString() ==
                        datosDestinations[k].paradaMongoDB.ruta[l]._id.toString())
                    {
                        bandera++;
                    }
                }
            }
            if (bandera > 0){
                //console.log("********************************")
                //console.log(datosOrigins[i].paradaMongoDB.ruta[j].codeRuta)
                StringIdRutas.push(datosOrigins[i].paradaMongoDB.ruta[j]._id.toString())
            }
        }
    }
    /*********************************************************************************/

    const result = StringIdRutas.reduce((acc,item)=>{
        if(!acc.includes(item)){
            acc.push(item);
        }
        return acc;
    },[])

    return result
}

let paradasInicioDestino = (Idruta,ListaParadas)=>
{
    var ListaParadaPorRuta = []

    try{
        for (var i = 0;i<ListaParadas.length;i++)
        {
            for (var j =0 ;j<ListaParadas[i].paradaMongoDB.ruta.length;j++)
            {
                if (Idruta == ListaParadas[i].paradaMongoDB.ruta[j]._id.toString())
                {
                    ListaParadaPorRuta.push(ListaParadas[i].paradaMongoDB.parada)
                }
            }
        }
        return ListaParadaPorRuta
    }catch (e){
        return null
    }
}

let tiempoViajeParada = (Idruta,ListaParadas)=>
{
    var ListaViajeTiempo = []

    try{
        for (var i = 0;i<ListaParadas.length;i++)
        {
            for (var j =0 ;j<ListaParadas[i].paradaMongoDB.ruta.length;j++)
            {
                if (Idruta == ListaParadas[i].paradaMongoDB.ruta[j]._id.toString())
                {
                    var obj = {duracion: ListaParadas[i].duration}
                    ListaViajeTiempo.push(obj)
                }
            }
        }
        return ListaViajeTiempo
    }catch (e){
        return null
    }
}



module.exports = {rutasIdUnicas,paradasInicioDestino,tiempoViajeParada}