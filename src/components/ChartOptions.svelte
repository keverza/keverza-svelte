<script>
	import ChartLabelsItem from './ChartLabelsItem.svelte';
	import { questionOptions } from '../stores/productStore';
	import ChartRadar from './ChartRadar.svelte';

	let currentQuestion = 0;
	let selectedOption = 'tastes';
	let title = 'skonius';
	let isCompleted = false;

	let data = [80, 80, 80, 80, 80, 80, 80];

	const optionKeys = Object.keys($questionOptions);

	function toggle(toggled) {
		$questionOptions[selectedOption] = $questionOptions[selectedOption].map((label) => {
			if (label === toggled) {
				return {
					id: label.id,
					text: label.text,
					selected: !label.selected
				};
			}

			return label;
		});
	}

	const handleNext = () => {
		// currentQuestion += 1;
		switch (currentQuestion) {
			case 0:
				selectedOption = 'tastes';
				title = 'skonius';
				break;
			case 1:
				selectedOption = 'aromas';
				title = 'aromatus';
				break;
			case 2:
				selectedOption = 'mouthfeel';
				title = 'pojūtį burnoje';
				break;
			case 3:
				selectedOption = 'mouthfeel';
				title = 'pojūtį burnoje';
				break;

			case 4:
				isCompleted = true;
				console.log($questionOptions);
				//reset store
				$questionOptions = optionKeys.map((key) =>
					$questionOptions[key].map((item) => {
						return {
							selected: false,
							id: item.id,
							text: item.text
						};
					})
				);

				console.log($questionOptions);
				break;
			default:
				title = 'skonius';
				break;
		}
	};

	const handleForm = () => {
		console.log('selected', currentQuestion, $questionOptions[selectedOption]);
		handleNext();
	};
</script>

<section class="flex flex-col justify-center items-center pt-10 min-h-screen">
	{#if !isCompleted}
		<h2 class="text-2xl">Pasirinkite jaučiamus <strong>{title}</strong></h2>
		<form on:submit|preventDefault={handleForm} class="flex flex-col justify-center items-center">
			{#if currentQuestion === 3}
				<ChartRadar {data} />
			{:else}
				<div class="grid grid-cols-4 auto-cols-max justify-items-center items-center p-5">
					{#each $questionOptions[selectedOption] as label (label.id)}
						<ChartLabelsItem {label} on:click={() => toggle(label)} />
					{/each}
				</div>
			{/if}

			<div>
				{#if currentQuestion > 0}
					<button
						on:click={() => (currentQuestion -= 1)}
						class="border border-gray-500 bg-white text-gray-500 font-semibold hover:bg-amber-500 hover:text-white rounded-lg py-1 px-3"
						>Atgal</button
					>
				{/if}
				<button
					on:click={() => (currentQuestion += 1)}
					class="border border-gray-800 bg-white  font-semibold hover:bg-amber-500 hover:text-white rounded-lg py-1 px-3"
					>{currentQuestion > 2 ? 'Pateikti' : 'Toliau >'}</button
				>
			</div>
		</form>
	{:else}
		<p>Atsakymas <em>'priimtas'</em> . Ačiū už atsakymus</p>
	{/if}
</section>
