let {Schema,model,ObjectId} = require('mongoose')
const SchemaRuta = Schema({
    codeRuta:{type:String,require: true},
    IdCiudad:{type:ObjectId,require:true},
    detalleRuta:{type:String,require:true},
    tiempoRecorrido:{type:String,require:true,default: "20 mins"},
    colorSubida:{type:String,default:"#A52714",require:true},
    colorBajada:{type:String,default:"#01579B",require:true},
    polilineasRutaSubida: {type:Array,default:[],require:true},
    polilineasRutaBajada: {type:Array,default:[],require:true}
},{collection:'ruta'});

module.exports = model('ruta',SchemaRuta)