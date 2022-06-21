<script context="module">
	// @ts-ignore
	export async function load({ fetch }) {
		const res = await fetch('/api/all');
		const { Products } = await res.json();

		if (res.ok) {
			return {
				props: { Products }
			};
		}

		return {
			status: res.status,
			error: new Error('could not fetch')
		};
	}
</script>

<script>
	import { productStore } from '../stores/productStore';

	export /**
	 * @type {any}
	 */
	let Products;

	import Logo from '../components/Logo.svelte';
	import Feature from '../components/Feature.svelte';
	import ProductList from '../components/ProductList.svelte';
	import { fade } from 'svelte/transition';
</script>

<div in:fade class="flex min-h-screen min-w-full items-center justify-center bg-gray-100">
	<Logo className="sticky top-1/3 mb-0 max-w-sm pb-0 md:max-w-md lg:max-w-xl " />
</div>

<ProductList {Products} />
<Feature />
