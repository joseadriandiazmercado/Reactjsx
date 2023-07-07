import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

//colocar 'Provider' de redux para hacerlo global
import { Provider } from 'react-redux'
//store encontrada en la carpeta de Store
import { store } from './Store/store.js'
import { PokemonApp } from './PokemonApp.jsx'
import { TodoApp } from './TodoApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp/> */}
  <TodoApp></TodoApp>
    </Provider>
  </React.StrictMode>,
)
