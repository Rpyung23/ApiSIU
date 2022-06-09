const {connLiribamba,connPrado,connPuruha,connSagrario} = require('../config/connMySql')
const {getFecha_format} = require('../utils/formatDate')

class ModelMonitoreo {
    async readModelMonitoreoLinea(linea) {
        var connections = [connLiribamba(),connPrado(),connPuruha(),connSagrario()]
        var response = []
        for (var i = 0; i < connections.length; i++) {
            var con = await connections[i].promise();
            const data = await con.query("select UltiLatiMoni,UltiLongMoni,UltiRumbMoni,UltiVeloMoni,UltiFechMoni from " +
                "monitoreo WHERE LetrRutaMoni = '"+linea+"' and DATE(UltiFechMoni) = DATE(NOW())");
            con.end();
            var datos = data[0]
            for (var j = 0; j < datos.length; j++) {
                datos[j].UltiFechMoni = getFecha_format(datos[j].UltiFechMoni);
            }
            response = response.concat(datos)
        }
        return response
    }
}

module.exports = ModelMonitoreo
