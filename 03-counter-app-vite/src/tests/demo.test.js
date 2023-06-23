

describe('Pruebas en <DemoComponent', () => { // esto es para describir donde se estan haciendo las pruebas
                                             // tipo identificador
    test('Mensaje que debe de ir en el CMD', () =>{ // es lo que debes de poner para que aparesca en la consola

        //1. inicializacion
        const mensaje = 'Hola mundo';
    
        //2. estimulo
    
        const mensaje2 = mensaje.trim();
    
        //3. Observar el comportamiento...... esperando
        expect(mensaje).toBe(mensaje2);
        
    })
 })