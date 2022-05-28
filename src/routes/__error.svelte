<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	/** @type {number} */
	export let status;

	/** @type {Error & {frame?: string} & {loc?: object}} */
	export let error;
</script>
<div class="md:container md:mx-auto">
	<div class="flex flex-col justify-center items-center">
	<h1 class="text-9xl">{status}</h1>

	<pre>{error.message}</pre>

	<button class="p-6"><h2 class="text-3xl p-2 border rounded text-zinc-600 border-zinc-600 hover:bg-zinc-600 hover:text-zinc-100"> <a href="/">Grįžti į pagrindinį puslapį</a></h2></button>

	<!-- TODO figure out what to do with frames/stacktraces in prod -->
	<!-- frame is populated by Svelte in its CompileError and is a Rollup/Vite convention -->
<div class="text-gray-400 text-sm">
	{#if error.frame}
		<pre>{error.frame}</pre>
	{/if}
	{#if error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>
</div>
</div>