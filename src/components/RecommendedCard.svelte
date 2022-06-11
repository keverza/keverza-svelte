<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { goto, invalidate } from '$app/navigation';
	import { page } from '$app/stores';

	import { isProductOpen, isOverlayOpen, curProduct } from '../stores/overlayStore';

	export let product;
	$: product = product;
	let { href, imageSrc, imageAlt, name } = product;
	let imgTransforms = 'ar_1:1,c_fill,g_center,h_250,w_250';

	//remount functionality
	let url = product.href;

	async function refresh() {
		const response = await fetch(`/api/${href}`);
		const data = await response.json();
		$curProduct = data.productArr[0];
		product = $curProduct;
		console.log('from recCard', product);
		return product;
	}

	const remount = () => {
		// refresh();
		// $isOverlayOpen = false;
		// $isProductOpen = !$isProductOpen;
		setTimeout(() => (($isProductOpen = !$isProductOpen), (url = $page.params.product)), 500);
	};

	function requestEndpointsData() {
		dispatch('promise', href);
	}
</script>

<!-- TODO: stop using target="_self" to link to other page  -->
<a href={`/products/${href}`} class="group" on:click={requestEndpointsData}>
	<div class="w-full overflow-hidden rounded-sm ">
		<div class="relative  group-hover:opacity-75   ">
			<img
				src={`https://res.cloudinary.com/dpbpnidgc/image/upload/${imgTransforms}/v1653929573/kvrz/${imageSrc}`}
				alt={imageAlt}
				class="h-full w-full object-cover object-center group-hover:opacity-75 aspect-square rounded-md"
			/>
		</div>
		<h3 class="mt-2 text-md font-light text-gray-700   truncate pb-4 uppercase  tracking-widest ">
			{name}
		</h3>
	</div></a
>
