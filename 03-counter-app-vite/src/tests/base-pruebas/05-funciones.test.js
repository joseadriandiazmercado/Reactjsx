import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"


describe('Pruebas en el archivo 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => { 

        const textUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }

    const user = getUser();
    expect(textUser).toStrictEqual(user);

    console.log(user)

     })
    test('getUsuarioActivo debe de retornar un objeto', () => { 
        
        const name = 'Ricardo' // lo que estamos pasandoe es el argumento de name al parametro que esta en la funcion
        const user2 = getUsuarioActivo(name);
        // expect(user2).toStrictEqual(user2);
        expect(user2).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
        console.log(user2)
     })
 })
 