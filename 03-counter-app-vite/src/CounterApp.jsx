import {useState} from 'react';
import PropTypes from "prop-types";




export const Counter = ({value}) => {
// cuando cambia de estado el componente de vuelve a disparar (ejecutar)

    // cuando se hace useState(0) se requiere mandar cual es el valor inicial
    // [  ] es la desestructuración del retorno de esa funcion 
    const [ counter, setCounter ] = useState( value ) // se pone el valor inicial por lo que tenemos en el padre y que despues lo toma como valor inicial


    const handleAdd = () =>{
        // cuando se manda a llamar un setCounter es decirle a react que el estado cambio.
        setCounter(counter + 1)
    }
    const handleLess = () =>{
        // cuando se manda a llamar un setCounter es decirle a react que el estado cambio.
        setCounter(counter - 1)
    }
    const handleReset = () =>{
        setCounter(value)
    }
    return (    
        <>
        <h1> CouterApp</h1>
        <h2> {counter} </h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleReset }> reset </button>
        <button onClick={ handleLess }> -1 </button>
        </>
    )
};


Counter.propTypes = {

value: PropTypes.number.isRequired,

}