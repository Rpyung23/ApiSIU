let mongoose = require('mongoose');

const dbConnection = async ()=>{
    try {

        var conn = await mongoose.connect('mongodb://66.240.205.86:27017',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            user: 'admin',
            dbName:'siu',
            pass: 'Vigitr@ckL@tam2022_'
        });

    }catch (e)
    {
        console.log(e)
        //throw new Error("Error al iniciar la BASE DE DATOS")
        return null;
    }
}


module.exports = {dbConnection}