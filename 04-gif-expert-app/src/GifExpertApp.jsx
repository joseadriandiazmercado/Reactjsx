import { useState } from "react"
import { AddCategory, GifGrid } from "./components/"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory))return
        setCategories([newCategory, ...categories])
    }

  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory
    //  setCategories={setCategories}
    onNewCategory={e => onAddCategory(e)}
    />
        {categories.map(e => (
            <GifGrid
            key={e}
            category={e}/>
           )
        )}
    </>  
  )
}
