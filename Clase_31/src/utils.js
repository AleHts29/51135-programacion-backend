import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { faker } from '@faker-js/faker';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

faker.locale = 'es'; //Idioma de los datos

export const generateUser = () => {

};

export const generateProduct = () => {

};

export default __dirname;