import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    //! Estado inicial, puede sustituir al interface
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons:(state, action) => {
            //!Manupulacion de datos y accion
            // state.isLoading = false; //Ya se cargo la peticion
            // state.page = action.payload.page;
            // console.log(action.payload.pokemons)
            // let quitarPokemon = action.payload.pokemons.filter(s => s.name == 'bulbasaur')
            // state.pokemons = quitarPokemon;
            // console.log(quitarPokemon);

            state.isLoading = false; //Ya se cargo la peticion
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;