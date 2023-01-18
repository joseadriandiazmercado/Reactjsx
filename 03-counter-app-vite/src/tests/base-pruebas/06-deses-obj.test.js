import { usContext } from "../../base-pruebas/06-deses-obj";

describe('Pruebas en el archivo 06-deses-obj', () => { 

    test('usContext debe de regresar un objeto', () => { 

        const clave = 'Soldado';
        const nombre = 'Adrian'
        const edad = 20;
        const rango = 'Capitán'
        const user = usContext(clave, nombre, edad, rango)
        console.log(user)
     })
 })