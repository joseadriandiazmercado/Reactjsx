/* eslint-disable react/prop-types */
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [search, setSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    if(search.trim() == '') return;
        //Obtener categories sin pasar por ...props 
        // setCategories(categories => [search,...categories])   

        setSearch('')
        onNewCategory(search.trim())
    }

  return (
    <form onSubmit={e => onSubmit(e)}>
    <input
        type='text'
        placeholder="Buscar gifs"
        value={search}
        onChange={e => setSearch(e.target.value)}
    />
    </form>
  )
}
