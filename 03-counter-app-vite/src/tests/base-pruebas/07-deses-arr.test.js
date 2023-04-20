
//describe -> del arvhico que se le hace la prueba

import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

//test -> lo que se hace en esta test 
describe ('Prubas en 07-deses-arr', () => {

    test('debe de retornar un string y un numero', () => {
        
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        

        //Se puede utilizar metodos de javaScript
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        
        //Espera cualquier string
        expect(letters).toEqual(expect.any(String));

     })
})