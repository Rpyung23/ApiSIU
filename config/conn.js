let mongoose = require('mongoose');

const dbConnection = async ()=>{
    try {

       /*var conn = await mongoose.connect('mongodb://localhost/siu',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });*/
        var conn = await mongoose.connect('mongodb+srv://doadmin:M4X7I0n3E9f5i6O2@MONGO-SIU-e3b25a35.mongo.ondigitalocean.com/siu?tls=true&authSource=admin&replicaSet=MONGO-SIU',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
    }catch (e)
    {
        console.log(e)
        //throw new Error("Error al iniciar la BASE DE DATOS")
        return null;
    }
}


module.exports = {dbConnection}