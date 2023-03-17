import express from 'express';

const router = express.Router();

let food = [
    {name : "Hamburguesa", price: "100"},
    {name : "Banana", price: "40"},
    {name : "Soda", price: "20"},
    {name : "Ensalada", price: "20"},
    {name : "Pizza", price: "20"}
];


router.get('/food', (req, res)=>{
    let testUser = {
        name: "Hilda",
        last_name: "Martinez",
        role: 'admin'
    }
    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === 'admin',
        style: "index.css",
        food
    })
})


router.get('/', (req, res)=>{
    let testUser = {
        name: "Hilda",
        last_name: "Martinez",
        role: 'user'
    }
    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === 'admin',
        food
    })
})






export default router