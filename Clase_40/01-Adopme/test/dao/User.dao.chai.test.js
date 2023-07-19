import mongoose from "mongoose";
import UsersDao from '../../src/dao/Users.dao.js';
import chai from 'chai';

mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`);

const expect = chai.expect;

// Armamos el escenario
describe("Testin User Dao", () => {

    // before
    before(function () {
        this.usersDao = new UsersDao()
    })


    // beforeEach
    beforeEach(function () {
        this.timeout(5000);
        mongoose.connection.collections.users.drop();
    })


    // Test 01
    it('El dao debe devolver los usuarios en formato arreglo', async function () {
        // definiomos la logica del test
        console.log(this.usersDao);
        // Given
        const emptyArray = [];

        // Then
        const result = await this.usersDao.get(); // []

        // Assert that
        expect(result).to.be.deep.equal(emptyArray)
        expect(Array.isArray(result)).to.be.ok;
        expect(Array.isArray(result)).to.be.equal(true);
        expect(result.length).to.be.deep.equal(emptyArray.length);

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
        expect(result._id).to.be.ok;

    })

})
