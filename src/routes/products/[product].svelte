<!-- <script context="module">

	export async function load({ fetch, params, url }) {
		// try to reload page
		// if(changed) {
		// 	location.assign(url)
		// 	return new Promise(()=> {})
		// }

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
</script> -->
<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	import { isProductOpen, isOverlayOpen } from '../../stores/overlayStore';

	import RecommendedList from '../../components/RecommendedList.svelte';
	import ProductStory from '../../components/ProductStory.svelte';
	import Loading from '../../components/Loading.svelte';
	import AddToCart from '../../components/AddToCart.svelte';
	import About from '../about.svelte';

	//data from [product].js endpoint

	export let productArr;
	let product = productArr[0];
	let url = product.href;

	$: console.log('from [product].svelte: ', product.name, $page.params.product);

	//remount functionality

	async function refresh() {
		await invalidate(`/api/${$page.params.product}`);
		const response = await fetch(`/api/${$page.params.product}`);
		const data = await response.json();
		product = data.productArr[0];
		console.log(product);
		return product;
	}

	const remount = () => {
		refresh();
		$isOverlayOpen = false;
		$isProductOpen = !$isProductOpen;
		setTimeout(() => (($isProductOpen = !$isProductOpen), (url = $page.params.product)), 100);
	};

	// async function refreshInvalidate() {
	// 	await invalidate(`/api/${$page.params.product}`);
	// 	console.log(product);
	// }

	$: product = product;
</script>

<div class="flex flex-row justify-center items-center">
	<button on:click={remount} class="border border-black px-4 rounded">REMOUNT</button>
</div>
{#if $isProductOpen}
	<ProductStory {product} />
	<AddToCart {product} />
	<RecommendedList {url} />
{:else}
	<Loading />
{/if}
