<script>
	export let product;
	let { href, imageSrc, imageAlt, name} = product;
</script>

<a target="_self" href={`/products/${href}`} class="group">
	<div class="w-full overflow-hidden rounded-sm ">
		<div class="relative  group-hover:opacity-75   ">
			<img  
			src={imageSrc} 
			alt={imageAlt} 
			class="h-full w-full object-cover object-center group-hover:opacity-75 aspect-square rounded-md"/> 
		
	</div>
	<h3 class="mt-2 text-md font-light text-gray-700   truncate pb-4 uppercase  tracking-widest ">{name}</h3>
	
</a>
