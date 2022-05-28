<script>
	export let product;
	let { href, imageSrc, imageAlt, name} = product;
</script>

<a target="_self" href={`/products/${href}`} class="group">
	<div class="w-full overflow-hidden rounded-sm bg-gray-200">
		<div class="relative  group-hover:opacity-75   ">
			<div  alt={imageAlt} 
			style="background-image: url('{imageSrc}')" 
			class="rounded-lg  hover:scale-110 ransform transition duration-700 bg-cover bg-center aspect-square" />
			<!-- <img class="" src={imageSrc} alt={imageAlt} /> -->
		</div>
	</div>
	<h3 class="mt-2 text-md font-light text-gray-700   truncate pb-4 uppercase  tracking-widest ">{name}</h3>
	
</a>
