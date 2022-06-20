<script lang="ts">
	import { blur } from 'svelte/transition';
	import { isOverlayOpen, isLoading } from '../stores/overlayStore';
	import StoryImageOverlay from './StoryImageOverlay.svelte';

	export let product;
	//destructured data does not dynamically update for some reason
	// let { name, story, features, imageSrc, imageAlt, href } = product;

	let transforms = 'ar_1:1,c_fill,g_center,h_500,w_500';

	let imageText = '...';
	function handleClick(imgOverlayText: string) {
		isOverlayOpen.set(!$isOverlayOpen);
		isLoading.set(!$isLoading);
		imageText = imgOverlayText;
	}

	//console
	$: console.log('from productStory: ', product.name);
</script>

<div in:blur|local class="bg-white">
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 "
	>
		<div>
			<h2 class="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl uppercase">
				{product.name}
			</h2>
			<p class="mt-4 text-gray-500">{product.story}</p>

			<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
				{#each product.features as feature (feature.name)}
					<div class="border-t border-gray-200 pt-4">
						<dt class="font-light text-gray-900 uppercase">{feature.name}</dt>
						<dd class="mt-2 text-sm text-gray-500 font-medium">
							{feature.description}
						</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div
			class="grid grid-cols-2 grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 gap-4 sm:gap-6 lg:gap-8 relative   "
		>
			{#if $isOverlayOpen}
				<StoryImageOverlay imageSrc={product.imageSrc} imageAlt={product.imageAlt} {imageText} />
			{/if}

			<img
				id="1"
				on:click={() => {
					handleClick('mmm... šokoladas');
				}}
				src={`https://res.cloudinary.com/dpbpnidgc/image/upload/${transforms}/v1653929573/kvrz/${product.imageSrc}`}
				alt={product.imageAlt}
				class="{$isOverlayOpen
					? 'invisible'
					: 'hover:opacity-75'}  cursor-pointer transition-all duration-150  object-cover object-center  aspect-square rounded-md"
			/>
			<img
				id="2"
				on:click={() => {
					handleClick('šokoladas kvadratu');
				}}
				src={`https://res.cloudinary.com/dpbpnidgc/image/upload/${transforms}/v1653929573/kvrz/${product.imageSrc}`}
				alt={product.imageAlt}
				class="{$isOverlayOpen
					? 'invisible'
					: 'hover:opacity-75'}  cursor-pointer transition-all duration-150  object-cover object-center  aspect-square rounded-md "
			/>
			<img
				id="3"
				on:click={() => {
					handleClick('saldu kartu kaip du medu');
				}}
				src={`https://res.cloudinary.com/dpbpnidgc/image/upload/${transforms}/v1653929573/kvrz/${product.imageSrc}`}
				alt={product.imageAlt}
				class="{$isOverlayOpen
					? 'invisible'
					: 'hover:opacity-75'}  cursor-pointer transition-all duration-150  object-cover object-center  aspect-square rounded-md"
			/>
			<img
				id="4"
				on:click={() => {
					handleClick('ketvirtas kartas nemeluoja');
				}}
				src={`https://res.cloudinary.com/dpbpnidgc/image/upload/${transforms}/v1653929573/kvrz/${product.imageSrc}`}
				alt={product.imageAlt}
				class="{$isOverlayOpen
					? 'invisible'
					: 'hover:opacity-75'}  cursor-pointer transition-all duration-150  object-cover object-center  aspect-square rounded-md"
			/>
		</div>
	</div>
</div>

<a
	href="/products/{product.href}/poll"
	class="text-center min-w-full border p-4 bg-yellow-300 font-semibold">Poll</a
>
<a
	href="/products/{product.href}/alt"
	class="text-center min-w-full border p-4 bg-yellow-300 font-semibold">kitas dizainas</a
>

<style>
</style>
