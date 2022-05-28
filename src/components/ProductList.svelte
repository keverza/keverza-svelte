<script lang="ts">
	export let Products : Array<any>;
</script>

<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	<h2 class="sr-only">Products</h2>

	<div
		class=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
	>
		{#each Products as product (product.id)}
			<a sveltekit:prefetch href={`/products/${product.href}`} class="group">
				<div
					class=" w-full overflow-hidden rounded-lg bg-gray-200"
				>
				<div  alt={product.imageAlt} style="background-image: url('{product.imageSrc}')" class="hover:scale-110 ransform transition duration-700 rounded-lg bg-cover bg-center aspect-square" />
					<!-- <img
						width="150px"
						src={product.imageSrc}
						alt={product.imageAlt}
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/> -->
				</div>
				<h3 class="mt-4 text-xl font-light text-gray-900 uppercase tracking-widest ">{product.name}</h3>
				<p class="mt-1 text-md  text-gray-700 truncate">
					{product.features[3].name}: {product.features[3].description}
				</p>
			</a>
		{/each}
	</div>
</div>
