const jwt = require('jsonwebtoken');

const generateJWT = ( uid = '' ) => {  // uid = user id-entification

    return new Promise( ( resolve, reject ) => {  // se necesita trabajar en base a promesas y jwt trabaja en base a callbacks

        const payload = { uid }; // info que guarda el jwt - en este caso solo el id

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el Token' );
            } else {
                resolve( token );
            }
            
        });

    }); 

}


module.exports = {
    generateJWT
}