let {Schema,model,ObjectId} = require('mongoose')

const SchemaParada = Schema({
        nombreParada:{type:String,require:true},
        dir:{type:Number,require:true,default:1},
        position:{type:Object,require:true},
        foto:{type:String,require:true,default:'https://st.depositphotos.com/3272095/4680/v/600/depositphotos_46808799-stock-illustration-map-pointer-with-bus-icon.jpg'},
        geocoder:{type:String,require:true,default:'S/N Direccion' },
        idCiudad:{type:ObjectId,require:true}
    }
    ,{collection:'parada'})

module.exports = model('parada',SchemaParada)