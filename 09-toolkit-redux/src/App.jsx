
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//! useSelector -> se utiliza para obtener cualquier dato del store
//! useDispatch -> para disparar las acciones
import { useDispatch, useSelector } from 'react-redux'

//!Obtener las acciones del store que esta exportando
import { increment, decrement,incrementBy2 } from './Store/slices/counter/counterSlice'


function App() {
  
  //!Obtener el valor del state
  const {counter} = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <a >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementBy2(2))}>
          incrementBy2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
