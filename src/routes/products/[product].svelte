<script context="module">
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
</script>

<script>
	import RecommendedList from '../../components/RecommendedList.svelte';
	import ProductStory from '../../components/ProductStory.svelte';
	import Loading from '../../components/Loading.svelte';
	import AddToCart from '../../components/AddToCart.svelte'
	export let url;
	export let product;

	import { productStore, currentProduct } from '../../stores/productStore';
	import { goto } from '$app/navigation';
	import About from '../about.svelte';
	let current = url.pathname;
</script>

<ProductStory {product} />
<AddToCart {product}/>
<RecommendedList {url} />
