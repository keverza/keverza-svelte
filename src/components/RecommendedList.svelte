<script lang="ts">
	export let url: string;
	import { productStore, filteredProduct } from '../stores/productStore';
	import RecommendedCard from './RecommendedCard.svelte';

	// let current = url.pathname;

	$: {
		$filteredProduct = $productStore.filter((product) => product.href !== url);
	}
</script>

<div class="bg-white px-4">
	<div class="mx-auto max-w-2xl pt-0 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="mb-6 text-2xl font-light text-gray-900 uppercase">Siūlome išbandyti:</h2>
	</div>
	<div class="flex items-center justify-center">
		<div
			class="gap-y10 grid grid-cols-2 justify-center gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8"
		>
			{#each $filteredProduct as product (product.id)}
				<RecommendedCard {product} on:promise />
			{/each}
		</div>
	</div>
</div>
