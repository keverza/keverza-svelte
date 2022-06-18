<script context="module">
	//	//Data fetch from regular end point
	// export async function load({ fetch, params, url }) {
	// 	// try to reload page
	// 	// if(changed) {
	// 	// 	location.assign(url)
	// 	// 	return new Promise(()=> {})
	// 	// }

	// 	//Query single product
	// 	const slug = params.product;
	// 	const res = await fetch(`/api/${slug}.json`);
	// 	const data = await res.json();
	// 	const product = data.product;

	// 	if (res.ok) {
	// 		return {
	// 			props: { product, url }
	// 		};
	// 	}
	// 	// redirect back if product not found
	// 	return {
	// 		status: 301,
	// 		redirect: '/products'
	// 	};
	// }

	// Invalidate shadow endpoint after navigation
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/${params.product}`);
		const product = await res.json();
		if (res.ok) {
			return {
				props: { product: product, url: params.product }
			};
		}

		return {
			status: res.status,
			error: new Error('could not fetch')
		};

		// return {
		// 	status: 200,
		// 	props: {
		// 		paramData: params.product
		// 	}
		// };
	}
</script>

<script>
	export let product;
	export let url;
	$: console.log('from module: ', product);
	import { page } from '$app/stores';
	import { onMount, tick } from 'svelte';
	import { invalidate } from '$app/navigation';

	import { isProductOpen, isOverlayOpen, curProduct } from '../../stores/overlayStore';

	import RecommendedList from '../../components/RecommendedList.svelte';
	import ProductStory from '../../components/ProductStory.svelte';
	import Loading from '../../components/Loading.svelte';
	import AddToCart from '../../components/AddToCart.svelte';

	//data from [product].js endpoint

	// export let productEndpoint;
	// console.log('endpoint: ', productEndpoint);

	// let product = productEndpoint[0];
	// let product = paramData;

	// let url = product.href;

	// Maybe it would help with component update?
	// import { afterUpdate } from 'svelte'

	// let promise = getData();
	// async function getData() {
	// 	setTimeout(() => {
	// 		console.log('delay');
	// 	}, 200);
	// 	await tick();

	// 	return product;
	// }

	// function handleClick() {
	// 	promise = getData();
	// }
</script>

<ProductStory {product} />
<AddToCart {product} />
<RecommendedList {url} />

<a
	href="/products/alt"
	class="flex justify-center items-center text-center w-full p-2 border font-medium bg-amber-300  hover:bg-slate-100"
	><p>Kitas dizainas</p>
</a>
