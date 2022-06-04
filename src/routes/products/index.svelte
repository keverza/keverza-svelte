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

	import ProductList from '../../components/ProductList.svelte';
	import About from '../about.svelte';

	// //search bar
	let searchTerm = '';
	let filteredProducts = [...Products];
	let filteredProduct = [];
	let filteredNote = [];
	const test = [
		'madagascar sambirano',
		'tanzania kokoa kamily',
		'india idukki',
		'guatemala cahabón',
		'são tome felis cacao',
		'baltasis aviečių šokoladas'
	];
	// product.name.toLowerCase().includes(searchTerm.toLowerCase());
	$: {
		if (searchTerm) {
			filteredProduct = Products.filter(
				(product) =>
					product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					product.features[3].description.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredProduct = [...Products];
		}
		console.log(filteredProduct);
	}
</script>

<div class="flex flex-col justify-center items-center w-full">
	<label for="search">Paieška:</label>
	<input
		id="search"
		class="w-3/4 rounded-md text-lg border border-gray-200 mx-10 focus:outline-none focus:border-gray-500"
		type="text"
		placeholder=" Įveskite regioną ar norimą skonį. Pvz. Madagascar"
		bind:value={searchTerm}
	/>

	{#each filteredProduct as product}
		<p class="pl-5">{product.name}</p>
	{/each}
</div>

{#if filteredProduct.length === 0}
	<p>Rezultatų nėra</p>
{:else}
	<ProductList Products={filteredProduct} />
{/if}
