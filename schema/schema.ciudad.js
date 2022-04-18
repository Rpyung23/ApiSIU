let {Schema,model,ObjectId} = require('mongoose')
const SchemaCiudad = Schema({
    detalleCiudad:{type:String,require:true},
    ObjectIdEmpresas:{type:Array,default:[]},
    poligono:{type:Array,require:true},
    servidores:{type:Array,require:true,default: []},
    estado:{type:Boolean,require:true,default:true}
},{collection:'ciudad'});

module.exports = model('ciudad',SchemaCiudad)