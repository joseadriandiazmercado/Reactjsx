// Dato importante, recuerda que el main.jsx debe de ir en la carpeta de src

// para abrir lo que es nuesta aplicaion debesmo de abrir la terminal (puede ser la misma de visual) y ejecutar el comando `yarn dev`

// esto es lo que esta buscando en el buscador
// el main
// cuando se mire jsx es porque hay codigo de react
// imr importacion rapida
import React from 'react'; // importacio de react
import ReactDOM from 'react-dom/client'; // herramienta para redendizarlo, como estamos en web, debe de ser DOM (Sumamente importante)
// import {Counter} from './CounterApp'
import {FirstApp} from './FirstApp';

//Importacion de la hoja de estilos
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    //  hay otros modos pero, siempre se aconseja que se trabaje en el modo estrico para que mencione si hay un error
    <React.StrictMode>
        <FirstApp/>
        </React.StrictMode>
);