let {Schema,model,ObjectId} = require('mongoose')
const SchemaRuta = Schema({
    codeRuta:{type:String,require: true},
    IdCiudad:{type:ObjectId,require:true},
    detalleRuta:{type:String,require:true},
    tiempoRecorrido:{type:String,require:true,default: "20 mins"},
    polinineasRuta:{type:Array,default:[],require:true}
},{collection:'ruta'});

module.exports = model('ruta',SchemaRuta)