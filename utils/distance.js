let rutasIdUnicas = (datosOrigins,datosDestinations)=>
{
    var StringIdRutas = []
    /**********************************************************************************/
    for (var i = 0; i<datosOrigins.length;i++)
    {
        for (var j = 0; j<datosOrigins[i].ruta.length;j++)
        {
            var bandera = 0
            for (var k = 0; k<datosDestinations.length;k++)
            {
                for (var l = 0; l<datosDestinations[k].ruta.length;l++)
                {
                    if (datosOrigins[i].ruta[j]._id.toString() == datosDestinations[k].ruta[l]._id.toString())
                    {
                        bandera++;
                    }

                }
            }
            if (bandera > 0){
                StringIdRutas.push(datosOrigins[i].ruta[j]._id.toString())
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
    console.log("RUTAS UNICAS....")
    console.log(result)
    console.log("------------------------")
    return result
}

let paradasInicioDestino = (Idruta,ListaParadas)=>
{
    var ListaParadaPorRuta = []
    var ListarParadaPorRutaPedazo5 = []

    try{
        for (var i = 0;i<ListaParadas.length;i++)
        {
            for (var j =0 ;j<ListaParadas[i].ruta.length;j++)
            {

                if (Idruta == ListaParadas[i].ruta[j]._id.toString())
                {
                    ListaParadaPorRuta.push(ListaParadas[i])
                }
            }
        }

        ordenamiento(ListaParadaPorRuta)
        if (ListaParadaPorRuta.length >= 5){
            for (var i = 0; i < 5; i++) {
                ListarParadaPorRutaPedazo5.push(ListaParadaPorRuta[i])
            }
            return ListarParadaPorRutaPedazo5
        }
        return ListaParadaPorRuta
    }catch (e){
        return null
    }
}

let ordenamiento = (oParadas)=>
{
    for(let i = 2; i < oParadas.length; i++)
    {
        for(let j = 0;j < oParadas.length-i;j++)
        {
            if(oParadas[j].distanciaAproximada > oParadas[j+1].distanciaAproximada)
            {
                auxiliar = oParadas[j];
                oParadas[j] = oParadas[j+1];
                oParadas[j+1] = auxiliar;
            }
        }
    }
    return oParadas[0];
}

let distanciaParadaAproximada = (lat1,lng1,lat2,lng2)=>
{
    rad = function(x) {return x*Math.PI/180;}
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad( lat2 - lat1 );
    var dLong = rad( lng2 - lng1 );
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1))
        * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = (R * c);
    return parseFloat(d.toFixed(3)); //Retorna tres decimales
}

module.exports = {rutasIdUnicas,paradasInicioDestino,distanciaParadaAproximada,ordenamiento}