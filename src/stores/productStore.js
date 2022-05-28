import {readable, writable} from "svelte/store"
import ProductDatabase from '$lib/ProductsDatabase'

export const productStore = readable(ProductDatabase)
export const currentProduct = writable([])
export const filteredProduct = writable([])
export const props = writable([])

// const fetchProduct = async ({fetch}) => {    
//     const res = await fetch('/all.json')
//     const {data} = await res.json()    
//     products.set(data)
// }

// fetchProduct()

