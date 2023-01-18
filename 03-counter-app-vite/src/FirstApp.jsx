import  PropTypes from "prop-types";

const Mensaje = {
    mensaje: `Hola Mundo`,
    title: `Saludo`,
};


function getSuma(int){

    int = 90
    return int+90;
    console.log('hola desde suma')    
}


export const FirstApp = ({title, subTitle}) =>{         
    // <> se utiliza para regresar mas de un elemento (es un agrupador de elementos HTML)
    // Tambien comocido como un fragemto <Fragment></Fragment>
    return (
    <> 
    <h1> {title} </h1>
    {/* <code> {JSON.stringify(Mensaje)} </code> */}
    <p> {subTitle} </p>
    </>
    )
}

// Para hacer que los valores se deban de respetar y siempre se deban de asignar
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

// para los propiedades por defecto
// entrar antes de los los {propTypes}
FirstApp.defaultProps = {
    title: `no hay titulo`
}