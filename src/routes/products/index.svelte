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

<script lang="ts">
	export let Products: any;

	import ProductList from '../../components/ProductList.svelte';

	// search bar functionality
	let searchTerm = '';
	let filteredProduct: any = [];

	$: {
		if (searchTerm) {
			filteredProduct = Products.filter(
				(product) =>
					product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					product.features[1].description.toLowerCase().includes(searchTerm.toLowerCase()) ||
					product.features[3].description.toLowerCase().includes(searchTerm.toLowerCase()) ||
					product.features[5].description.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredProduct = [...Products];
		}
		console.log(filteredProduct);
	}
</script>

<div class="flex flex-col justify-center items-center w-full">
	<label for="search" class="w-3/4">Paieška:</label>
	<input
		id="search"
		class="w-3/4 rounded-md text-lg border border-gray-200 mx-10 focus:outline-none focus:border-gray-500 mb-6 py-2"
		type="text"
		placeholder=" Įveskite regioną ar norimą skonį. Pvz. Madagascar"
		bind:value={searchTerm}
	/>
	<ul class="">
		{#each filteredProduct as product}
			<li class="hover:bg-gray-100 w-full px-4 py-1 text-center">
				<a href={`/products/${product.href}`}> {product.name}</a>
			</li>
		{/each}
	</ul>
</div>

{#if filteredProduct.length === 0}
	<p>Rezultatų nėra</p>
{:else}
	<ProductList Products={filteredProduct} />
{/if}
