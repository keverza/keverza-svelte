<script>
	import { toDimension } from 'chart.js/helpers';

	import ChartOptions from './ChartOptions.svelte';

	let aromas = [
		{ id: 1, selected: true, text: 'Karamelė' },
		{ id: 2, selected: false, text: 'Uogos' },
		{ id: 3, selected: false, text: 'Kakava' },
		{ id: 4, selected: false, text: 'Riešutai' },
		{ id: 5, selected: false, text: 'Sirupas' },
		{ id: 6, selected: false, text: 'Dribsniai' },
		{ id: 7, selected: false, text: 'Pienas' },
		{ id: 8, selected: false, text: 'Vanilė' },
		{ id: 9, selected: false, text: 'Džiovinti' },
		{ id: 10, selected: false, text: 'Tropiniai' },
		{ id: 11, selected: false, text: 'Raudonieji' },
		{ id: 12, selected: false, text: 'Citrusiniai' },
		{ id: 13, selected: false, text: 'Žolelės' },
		{ id: 14, selected: false, text: 'Prieskoniai' },
		{ id: 15, selected: false, text: 'Gėlių' }
	];
	let tastes = [
		{ id: 1, selected: true, text: 'Umami' },
		{ id: 2, selected: false, text: 'Sūru' },
		{ id: 3, selected: false, text: 'Saldu' },
		{ id: 4, selected: false, text: 'Kartu' },
		{ id: 5, selected: false, text: 'Rūgštu' },
		{ id: 6, selected: false, text: 'Saldu' }
	];

	let mouthfeel = [
		{ id: 1, selected: true, text: 'Vėsus' },
		{ id: 2, selected: false, text: 'Šiltas' },
		{ id: 3, selected: false, text: 'Sutraukiantis' },
		{ id: 4, selected: false, text: 'Aitrus' },
		{ id: 5, selected: false, text: 'Švelnus' },
		{ id: 6, selected: false, text: 'Grubus' },
		{ id: 7, selected: false, text: 'Vaškinis' }
	];
</script>

<ChartOptions title={'skonius'} options={aromas} />
<ChartOptions title={'aromatus'} options={tastes} />
<ChartOptions title={'pojūtį burnoje'} options={mouthfeel} />
