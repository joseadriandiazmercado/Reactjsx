/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Col, Row } from "react-bootstrap"
import useFetchGifs from "../hooks/useFetchGifs"
import GitItem from "./GitItem"


export const GifGrid = ({category}) => {
  const {images,isLoading} = useFetchGifs(category)
    return (
    <>
    {images.length > 0 ? 
    ( <h3 className="text-center">{category}</h3>) : (<></>) }
        {isLoading && (<h3>Cargando....</h3>)}
        <div className={'card-grid'}> 
        {images.map(s => (
            <GitItem
            key={s.id}
            {...s} //-> pasar todos los argumentos de iterador como propities y tomarlos en el siguiente componente
            />
          
            )  
          )}
        </div>
    
    </>
  )
}
