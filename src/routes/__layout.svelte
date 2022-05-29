<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import MiniCart from "../components/MiniCart.svelte";
	import { isOverlayOpen, overlayData, isCartOpen } from '../stores/overlayStore';
	import Overlay from '../components/Overlay.svelte';

</script>

<div class="">
	<Header />
	<slot />

	{#if $isOverlayOpen}
		<Overlay>
			<h3 class="text-lg pr-4">{$overlayData.title}</h3>
			<p class="text-lg pr-4">{$overlayData.info}</p>
			<img src={$overlayData.imgSrc} alt={$overlayData.imgAlt} 
			class="h-full w-full object-cover object-center aspect-square rounded-md"/> 
		</Overlay>
	{/if}

	{#if $isCartOpen}
<MiniCart/>
{/if}

	<Footer />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
