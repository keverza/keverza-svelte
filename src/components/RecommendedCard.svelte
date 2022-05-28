<script>
	export let product;
	let { href, imageSrc, imageAlt, name, price } = product;
</script>

<a target="_self" href={`/products/${href}`} class="group">
	<div class="w-full overflow-hidden rounded-xl bg-gray-200">
		<div class="relative h-40 group-hover:opacity-75   ">
			<div  alt={imageAlt} style="background-image: url('{imageSrc}')" class="rounded-lg  hover:scale-110 ransform transition duration-700 bg-cover bg-center aspect-square" />
			<!-- <img class="" src={imageSrc} alt={imageAlt} /> -->
		</div>
	</div>
	<h3 class="mt-4 text-md font-medium text-gray-900  truncate pb-4">{name}</h3>
	
</a>
