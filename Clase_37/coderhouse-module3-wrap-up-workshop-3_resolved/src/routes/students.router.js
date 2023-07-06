import { Router } from 'express';
//import del service repository:
import { getAll, createStudent } from '../controllers/students.controller.js';

const router = Router();

//TODO: Migrar a patrón controller:

router.get('/', getAll);

router.post('/', createStudent);

export default router;