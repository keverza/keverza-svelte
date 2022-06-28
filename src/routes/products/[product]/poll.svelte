<script>
	import Chart from 'chart.js/auto';
	import { Interaction } from 'chart.js';
	import { getRelativePosition } from 'chart.js/helpers';
	import { productStore } from '../../../stores/productStore';
	import { page } from '$app/stores';

	import ChartRadar from '../../../components/ChartRadar.svelte';
	import ChartOptions from '../../../components/ChartLabels.svelte';

	let curProduct = $productStore.filter((product) => product.href === $page.params.product);

	const handleSubmit = () => {
		console.log('submit', data);
	};

	let data = [80, 80, 80, 80, 80, 80, 80];
</script>

<div class="h-20" />
<div class="flex flex-col justify-center items-center">
	<h2>Apklausa</h2>
	<p>Įvertinkite <span class="font-semibold"> {curProduct[0].name}</span> šokolado skonį</p>
</div>
<ChartOptions />
<!-- <ChartRadar {data} /> -->

<!-- <form on:submit|preventDefault={handleSubmit} class="flex flex-col justify-between items-center">
	<label for="a">a:</label>
	<input
		type="range"
		min="0"
		max="100"
		id="a"
		class="border border-gray-600 rounded-lg mx-2 mb-4"
		bind:value={data[0]}
	/>

	<label for="g">g:</label>
	<input
		type="range"
		min="0"
		max="100"
		id="g"
		class="border border-gray-600 rounded-lg mx-2 mb-4"
		bind:value={data[6]}
	/>
</form> -->

<form on:submit|preventDefault={handleSubmit} class="flex flex-col justify-between items-center">
	<label for="text">Jūsų nuomonė:</label>
	<input type="text" id="text" class="border border-gray-600 rounded-lg mx-2 mb-4" />

	<label for="token">Kodas:</label>
	<input type="text" id="token" class="border border-gray-600 rounded-lg mx-2 mb-4" />

	<button
		class="border border-gray-800 bg-white font-semibold hover:bg-amber-500 hover:text-white rounded-lg py-1 px-3"
		>Pateikti</button
	>
</form>
