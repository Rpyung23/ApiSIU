let {Schema,model,ObjectId} = require('mongoose')
const SchemaParadaRuta = Schema({
    idParada:{type:ObjectId,require:true},
    idRuta:{type: ObjectId,require: true},
    fechaCreacion:{type:Date,require:true}
},{collection:'parada_ruta'});

module.exports = model('parada_ruta',SchemaParadaRuta)
