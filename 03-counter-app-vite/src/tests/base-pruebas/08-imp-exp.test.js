import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";


describe ('Prubas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID', () => {
        
        const id = 1 ;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id:1,
            name: 'Batman',
            owner: 'DC' })
     })


    test('getHeroeById debe de retornar undefined si no existe', () => {
        
        const id = 100;
        const hero = getHeroeById(id);

        //Esto puede ser "null", "false", "undefined"
        expect(hero).toBeFalsy();
     })


    
     test('getHeroesByOwner debe de regresar heroes de DC', () =>{

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);

    }) 

    test('getHeroesByOwner debe de regresar heroes de Marvel', () =>{

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);

    }) 
})