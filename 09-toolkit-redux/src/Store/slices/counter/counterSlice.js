//!Creacion de counterSlice -> 
//!aun falta mandarla a llamar
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    
  //!Nombre del 'type' que se enceuntra con el payload y type.
  name: 'counter',
  initialState:{
    counter: 10
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
        state.counter -= 1
    },
    incrementBy2: (state, s) =>{ 
        state.counter += s.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment,decrement, incrementBy2 } = counterSlice.actions
