import passport from 'passport';
import passportLocal from 'passport-local';
import GitHubStrategy from 'passport-github2';
import userModel from '../models/user.model.js';
import { createHash, isValidPassword } from '../utils.js';


// Declaramos nuestra estrategia
const localStrategy = passportLocal.Strategy;

const initializePassport = ()=>{
    
    // estrategia github
    passport.use('github', new GitHubStrategy(
        {
            clientID: 'Iv1.31c208b230284558', 
            clientSecret: '25abcff6d0b4ccea326823cf1372f10a289650c4',
            callbackUrl: 'http://localhost:9090/api/sessions/githubcallback'
        }, 
        async (accessToken, refreshToken, profile, done) => {
            console.log("Profile obtenido del usuario: ");
            console.log(profile);
            try {
                const user = await userModel.findOne({email: profile._json.email});
                console.log("Usuario encontrado para login:");
                console.log(user);
                if (!user) {
                    console.warn("User doesn't exists with username: " + profile._json.email);
                    let newUser = {
                        first_name: profile._json.name,
                        last_name: '',
                        age: 18,
                        email: profile._json.email,
                        password: '',
                        loggedBy: "GitHub"
                    };
                    const result = await userModel.create(newUser);
                    return done(null, result);
                } else {
                    //Si entramos por acá significa que el usuario ya existía.
                    return done(null, user);
                }
            } catch (error) {
                return done(error);
            }
        })
    );


    

    // estrategia register
    /**
      *  Inicializando la estrategia local, username sera para nosotros email.
      *  Done será nuestro callback
     */
    passport.use('register', new localStrategy(
        // passReqToCallback: para convertirlo en un callback de request, para asi poder iteracturar con la data que viene del cliente
        // usernameField: renombramos el username
        { passReqToCallback: true, usernameField: 'email' },
        async(req, username, password, done) =>{
            const { first_name, last_name, email, age } = req.body;
            try {

                const exists = await userModel.findOne({ email });
                if (exists) {
                    console.log("El usuario ya existe.");
                    return done(null, false);
                }
                const user = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: createHash(password)
                };
                const result = await userModel.create(user);
                //Todo sale OK
                return done(null, result);
            } catch (error) {
                return done("Error registrando el usuario: " + error);
            }
        }

    ))


    // estrategia login
    passport.use('login', new localStrategy(
        { passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) => {
            try {
                const user = await userModel.findOne({ email: username });
                console.log("Usuario encontrado para login:");
                console.log(user);
                if (!user) {
                    console.warn("User doesn't exists with username: " + username);
                    return done(null, false);
                }
                if (!isValidPassword(user, password)) {
                    console.warn("Invalid credentials for user: " + username);
                    return done(null, false);
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        })
    );


    //Funciones de Serializacion y Desserializacion
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            let user = await userModel.findById(id);
            done(null, user);
        } catch (error) {
            console.error("Error deserializando el usuario: " + error);
        }
    });
}


export default initializePassport;