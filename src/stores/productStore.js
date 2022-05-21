import {writable} from "svelte/store"

export const products = writable([])

const fetchProduct = async ({fetch}) => {    
    const res = await fetch('/all.json')
    const {data} = await res.json()
    const loadedProduct = data.results.map((data, index)=> {
        return {
            name: data.name,
            id: index +1,            
        }
    })
    products.set(loadedProduct)
}

fetchProduct()