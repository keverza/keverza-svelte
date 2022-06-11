<script>
	import Chart from 'chart.js/auto';
	import { productStore } from '../../../stores/productStore';
	import { page } from '$app/stores';
	let curProduct = $productStore.filter((product) => product.href === $page.params.product);

	const handleSubmit = () => {
		console.log('submit');
	};

	//Chart js example
	const data = {
		labels: ['Uogos', 'Riešutai', 'Vaisiai', 'Kakava', 'Kava', 'Riešutai', 'Karamelė'],
		datasets: [
			{
				label: 'Jūsų vertinimas',
				data: [65, 59, 90, 81, 56, 55, 40],
				fill: true,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgb(255, 99, 132)',
				pointBackgroundColor: 'rgb(255, 99, 132)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)'
			},
			{
				label: 'Vertinimo vidurkis',
				data: [50, 50, 50, 50, 50, 80, 50],
				fill: true,
				backgroundColor: 'rgba(211, 211, 211, 0.2)',
				borderColor: 'rgb(211, 211, 211)',
				pointBackgroundColor: 'rgb(200,200,200)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(50, 50, 50)'
			}
		]
	};
	import { onMount } from 'svelte';
	let myChartCanvas;

	onMount(async (promise) => {
		const ctx = myChartCanvas.getContext('2d');
		const myChart = new Chart(ctx, {
			type: 'radar',
			data: data,
			options: {
				elements: {
					line: {
						borderWidth: 3
					}
				},
				scales: {
					r: {
						angleLines: {
							display: true
						},
						suggestedMin: 10,
						suggestedMax: 100
					}
				}
			}
		});
	});
</script>

<div class="h-20" />
<div class="flex flex-col justify-center items-center">
	<h2>Apklausa</h2>
	<p>Įvertinkite <span class="font-semibold"> {curProduct[0].name}</span> šokolado skonį</p>
</div>

<div class="flex justify-center items-center">
	<div class="max-w-2xl">
		<canvas bind:this={myChartCanvas} id="myChart" width="400" height="400" />
	</div>
</div>

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
