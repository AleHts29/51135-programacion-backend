// Funciona con las versiones de redis --> redis@3.0.2 connect-redis@5.1.0

const express = require('express');
const session = require('express-session');

// Redis Local 
// const redis = require('redis');
// const client = redis.createClient();

//Redis Cloud
const redis = require('redis');
const client = redis.createClient(17613, 'redis-17613.c98.us-east-1-4.ec2.cloud.redislabs.com');
client.AUTH('JuQSuGWSB8R1np9qQ1oyy1A6OKa9oOhl', (err)=>{
    if(err) throw err;
});

const connectRedis = require('connect-redis');
const RedisStore = connectRedis(session);

const app = express();


// configuracion de la session con redis
app.use(session({
    store: new RedisStore({
        // Local
        // client: 'localhost',
        // port: 6379,

        client: client,
        ttl: 30 // tiempo en segundos
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res)=>{
    res.send('Server express ok!!')
})

app.get('/con-session', (req, res)=>{
    if (req.session.contador) {
        req.session.contador++
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    }
    else {
        req.session.contador = 1
        res.send('Bienvenido!')
    }
})

app.get('/logout', (req, res)=>{
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!')
        else res.send({ status: 'Logout ERROR', body: err })
    })
})


app.listen(8080);
console.log('server ok!!');