import { useState } from "react"



export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)


    const increment = () => setCounter(counter + 1)
    const dicrement = () => setCounter(counter - 1)
    const reset = () => setCounter(0)
    

  return {
    counter,
    increment,
    dicrement,
    reset

  }
}
