<script>
    import {fade} from 'svelte/transition'
    import {isOverlayOpen} from '../stores/overlayStore'
</script>

<div 
class="fixed w-screen h-screen top-0 left-0 flex justify-center items-center opacity-80 bg-gray-400 backdrop-blur-3xl z-10 p-10 md:p-20"
on:click={()=>{isOverlayOpen.set(!$isOverlayOpen)}}
transition:fade
></div>

<div 
class="fixed w-screen h-screen top-0 left-0 flex justify-center items-center   z-10 p-10 md:p-20"
on:click={()=>{isOverlayOpen.set(!$isOverlayOpen)}}
transition:fade
>

    <div class=" text-gray-800 relative m-10 max-h-screen bg-white rounded-md shadow-md " >
        <div class="aspect-square max-h-screen max-w-2xl m-10  p-10 rounded-md"on:click|stopPropagation>
           <button 
            class="absolute top-0 right-4 text-6xl text-gray-500 hover:-translate-y-0.5 transition-transform"
            on:click={()=>{isOverlayOpen.set(!$isOverlayOpen)}}> &times;</button> 

        <slot/>

        </div>
    
        
        
    </div>    </div>
    
