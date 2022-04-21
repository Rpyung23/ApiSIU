require('./config/port')
const bodyparser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const ciudad = require('./view/ciudad')
const rutas = require('./view/rutas')
const paradas = require('./view/paradas')
const paradaruta = require('./view/paradas_ruta')
const empresas = require('./view/empresas')
const conductor = require('./view/conductor')
const servidor = require('./view/servidor')

app.use(bodyparser.urlencoded({urlencoded:false,limit:'80mb'}))
app.use(bodyparser.json({limit:'80mb'}))


app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));


app.use('/system',ciudad)
app.use('/system',rutas)
app.use('/system',paradas)
app.use('/system',paradaruta)
app.use('/system',empresas)
app.use('/system',conductor)
app.use('/system',servidor)

app.listen(process.env.PORT,()=>
{
    console.log("SIU ESCUCHANDO POR EL PUERTO : "+process.env.PORT)
})