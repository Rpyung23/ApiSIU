require('./config/port')
const bodyparser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const ciudad = require('./view/ciudad')

app.use(bodyparser.urlencoded({urlencoded:false,limit:'80mb'}))
app.use(bodyparser.json({limit:'80mb'}))


app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));


app.use('/system',ciudad)

app.listen(process.env.PORT,()=>
{
    console.log("SIU ESCUCHANDO POR EL PUERTO : "+process.env.PORT)
})