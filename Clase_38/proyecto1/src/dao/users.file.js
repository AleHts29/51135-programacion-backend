import fs from 'fs';
import __dirname from '../utils.js';

export default class UserService {
    constructor() {
        this.path(`${__dirname}/files/users.json`)
    }
}

// Se importa un modulo que no se usa - fs
// La calse tampoco se implementa
// A06 - Vulnerable and Outdated components