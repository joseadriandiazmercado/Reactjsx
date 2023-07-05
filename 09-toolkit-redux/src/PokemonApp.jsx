import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./Store/slices/pokemon";



export const PokemonApp = () => {

    const dispatch = useDispatch();
    //Obtener la informacion del state
    const {page, isLoading, pokemons} = useSelector(state => state.pokemons);
    

    useEffect(() => {dispatch(getPokemons()) }, [])

    return (
    <>
        <h1>Pokemon</h1>
        <hr />

        <span>{ isLoading ? 'Loading...' : 'Carga completa'}</span>
        
        <p><strong>Pokemons:</strong></p>
        <ul>
            {pokemons.map((s, index) => {
                return ( 
                    <li key={index}>{s.name}</li>
                )
            })}
        </ul>
        <button
        disabled={isLoading}
        onClick={()=> dispatch(getPokemons())}
        >Reset</button> 

        <button
        disabled={isLoading}
        onClick={()=> dispatch(getPokemons(page))}
        >Next</button>
    </>
  )
}
