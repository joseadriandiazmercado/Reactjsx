//creacion del store para todas las variables globales

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";


export const store = configureStore({
    reducer:{
        //se agregan los reducers
        //! nombre de como se quiere que se identifique en el store: llamar al reducer o archivo
        counter:counterSlice.reducer
    }
})