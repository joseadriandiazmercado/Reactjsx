import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({
    
    //Nombre de este reducer
    reducerPath: 'todos',
    //Instancias la URL base
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://jsonplaceholder.typicode.com'
    }),
    endpoints:(builder) =>({
        getTodos: builder.query({
            //Esto es lo que se va a concatenar en 'baseUrl' del "baseQuery"
            query:() => '/todos',
        }),
        //Esta es la funcion donde se tienen que mandar los parametros
        getTodoById: builder.query({
            query:(id) => `/todos/${id}`,
        })
    }),

})

//Exportacion de los endpoints
export const {useGetTodosQuery, useGetTodoByIdQuery} = todosApi;