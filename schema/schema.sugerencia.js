let {Schema,model,ObjectId} = require('mongoose')
const SchemaSugerencia = Schema({
    nombres:{type:String,require:true},
    telefono:{type:String,require: true,default:'S/N'},
    email:{type:String,require:true},
    segurencia:{type:String,require:true},
    IdCiudad:{type:ObjectId,require:true},
},{collection:'sugerencia'});

module.exports = model('sugerencia',SchemaSugerencia)

