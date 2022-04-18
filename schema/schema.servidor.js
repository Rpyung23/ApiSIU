let {Schema,model,ObjectId} = require('mongoose')
const SchemaServidor = Schema({
    ipServer:{type:String,require: true,unique:true},
    puerto:{type:Number,require:true},
    user:{type:String,require:true},
    contrasenia:{type:String,require:true}
},{collection:'servidor'});

module.exports = model('servidor',SchemaServidor)