import { useState } from "react"
import { useGetTodoByIdQuery, useGetTodosQuery } from "./Store/apis/todosApi"


export const TodoApp = () => {

const [todoId, setTodoId] = useState(1);

    //!Cambiar de nombre la data, ahora se llamada 'todos' que es igual a un arreglo vacio
    // const {data: todos = [], isLoading} = useGetTodosQuery()
    const {data: todo, isLoading} = useGetTodoByIdQuery(todoId)


  return (
    <>
    
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading.... {isLoading ? 'True' : 'False'}</h4>

        {/*Regresar la data como tipo json*/}
        <pre>{JSON.stringify(todo)}</pre>

        <button
        onClick={() => setTodoId( todoId  - 1)}
        >
            Prev Todo
        </button>
        <button
        onClick={() => setTodoId( todoId  + 1)}
        >
            Next Todo
        </button>


            {/* <ul>
            {todos.map(todo => ( 
                <li key={todo.id + Date.now().toString() + Math.random()}> <strong>{todo.completed ? 'Completado:': 'Incompleto:'}</strong> {todo.title}</li>
            ))}
            </ul> */}

        
    </>
  )
}