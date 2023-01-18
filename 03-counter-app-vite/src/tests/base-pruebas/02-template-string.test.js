import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas en el archivo 02-template-string', () => { 

    test('getSaludo debe de retornar "Hola Adrian"', () => { 
        const name = 'Adrian'
        const mensaje = getSaludo(name)
        expect(mensaje).toBe(`Hola ${ name }`); // toBe significa que debe de ser exactamente igual.
     });
 });
