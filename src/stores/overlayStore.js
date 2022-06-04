import {writable} from "svelte/store"
export const isOverlayOpen = writable(false)
export const isLoading = writable(false)


export const isCartOpen = writable(false)
export const cartData = writable([])