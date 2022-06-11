import {writable} from "svelte/store"

export const isOverlayOpen = writable(false)
export const isLoading = writable(false)

export const isProductOpen = writable(true)


export const isCartOpen = writable(false)
export const cartData = writable([])
export const cartTotalItems = writable(0)