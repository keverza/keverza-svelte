<script>
	import { currentQuestion } from '../../stores/productStore';

	export let isCompleted = false;
	let style;
	$: style = isCompleted ? 'bg-green-400' : '';

	const steps = [0, 1, 2, 3, 4];
</script>

<div class="flex flex-row justify-center items-center gap-4 py-4">
	{#each steps as step (step)}
		<span
			id={step.toString()}
			class={step === $currentQuestion
				? `bg-orange-500 h-4 w-4 rounded-full  ${style}`
				: `bg-gray-200 h-4 w-4 rounded-full ${style}  `}
		/>
	{/each}
</div>
