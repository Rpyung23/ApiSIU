const mysql = require("mysql2");

var datosServer = {
    host: '71.6.142.116',
    user: 'root',
    pass: 'Urbano1972102030*',
    port: 3306
}

let connLiribamba = () =>
{
       var conn = mysql.createConnection({
            host: datosServer.host,
            user: datosServer.user,
            database: 'liribamba',
            password: datosServer.pass,
            port: datosServer.port
        });
    return conn;
}

let connPrado = () =>
{
    var conn = mysql.createConnection({
        host: datosServer.host,
        user: datosServer.user,
        database: 'prado-eco',
        password: datosServer.pass,
        port: datosServer.port
    });
    return conn;
}

let connPuruha = () =>
{
    var conn = mysql.createConnection({
        host: datosServer.host,
        user: datosServer.user,
        database: 'puruha',
        password: datosServer.pass,
        port: datosServer.port
    });
    return conn;
}

let connSagrario = () =>
{
    var conn = mysql.createConnection({
        host: datosServer.host,
        user: datosServer.user,
        database: 'tsagrario',
        password: datosServer.pass,
        port: datosServer.port
    });
    return conn;
}


module.exports = {connLiribamba,connPuruha,connPrado,connSagrario}