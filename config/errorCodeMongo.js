let getCodeMongoDBString = (code)=>
{
    let string_code = ''
    switch (code){
        case 11000:
            string_code =  'Key duplicada'
            break;
        default :
            string_code = 'Error en MongoDB desconocido (CATCH)'
            break;
    }
    return string_code
}


module.exports = {getCodeMongoDBString}