<script>
	import { productStore } from '../../../stores/productStore';
	import { page } from '$app/stores';

	let curProduct = $productStore.filter((product) => product.href === $page.params.product);
	console.log(curProduct);
	const country = curProduct[0].features[0].description.split(',')[0];
</script>

<div class="h-20" />
<div class="absolute -z-10 top-0">
	<img src="/img/no-revisions-pLmTMF2Se7M-unsplash.jpg" alt="" class="relative" />
</div>

<div
	class="flex flex-col justify-center items-center uppercase font-bold tracking-wide text-[19vw] "
>
	<h1>{country}</h1>
</div>

<div>
	<p>Kaina:</p>
	<p>Aprasymas</p>
	<button class="border-2 px-4 py-2 border-black">Įdėti į krepšelį --></button>
</div>
