let mongoose = require('mongoose');

const dbConnection = async ()=>{
    try {

       /*var conn = await mongoose.connect('mongodb://localhost/siu',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });*/
        var conn = await mongoose.connect('mongodb://165.227.81.218:27017/siu',{
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