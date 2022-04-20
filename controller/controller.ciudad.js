let ModelCiudad = require('../model/model.ciudad')
const oModelCiudad = new ModelCiudad()
class ControllerCiudad
{
    async verificaControllerCiudad(lat,lng)
    {
        try{
            var datos = await oModelCiudad.verificaLocation()
            //var pt = {lat: '-1.6528584',lng: '-78.7090672'};
            var pt = {lat:lat,lng:lng};
            var i = 0;
            var positions = [];

            var banderaFin = false
            var banderaCheck = false
            var contador = 0
            var objAux = null

            for (var i =0;i<datos.datos.length;i++)
            {
                var aux = datos.datos[i];

                if (IsWithin(pt,aux.poligono,true))
                {
                    console.log("OK")
                    objAux = aux
                    i = 999999999999999999999999999999999999 ;
                }

            }

            return {error:null,datos:objAux};

        }catch (e) {
            console.log("ERROR CONTROLLER CIUDAD")
            console.log(e.toString())
            return  {error:e.toString(),datos:[]}
        }
    }
}


function IsWithin(pt,polygon,noneZeroMode) {
    var ptNum = polygon.length;
    if (ptNum < 3) {
        return false;
    }
    var j = ptNum - 1;
    var oddNodes = false;
    var zeroState = 0;
    for (var k = 0; k < ptNum; k++) {
        var ptK = polygon[k];
        var ptJ = polygon[j];
        if (((ptK.lng > pt.lng) != (ptJ.lng > pt.lng)) && (pt.lat < (ptJ.lat - ptK.lat) * (pt.lng - ptK.lng) / (ptJ.lng - ptK.lng) + ptK.lat)) {
            oddNodes = !oddNodes;
            if (ptK.lng > ptJ.lng) {
                zeroState++;
            }
            else {
                zeroState--;
            }
        }
        j = k;
    }
    var bandera = noneZeroMode ? zeroState !=0 : oddNodes
    console.log("BANDERA : "+bandera)
    return bandera;
}



module.exports = ControllerCiudad