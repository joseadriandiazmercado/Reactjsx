/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
    const[images, setImages] = useState([])
    const[isLoading, setIsLoading] = useState(true)

    const getCategoria = async () =>{
    const newImagenes = await getGifs(category);
    setImages(newImagenes)
    setIsLoading(false)
    }

    useEffect(() => {getCategoria() }, [])

  return {
    images,
    isLoading
  }
}

export default useFetchGifs