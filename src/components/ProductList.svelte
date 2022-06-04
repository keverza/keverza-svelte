<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(
			'https://res.cloudinary.com/dpbpnidgc/image/upload/ar_1:1,c_fill,g_center,h_500,w_500/c_crop,g_center,w_500/v1653929573/kvrz/tetiana-bykovets-wcH1vEjwmL8-unsplash_t5soul.jpg'
		);
		const { image } = await res.json();

		if (res.ok) {
			return {
				props: { image }
			};
		}

		return {
			status: res.status,
			error: new Error('could not fetch')
		};
	}
</script>

<script lang="ts">
	let src;
	async function loadImage() {
		const res = await fetch(
			'https://res.cloudinary.com/dpbpnidgc/image/upload/ar_1:1,c_fill,g_center,h_500,w_500/c_crop,g_center,w_500/v1653929573/kvrz/tetiana-bykovets-wcH1vEjwmL8-unsplash_t5soul.jpg'
		);
		src = await res.url;
	}
	loadImage();
	export let image;
	console.log(src);
	export let Products: Array<any>;
</script>

<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	<h2 class="sr-only">Products</h2>

	<div
		class=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
	>
		{#each Products as product (product.id)}
			<a sveltekit:prefetch href={`/products/${product.href}`} class="group">
				<div class=" w-full overflow-hidden rounded-lg">
					<!-- <div  
				alt={product.imageAlt} 
				style="background-image: url('{product.imageSrc}')" 
				class="hover:scale-110 ransform transition duration-700 rounded-lg bg-cover bg-center aspect-square" />
				</div> -->
					<img
						src={`https://res.cloudinary.com/dpbpnidgc/image/upload/ar_1:1,c_fill,g_center,h_500,w_500/c_crop,g_center,w_500/v1653929573/kvrz/${product.imageSrc}`}
						alt={product.imageAlt}
						class="h-full w-full object-cover object-center group-hover:opacity-75 aspect-square"
					/>

					<h3 class="mt-4 text-xl font-light text-gray-900 uppercase truncate tracking-widest ">
						{product.name}
					</h3>
					<p class="mt-1 text-md  text-gray-700 truncate">
						{product.features[3].name}: {product.features[3].description}
					</p>
				</div></a
			>
		{/each}
	</div>
</div>
