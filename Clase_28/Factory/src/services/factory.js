import config from '../config/config.js';
import MongoSingleton from '../config/mongodb-singleton.js';

// Para cambiar de persistencia
// node src/app.js --persist files --mode dev

let studentService

switch (config.persistence) {
    case 'mongodb':
        const mongoInstance = async () => {
            console.log("Entrando a iniciar Service para MongoDb");
            try {
                await MongoSingleton.getInstance();
            } catch (error) {
                console.error(error);
                process.exit(0);
            }
        };
        mongoInstance();
        const { default: StudentServiceMongo } = await import('./db/students.service.js')
        studentService = new StudentServiceMongo();
        console.log("Student service loaded:");
        console.log(studentService);
        break;
    case 'files':
        const { default: StudentServiceFileSystem } = await import('./filesystem/students.service.js')
        studentService = new StudentServiceFileSystem();
        console.log("Student service loaded:");
        console.log(studentService);
        break;

    default:
        break;
}

export { studentService }