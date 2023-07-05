import axios from "axios";

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',

})


export const accountValidate = axios.create({
    baseURL: 'link-que-no-recuerdo',
    method: 'POST',
    headers: {
        'obtenerId': 'obtenerId'
    }
})