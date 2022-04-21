let mongoose = require('mongoose');

const dbConnection = async ()=>{
    try {

       /*var conn = await mongoose.connect('mongodb://localhost/siu',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });*/
        var conn = await mongoose.connect('mongodb+srv://root:fZc2frXKzV7RhZdr@cluster0.aihfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
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