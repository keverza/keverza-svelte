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

	import { isProductOpen, isOverlayOpen, curProduct } from '../../stores/overlayStore';

	import RecommendedList from '../../components/RecommendedList.svelte';
	import ProductStory from '../../components/ProductStory.svelte';
	import Loading from '../../components/Loading.svelte';
	import AddToCart from '../../components/AddToCart.svelte';

	//data from [product].js endpoint

	export let productArr;
	let product = productArr[0];

	let url = product.href;
	$: console.log('from [product].svelte: ', product.name, $page.params.product);

	//remount functionality

	async function refresh() {
		const response = await fetch(`/api/${$page.params.product}`);
		const data = await response.json();
		product = data.productArr[0];
		console.log(product);
		url = product.href;

		return product;
	}

	let promise = refresh();

	// const remount = () => {
	// 	refresh();
	// 	$isOverlayOpen = false;
	// 	$isProductOpen = !$isProductOpen;
	// 	setTimeout(() => (($isProductOpen = !$isProductOpen), (url = $page.params.product)), 100);
	// };

	// // async function refreshInvalidate() {
	// // 	await invalidate(`/api/${$page.params.product}`);
	// // 	console.log(product);
	// // }

	// $: product = product;
	function handleClick() {
		promise = refresh();
	}

	//Data refreshes from recommeded card list but more elegant solution needed
	function handlePromise(e) {
		console.log('promise handler', e.detail);
		setTimeout(() => (promise = refresh()), 100);
	}
	// Maybe it would help with component update?
	// import { afterUpdate } from 'svelte'
</script>

<!-- <div class="flex flex-row justify-center items-center">
	<button on:click={remount} class="border border-black px-4 rounded">REMOUNT</button>
</div> -->
<!-- <div class="flex flex-row justify-center items-center">
	<button on:click={handleClick} class="border border-black px-4 rounded">PROMISE</button>
</div> -->

{#await promise then product}
	<ProductStory {product} />
	<AddToCart {product} />
	<RecommendedList {url} on:promise={handlePromise} />
{/await}

<a
	href="/products/alt"
	class="flex justify-center items-center text-center w-full p-2 border  hover:bg-slate-100"
	><p>Kitas dizainas</p>
</a>
