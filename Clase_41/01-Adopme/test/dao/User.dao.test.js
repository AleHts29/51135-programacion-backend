import mongoose from "mongoose";
import UsersDao from '../../src/dao/Users.dao.js';
import Assert from 'assert';

mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`);

const assert = Assert.strict;


// Armamos el escenario
describe('Testing Users Dao', () => {

    before(function () {
        this.usersDao = new UsersDao()
    })

    beforeEach(function () {
        this.timeout(5000);
        mongoose.connection.collections.users.drop();
    })


    // Los it son test puntuales del decribe
    // test 01
    it('El dao debe devolver los usuarios en formato arreglo', async function () {
        // definiomos la logica del test
        console.log(this.usersDao);
        // Given
        const isArray = true;

        // Then
        const result = await this.usersDao.get(); // [{}, {}]
        console.log(`El resultado es un array ?: ${Array.isArray(result)}`);

        // Assert that
        assert.strictEqual(Array.isArray(result), isArray);

    })


    // test 02
    it('El dao debe agregar un usuario correctamente a la DB', async function () {
        // definiomos la logica del test
        // Given
        let mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };

        // Then
        const result = await this.usersDao.save(mockUser);


        // Assert that
        assert.ok(result._id);

    })

    afterEach(function () {
        mongoose.connection.collections.users.drop();
    });
})
