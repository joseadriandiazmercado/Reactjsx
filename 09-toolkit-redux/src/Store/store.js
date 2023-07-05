//creacion del store para todas las variables globales

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokemonSlice } from "./slices/pokemon";


export const store = configureStore({
    reducer:{
        //se agregan los todos los reducers -> (nombreArchivoSlice.js)
        //! nombre de como se quiere que se identifique en el store: llamar al reducer o archivo
        counter:  counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
    }})