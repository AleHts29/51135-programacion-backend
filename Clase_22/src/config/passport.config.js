import passport from 'passport';
import userModel from '../models/user.model.js';
import jwtStrategy from 'passport-jwt';
import { PRIVATE_KEY } from '../utils.js';

const JwtStrategy = jwtStrategy.Strategy;
const ExtractJWT = jwtStrategy.ExtractJwt;

const initializePassport = () => {
    //Estrategia de obtener Token JWT por Cookie:
    passport.use('jwt', new JwtStrategy(
        // extraer la  cookie
        {
            jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
            secretOrKey: PRIVATE_KEY
        },
        // Ambiente Async
        async(jwt_payload, done)=>{
            console.log("Entrando a passport Strategy con JWT.");
            try {
                console.log("JWT obtenido del payload");
                console.log(jwt_payload);
                return done(null, jwt_payload.user)
            } catch (error) {
                console.error(error);
                return done(error);
            }
        }
    ));


    //Funciones de Serializacion y Desserializacion
    passport.serializeUser((user, done)=>{
        done(null, user._id);
    })

    passport.deserializeUser(async(id, done)=>{
       try {
            let user = await userModel.findOne(id);
            done(null, user)
       } catch (error) {
            console.error("Error deserializando el usuario: " + error);
       }
    })

};


// Funcion para hacer la extraccion de la cookie
const cookieExtractor = req =>{
    let token = null;
    console.log("Entrando a cookie extractor");
    if(req && req.cookies){ //Validamos que exista el request y las cookies.
       console.log("Cooikies presentes!");
       console.log(req.cookies);
       token = req.cookies['jwtCookieToken'];
       console.log("token obtenido desde cookie");
       console.log(token);
    }
    return token;
}

export default initializePassport;
