<script context="module">
	export async function load({ fetch, params, url }) {
		//Query single product
		const slug = params.product;
		const res = await fetch(`/products/${slug}.json`);
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
	export let url;

	//destructure product data
	export let product;
	export let { name, story, features, imageSrc, imageAlt } = product;

	// import { productStore, currentProduct } from '../../stores/productStore';
	// let current = url.pathname;
	// $: {
	// 	$currentProduct = $productStore.filter((product) => `/products/${product.href}` === current);
	// 	console.log($currentProduct[0]);
	// }
	// export let { name, story, features, imageSrc, imageAlt } = $currentProduct[0];
</script>

<div class="bg-white">
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
	>
		<div>
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				{name}
			</h2>
			<p class="mt-4 text-gray-500">{story}</p>

			<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
				{#each features as feature (feature.name)}
					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-900">{feature.name}</dt>
						<dd class="mt-2 text-sm text-gray-500">
							{feature.description}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
		<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
			<img src={imageSrc} alt={imageAlt} class="rounded-lg bg-gray-100" />
			<img src={imageSrc} alt={imageAlt} class="rounded-lg bg-gray-100" />
			<img src={imageSrc} alt={imageAlt} class="rounded-lg bg-gray-100" />
			<img src={imageSrc} alt={imageAlt} class="rounded-lg bg-gray-100" />
		</div>
	</div>
</div>

<RecommendedList {url} />
