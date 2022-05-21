<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="">
	<Header />
	<slot />
	<Footer />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
