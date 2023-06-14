import { Router } from "express";
import { getUsers, saveUser } from '../controllers/users.controller.js';
import errorHandler from '../services/errors/middlewares/index.js';

const router = Router();



router.get("/", getUsers);
router.post("/", saveUser);
router.use(errorHandler);

export default router;