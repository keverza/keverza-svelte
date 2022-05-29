<script>
    import MiniCart from "../../components/MiniCart.svelte";
    import {isCartOpen, cartData} from '../../stores/overlayStore'
</script>
<p class=" p-10 text-4xl">{$isCartOpen}</p>

{#if $isCartOpen}
<MiniCart/>
{/if}