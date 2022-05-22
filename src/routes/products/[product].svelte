<script context="module">
	export async function load({ fetch, params, url }) {
		//Query single product
		const slug = params.product;
		const res = await fetch(`/products/${slug}.json`);
		const data = await res.json();
		const product = data.product;

		if (res.ok) {
			return {
				props: { product, url }
			};
		}
		// redirect back if product not found
		return {
			status: 301,
			redirect: '/products'
		};
	}
</script>

<script>
	import RecommendedList from '../../components/RecommendedList.svelte';
	import ProductStory from '../../components/ProductStory.svelte';
	import ProductStoryPlaceholder from '../../components/ProductStoryPlaceholder.svelte';
	export let url;

	export let product;

	import { productStore, currentProduct } from '../../stores/productStore';
	import { goto } from '$app/navigation';
	let current = url.pathname;
	// $: {
	// 	$currentProduct = $productStore.filter((product) => `/products/${product.href}` === current);
	// }
	// export let product = $currentProduct[0];

	const options = $productStore;
	let selected = options[0];

	let component;
	let props;
	$: props = options[selected.id - 1];
	const route = () => {
		component = ProductStory;
		props = options[selected.id - 1];
		console.log('should not');
	};
	const clear = () => {
		component = ProductStoryPlaceholder;
		props = 'loading';
	};
	const route3 = (opt) => {
		clear();
		setTimeout(() => {
			component = ProductStory;
			props = opt;
			goto(`/products/${props.href}`);
			console.log(props.name);
		}, 1);
	};

	// export let prod;
	// $: {
	// 	prod = $productStore.filter((product) => product.id === selected.id - 1);
	// }

	// const list = $productStore.map((product)=><ProductStory {product} />)
</script>

<!-- <select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.name}</option>
	{/each}
</select>

<p>option: {options[selected.id - 1].name}</p>
<p>selected id: {selected.id - 1} {selected.name}</p>

<button class="rounded-lg p-2 bg-gray-300" on:click={route}>route</button>
<button class="rounded-lg p-2 bg-gray-300" on:click={clear}>clear</button> -->

<div class="flex flex-col">
	{#each options as option}
		<button class="hover:bg-gray-300" on:click={() => route3(option)} value={option}>
			{option.name}
		</button>
	{/each}
</div>

<svelte:component this={component} product={props} />

<!-- <p class="bg-gray-500 my-5">If statemaents below</p> -->

<!-- {#if selected.id === 1}
	<ProductStory product={options[selected.id - 1]} />
{:else if selected.id === 2}
	<ProductStory product={options[selected.id - 1]} />
{:else if selected.id === 3}
	<ProductStory product={options[selected.id - 1]} />
{:else if selected.id === 4}
	<ProductStory product={options[selected.id - 1]} />
{:else if selected.id === 5}
	<ProductStory product={options[selected.id - 1]} />
{:else if selected.id === 6}
	<ProductStory product={options[selected.id - 1]} />
{/if}

<ProductStory {product} /> -->
<RecommendedList {url} />
