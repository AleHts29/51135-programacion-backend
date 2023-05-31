import { Router } from 'express';

import { studentService } from '../services/factory.js';

const router = Router();
const persistenceFactory = studentService;
console.log(persistenceFactory);


router.get('/', async (req, res) => {
    try {
        let students = await persistenceFactory.getAll();
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los estudiantes." });
    }

})

router.post('/', async (req, res) => {
    try {
        const studentDto = new StudentsDto(req.body);
        let result = await studentService.save(studentDto);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo guardar el estudiante." });
    }
})

export default router;