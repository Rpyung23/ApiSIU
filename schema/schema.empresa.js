let {Schema,model,ObjectId} = require('mongoose')
const SchemaEmpresa = Schema({
    nombreEmpresa:{type:String,require: true},
    foto:{type:String,require:true},
    dir:{type:String,require:true},
    detalle:{type:String,require:true},
    lineas:{type:String,require:true},
    idCiudad:{type:ObjectId,require:true}
},{collection:'empresa'});

module.exports = model('empresa',SchemaEmpresa)