import { Router } from "express";
import passport from "passport";
import {authToken} from '../utils.js';
import { passportCall, authorization } from "../utils.js";

const router = Router();

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});


// GET a reder perfil
router.get("/",
    // authToken,
    passportCall('jwt'), //-> Usando JWT por Cookie usando customCall
    authorization('user'),
    (req, res)=>{
        res.render("profile",{user: req.user})
    }
)


router.get("/error", (req, res)=>{
    res.render("error");
});

export default router;