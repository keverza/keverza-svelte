<script>
	export let product;
	let { href, imageSrc, imageAlt, name } = product;
	let transforms = 'ar_1:1,c_fill,g_center,h_250,w_250';
</script>

<a target="_self" href={`/products/${href}`} class="group">
	<div class="w-full overflow-hidden rounded-sm ">
		<div class="relative  group-hover:opacity-75   ">
			<img
				src={`https://res.cloudinary.com/dpbpnidgc/image/upload/${transforms}/v1653929573/kvrz/${imageSrc}`}
				alt={imageAlt}
				class="h-full w-full object-cover object-center group-hover:opacity-75 aspect-square rounded-md"
			/>
		</div>
		<h3 class="mt-2 text-md font-light text-gray-700   truncate pb-4 uppercase  tracking-widest ">
			{name}
		</h3>
	</div></a
>
