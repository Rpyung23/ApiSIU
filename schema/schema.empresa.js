let {Schema,model,ObjectId} = require('mongoose')
const SchemaEmpresa = Schema({
    database:{type:String,require: true,unique:true},
    detallEmpresa:{type:String,require:true},
    ObjectIdCiudad:{type:ObjectId,require:true}
},{collection:'empresa'});

module.exports = model('empresa',SchemaEmpresa)