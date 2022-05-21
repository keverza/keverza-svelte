<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/all.json');
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
	import ProductList from '../../components/ProductList.svelte';
	// //search bar
	// import { products } from '../../stores/productStore';

	// let searchTerm = '';
	// let filteredProduct = [];

	// $: {
	// 	if (searchTerm) {
	// 		filteredProduct = $products.filter((product) =>
	// 			product.name.toLowerCase().includes(searchTerm.toLowerCase())
	// 		);
	// 	} else {
	// 		filteredProduct = [...$Products];
	// 	}
	// }
</script>

<!-- <input
	class="w-full rounded-md text-lg border-2 border-gray-200"
	type="text"
	placeholder="Search"
	bind:value={searchTerm}
/> -->
<ProductList {Products} />
