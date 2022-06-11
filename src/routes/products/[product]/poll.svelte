<script>
	import Chart from 'chart.js/auto';
	import { productStore } from '../../../stores/productStore';
	import { page } from '$app/stores';
	let curProduct = $productStore.filter((product) => product.href === $page.params.product);

	const handleSubmit = () => {
		console.log('submit');
	};

	//Chart js example
	import { onMount } from 'svelte';
	let myChartCanvas;

	onMount(async (promise) => {
		const ctx = myChartCanvas.getContext('2d');
		const myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [
					{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});
</script>

<div class="flex flex-col justify-center items-center">
	<h2>Apklausa</h2>
	<p>Įvertinkite <span class="font-semibold"> {curProduct[0].name}</span> šokolado skonį</p>
</div>

<div class=""><canvas bind:this={myChartCanvas} id="myChart" width="400" height="400" /></div>

<form on:submit|preventDefault={handleSubmit} class="flex flex-col justify-center items-center">
	<label for="text"
		>Jusu nuomone:<input
			type="text"
			id="text"
			class="border border-gray-600 rounded-lg mx-2"
		/></label
	>

	<button class="border bg-slate-400 rounded-lg py-1 px-3">Pateikti</button>
</form>
