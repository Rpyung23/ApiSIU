let ModelEmpresa = require('../model/model.empresa')
const oModelEmpresa = new ModelEmpresa()

class ControllerEmpresa{
    async readControllerAllEmpresasByCiudad(idCiudad)
    {
        try {
            var datos = await oModelEmpresa.readModelAllEmpresaByCiudad(idCiudad)
            return  datos;
        }catch (e) {
            console.log("ERROR CONTROLLER EMPRESAS")
            console.log(e)
            return {error:e.toString(),datos:[]}
        }
    }
}

module.exports = ControllerEmpresa