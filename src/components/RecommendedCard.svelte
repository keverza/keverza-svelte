<script>
	export let product;
	let { href, imageSrc, imageAlt, name, price } = product;
</script>

<a target="_self" sveltekit:prefetch href={`/products/${href}`} class="group">
	<div class="w-full overflow-hidden rounded-xl bg-gray-200">
		<div class="relative h-40 group-hover:opacity-75">
			<img src={imageSrc} alt={imageAlt} />
		</div>
	</div>
	<h3 class="mt-4 text-lg font-medium text-gray-900">{name}</h3>
	<p class="mt-1 text-sm text-gray-700">{price}</p>
</a>
