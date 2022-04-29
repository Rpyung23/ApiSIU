let ModelDistancia = require('../model/model.distancia')
const e = require("express");
const oModelDistancia = new ModelDistancia()

class ControllerDistancia
{
    async readControllerDistancias(ciudad,callback)
    {
        try{
            var datos = await oModelDistancia.readModelDistancia(ciudad,(error,datos)=>
            {
                callback(error,datos)
            })
        }catch (e) {
            console.log("ERROR CONTROLLER DISTANCIAS")
            console.log(e)
            callback(e.toString(),[])
        }
    }
}

module.exports = ControllerDistancia