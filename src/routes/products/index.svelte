<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('api/all');
		const { Products } = await res.json();

		if (res.ok) {
			return {
				props: {
					Products
				}
			};
		}

		return {
			status: res.status,
			error: new Error('could not fetch')
		};
	}
</script>

<script>
	export /**
	 * @type {any}
	 */
	let Products;

	import ProductList from '$components/ProductList.svelte';

	// //search bar
	let searchTerm = '';
	let filteredProduct = [];

	// $: {
	// 	if (searchTerm) {
	// 		filteredProduct = Products.filter((product) => {
	// 			product.name.toLowerCase().includes(searchTerm.toLowerCase());
	// 			console.log(filteredProduct);
	// 		});
	// 	} else {
	// 		filteredProduct = [...Products];
	// 	}
	// }
</script>

<input
	class="w-full rounded-md text-lg border-2 border-gray-200 mx-10"
	type="text"
	placeholder=" Search"
	bind:value={searchTerm}
/>
<p>{searchTerm}</p>

<ProductList {Products} />
