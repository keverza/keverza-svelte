import {writable} from "svelte/store"

export const isOverlayOpen = writable(false)
export const overlayData = writable({title: "", info: "", imgSrc: "", imgAlt: ""})

export const isCartOpen = writable(false)
export const cartData = writable([])