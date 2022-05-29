<script>
import {cartData} from '../stores/overlayStore'
export let product

const addToCart = (product) => {
    console.log("pridejom", product.name);
    for(let item of $cartData) {
            if(item.id === product.id) {
                product.quantity += 1
                $cartData = $cartData;                
                
                return;
            }
    }
    $cartData = [...$cartData, product]
    
}

   $: inCart = $cartData.filter(item => item.id === product.id)
   
</script>

<div>
<button
    on:click={() => addToCart(product)}
    class="flex flex-col items-center mx-auto justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900">
    Prideti i krepseli <p>(jau yra: {inCart[0] ? inCart[0].quantity : 0})</p> 
 </button>
{#each $cartData as item }
    <p> {item.name}: {item.quantity}</p>
{/each}
 
 </div>