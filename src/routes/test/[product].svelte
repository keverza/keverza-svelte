<script context="module">
	export async function load({ fetch, params, url }) {
		//Query single product
		const slug = params.product;
		const res = await fetch(`/api/${slug}.json`);
		const data = await res.json();
		const product = data.product;

		if (res.ok) {
			return {
				props: { product, url }
			};
		}
		// redirect back if product not found
		return {
			status: 301,
			redirect: '/products'
		};
	}
</script>

<script>
	import RecommendedList from '../../components/RecommendedList.svelte';
	import ProductStory from '../../components/ProductStory.svelte';
	import Loading from '../../components/Loading.svelte';
	export let url;
	export let product;

	import { productStore, currentProduct } from '../../stores/productStore';
	import { goto } from '$app/navigation';
	let current = url.pathname;

	const reload = () => {
		console.log('reloaded');
	};

	async function fecthData() {
		const response = await fetch('/api/');
		const { Products } = await response.json();
		console.log(Products);
		return Products;
	}
	fecthData();
</script>

<div class="flex flex-col">
	{#each Products as option}
		<button class="hover:bg-gray-300" on:click={() => reload()} value={option}>
			{option.name}
		</button>
	{/each}
</div>

<ProductStory {product} />
<RecommendedList {url} />
