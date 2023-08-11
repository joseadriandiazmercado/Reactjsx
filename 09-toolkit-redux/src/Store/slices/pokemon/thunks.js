//!acciones para llamar los distapch de manera async

import { pokemonApi } from "../../../APIs/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async(dispatch) => {
        dispatch(startLoadingPokemons())

    try {
            //!TODO: Hacer la peticiones dentro de los thunks
            //! Manera de hacerlo con fetch
            // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
            // const data = await resp.json();
            // dispatch(setPokemons({pokemons: data.results, page: page + 1 }))    

            const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
            dispatch(setPokemons({pokemons: data.results, page: page + 1 }))
    } catch (error) {
            console.log(error)``}       
    }
}