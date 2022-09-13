const mysql = require("mysql2");
let ModelEmpresa = require('../model/model.empresa')
const oModelEmpresa = new ModelEmpresa()
const {getFecha_format} = require('../utils/formatDate')

class ModelMonitoreo
{
    async readModelMonitoreoLinea(ciudad,linea)
    {

        var servidor = await oModelEmpresa.readModelGetConnectionsEmpresaByCiudad(ciudad)
        var response = []
        for (var i = 0; i < servidor.datos.length; i++) {
            var con = await connetionMySql(servidor.datos[i].servidor[0].ipServer,servidor.datos[i].servidor[0].user,
                servidor.datos[i].codigoEmpresa,servidor.datos[i].servidor[0].contrasenia,servidor.datos[i].servidor[0].puerto).promise();
            var data = await con.query("select CodiVehiMoni,UltiLatiMoni,UltiLongMoni,UltiRumbMoni,UltiVeloMoni," +
                "UltiFechMoni from monitoreo WHERE LetrRutaMoni = '"+linea+"' and date(UltiFechMoni) = current_date() and idSali_mMoni > 0");
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

function connetionMySql(host,user,database,pass,port){
    var conn = mysql.createConnection({
        host: host,
        user: user,
        database: database,
        password: pass,
        port:port
    });
    return conn;
}



module.exports = ModelMonitoreo
