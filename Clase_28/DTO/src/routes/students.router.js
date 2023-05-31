import { Router } from 'express';
import StudentDTO from '../services/dto/student.dto.js';
//import del service para Students. (Se puede probar con el service del file system o el de mongoose)

// Archivos
// import StudentService from '../services/filesystem/students.service.js';

// Mongo
import StudentService from '../services/db/students.service.js';

const router = Router();
const studentService = new StudentService();

router.get('/', async (req, res) => {
    try {
        let students = await studentService.getAll();
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los estudiantes." });
    }

})

router.post('/', async (req, res) => {
    try {
        let newUser = new StudentDTO(req.body);
        let result = await studentService.save(newUser);
        // let result = await studentService.save(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo guardar el estudiante." });
    }
})

export default router;