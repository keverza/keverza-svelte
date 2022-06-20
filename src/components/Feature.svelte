<script lang="ts">
	import { scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import viewport from '../lib/utils/useViewportAction';
	let scroll: number;

	let isVisible = false;
	$: console.log(isVisible);
</script>

<svelte:window bind:scrollY={scroll} />
<p>{scroll}</p>
<div class="flex min-h-screen flex-col items-start justify-center w-full">
	<div
		use:viewport
		on:enterViewport={() => (isVisible = true)}
		on:exitViewport={() => (isVisible = false)}
		class="flex flex-col text-3xl text-center w-full px-10"
	>
		<!-- <span style:transform={`translate3d(0, ${(scroll - 2500) * 2}px, 0)`}
			>Kiekvienas mūsų šokolado gabalėlis</span
		> -->
		{#if isVisible}
			<span
				class="text-left w-full"
				transition:fly={{
					delay: 250,
					duration: 500,
					x: 1000,
					opacity: 0.5,
					easing: quintOut
				}}>Kiekvienas mūsų šokolado gabalėlis</span
			>
			<span
				class="pt-2 text-right w-full"
				transition:fly={{
					delay: 400,
					duration: 600,
					x: -1000,
					opacity: 0.5,
					easing: quintOut
				}}>tai naujas atradimas ir galimybė pažinti tolimą žemyną.</span
			>
		{/if}
	</div>
</div>
