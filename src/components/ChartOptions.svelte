<script>
	import ChartLabelsItem from './ChartLabelsItem.svelte';
	import { questionOptions, currentQuestion } from '../stores/productStore';
	import ChartRadar from './ChartRadar.svelte';
	import QuestionProgress from './ui/QuestionProgress.svelte';

	let selectedOption = 'tastes';
	let title = ['Pasirinkite jaučiamus', 'skonius'];
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
		switch ($currentQuestion) {
			case 0:
				selectedOption = 'tastes';
				title = ['Pasirinkite jaučiamus', 'skonius'];
				break;
			case 1:
				selectedOption = 'aromas';
				title = ['Pasirinkite užuostus', 'aromatus'];
				break;
			case 2:
				selectedOption = 'mouthfeel';
				title = ['Įvertinkite', 'pojūtį burnoje'];
				break;
			case 3:
				title = ['O koks skonio', 'stiprumas?'];
				break;
			case 4:
				title = ['Jei dar kilo minčių įrašykite jas', 'anketoje'];
				break;

			case 5:
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
				selectedOption = 'tastes';
				break;
		}
	};

	const handleForm = () => {
		console.log('selected', $currentQuestion, $questionOptions[selectedOption]);
		handleNext();
	};

	const handleStep = (dir) => {
		switch (dir) {
			case 'back':
				if ($currentQuestion < 0) {
					$currentQuestion = 0;
					break;
				}
				$currentQuestion -= 1;
				break;
			case 'forward':
				if ($currentQuestion <= 5) {
					$currentQuestion += 1;
				}
				break;
		}
	};
</script>

<section class="flex flex-col justify-center items-center pt-10 min-h-screen relative  ">
	<QuestionProgress {isCompleted} />
	{#if !isCompleted}
		<h2 class="text-2xl">{title[0]} <strong>{title[1]}</strong></h2>
		<form
			on:submit|preventDefault={handleForm}
			class="flex flex-col justify-center items-center h-4/6 "
		>
			{#if $currentQuestion === 3}
				<ChartRadar {data} />
			{:else if $currentQuestion === 4}
				<label for="text">Jūsų nuomonė:</label>
				<input type="text" id="text" class="border border-gray-600 rounded-lg mx-2 mb-4" />

				<label for="token">Kodas:</label>
				<input type="text" id="token" class="border border-gray-600 rounded-lg mx-2 mb-4" />
			{:else if $currentQuestion < 3}
				<div class="grid grid-cols-4 auto-cols-max justify-items-center items-center p-5">
					{#each $questionOptions[selectedOption] as label (label.id)}
						<ChartLabelsItem {label} on:click={() => toggle(label)} />
					{/each}
				</div>
			{/if}

			<div class=" absolute bottom-0 ">
				{#if $currentQuestion > 0}
					<button
						on:click={() => (handleStep('back'), handleForm())}
						class="border border-gray-500 bg-white text-gray-500 font-semibold hover:bg-amber-500 hover:text-white rounded-lg py-1 px-3"
						>Atgal</button
					>
				{/if}
				<button
					on:click={() => handleStep('forward')}
					class="border border-gray-800 bg-white  font-semibold hover:bg-amber-500 hover:text-white rounded-lg py-1 px-3"
					>{$currentQuestion > 3 ? 'Pateikti' : 'Toliau >'}</button
				>
			</div>
		</form>
	{:else}
		<p>Atsakymas <em>'priimtas'</em> . Ačiū už atsakymus</p>
		<p>Bet iš tikro dar anketa neveikia ;-p</p>
	{/if}
</section>
