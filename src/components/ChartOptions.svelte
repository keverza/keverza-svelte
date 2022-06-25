<script>
	import ChartLabelsItem from './ChartLabelsItem.svelte';

	export let options;
	export let title;

	function toggle(toggled) {
		options = options.map((label) => {
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

	const handleSubmit = () => {
		console.log('selected', title, options);
	};
</script>

<section class="flex flex-col justify-center items-center pt-10">
	<h2 class="text-2xl">Pasirinkite jaučiamus <strong>{title}</strong></h2>
	<form on:submit|preventDefault={handleSubmit} class="flex flex-col justify-center items-center">
		<div class="grid grid-cols-4 auto-cols-max justify-items-center items-center p-5">
			{#each options as label (label.id)}
				<ChartLabelsItem {label} on:click={() => toggle(label)} />
			{/each}
		</div>
		<button
			class="border border-gray-800 bg-white font-semibold hover:bg-amber-500 hover:text-white rounded-lg py-1 px-3"
			>Pateikti</button
		>
	</form>
</section>
