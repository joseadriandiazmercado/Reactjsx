
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";


describe ('Prubas en 09-promesas', () => {
    
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id:1,
                    name: 'Batman',
                    owner: 'DC'
                })
                //Se requiere "done()" porque el testing las toma como sincrona, 
                //Entonces se requiere del "done()" para decirle a Jest que la 
                //Peticion async ya termino todo el proceso
                done();
            });
     })


     test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error =>{

                expect(error).toBe(`No se pudo encontrar el héroe`)

                done();
            })
     })


})