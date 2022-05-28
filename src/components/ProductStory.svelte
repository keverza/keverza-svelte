<script>
	import { fade } from 'svelte/transition';
	import { blur } from 'svelte/transition';
	export let product;
	export let { name, story, features, imageSrc, imageAlt } = product;
</script>

<div in:blur class="bg-white">
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 "
	>
		<div>
			<h2 class="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl uppercase">
				{name}
			</h2>
			<p class="mt-4 text-gray-500">{story}</p>

			<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
				{#each features as feature (feature.name)}
					<div class="border-t border-gray-200 pt-4">
						<dt class="font-light text-gray-900 uppercase">{feature.name}</dt>
						<dd class="mt-2 text-sm text-gray-500 font-medium">
							{feature.description}
						</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="grid grid-cols-2 grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 gap-4 sm:gap-6 lg:gap-8   ">
			<div  alt={imageAlt} 
			style="background-image: url('{imageSrc}')" 
			class="rounded-lg bg-cover bg-center aspect-square" />
			<div  alt={imageAlt} 
			style="background-image: url('{imageSrc}')" 
			class="rounded-lg bg-cover bg-center aspect-square" />
			<div  alt={imageAlt} 
			style="background-image: url('{imageSrc}')" 
			class="rounded-lg bg-cover bg-center aspect-square" />
			<div  alt={imageAlt} 
			style="background-image: url('{imageSrc}')" 
			class="rounded-lg bg-cover bg-center aspect-square" />
		</div>
	</div>
</div>

<style>

</style>