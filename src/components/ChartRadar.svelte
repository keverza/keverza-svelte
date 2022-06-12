<script>
	import Chart from 'chart.js/auto';

	export let data;

	//--- Chart js example ---

	let chartData = {
		labels: ['Uogos', 'Riešutai', 'Vaisiai', 'Kakava', 'Kava', 'Riešutai', 'Karamelė'],
		datasets: [
			{
				label: 'Jūsų vertinimas',
				data: data,
				fill: true,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderWidth: 1,
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
				borderWidth: 1,
				borderColor: 'rgb(211, 211, 211)',
				pointBackgroundColor: 'rgb(200,200,200)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(50, 50, 50)'
			}
		]
	};
	import { onMount, afterUpdate } from 'svelte';
	let myChartCanvas;

	const handleChartClick = () => {
		console.log('clicker');
	};

	//Global options
	Chart.defaults.font.size = 12;

	console.log(Chart.defaults);
	let myChart;
	let ctx;
	function createChart() {
		ctx = myChartCanvas.getContext('2d');
		if (myChart) myChart.destroy();
		myChart = new Chart(ctx, {
			type: 'radar',
			data: chartData,
			options: {
				onClick: (e) => {
					handleChartClick;
					const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
					console.log(canvasPosition);
				},
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
						min: 0,
						suggestedMin: 10,
						suggestedMax: 100
					}
				},
				animation: false
			}
		});
	}

	afterUpdate(createChart);
</script>

<div class="flex justify-center  m-auto  items-center  w-full px-10 max-w-3xl">
	<canvas bind:this={myChartCanvas} id="myChart" width="400" height="400" />
</div>
