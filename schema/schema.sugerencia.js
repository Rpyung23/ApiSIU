let {Schema,model,ObjectId} = require('mongoose')
const SchemaSugerencia = Schema({
    telefono:{type:String,require: true,default:'S/N'},
    nombres:{type:String,require:true},
    email:{type:String,require:true},
    descripcion:{type:String,require:true},
    IdCiudad:{type:ObjectId,require:true},
},{collection:'sugerencia'});

module.exports = model('sugerencia',SchemaSugerencia)

