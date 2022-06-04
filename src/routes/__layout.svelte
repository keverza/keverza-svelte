<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import MiniCart from '../components/MiniCart.svelte';
	import { isCartOpen } from '../stores/overlayStore';
</script>

<div class="">
	<Header />
	<slot />

	{#if $isCartOpen}
		<MiniCart />
	{/if}

	<Footer />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
