import chai from "chai";
import { createHash } from '../../src/utils/index.js'

const expect = chai.expect;

describe('Test de la libreria bcrypt de Utils', () => {
    // Before

    // beforeEach


    // test
    it("La funcion de encriptacion debe generar un pass encriptado", async function () {
        // Given
        const passWordTest = "123qwe"

        // Then
        const result = await createHash(passWordTest);
        console.log(`Resultado obtenido con createHash: ${result}`);


        // Assert that
        expect(result).not.to.be.NaN;
        expect(result).not.to.be.undefined;
        expect(result).not.to.be.null;
        expect(result).not.to.be.empty;
        expect(result).not.equal(passWordTest)
    });
})
