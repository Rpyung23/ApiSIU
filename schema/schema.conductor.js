let {Schema,model,ObjectId} = require('mongoose')
const SchemaConductor = Schema({
    nombreConductor:{type:String,require: true},
    licencia:{type:String,require:true},
    foto:{type:String,require:true},
    bus:{type:String,require:true},
    placa:{type:String,require:true,unique:true},
    idEmpresa:{type:ObjectId,require: true}
},{collection:'conductor'});

module.exports = model('conductor',SchemaConductor)