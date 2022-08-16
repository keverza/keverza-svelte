<svelte:options immutable={true} />

<script>
	export let label;
	let style = ' px-4 py-2 rounded-lg uppercase ';
</script>

<!-- the text will flash red whenever
     the `todo` object changes -->
<div on:click class={label.selected ? `${style}  bg-orange-300 text-white font-bold` : style}>
	{label.text}
</div>

<style>
	div {
		cursor: pointer;
		line-height: 1.5;
	}
</style>
