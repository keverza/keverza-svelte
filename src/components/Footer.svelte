<script>
	import { onMount, tick } from 'svelte';

	import Logo from './Logo.svelte';
	const year = new Date().getFullYear();
	$: bodyHeight = 0;
	onMount(() => {
		bodyHeight = document.body.scrollHeight;
	});
</script>

<footer class="flex flex-col min-w-full justify-center p-5 text-gray-700 pt-10 ">
	<hr />
	<div class=" w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 m-auto pt-10">
		<ul
			class=" flex min-w-fit flex-col gap-x-5 w-1/2 px-2 space-y-4 items-center md:items-start justify-self-center md:justify-self-start"
		>
			<li>
				<a sveltekit:prefetch href="/about" class="link" aria-label={'Footer tags link'}>Apie</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/products" class="link" aria-label={'Footer tags link'}
					>Produktai</a
				>
			</li>
		</ul>
		<ul
			class="flex flex-col w-1/2 min-w-fit  gap-x-5  px-2 items-center md:items-end justify-self-center md:justify-self-end space-y-4"
		>
			<li>
				<a sveltekit:prefetch href="/faq-quality" class="link" aria-label={'Footer tags link'}
					>D. U. K.</a
				>
			</li>

			<li>
				<a sveltekit:prefetch href="/contact" class="link" aria-label={'Footer tags link'}
					>Kontaktai</a
				>
			</li>
		</ul>
	</div>
	<hr />
	{#if bodyHeight > 1000}
		<div class="flex flex-col pt-10 justify-center items-center">
			<a sveltekit:prefetch href="/" aria-label="link to homepage">
				<Logo showSubheading={true} className="justify-center h-20 m-auto  pb-0" />
			</a>
			<p class="text-sm text-center pt-2 uppercase">
				Lietuviškas nuo plytelės iki pupelės šokoladas
			</p>
		</div>
	{/if}
	<div class="flex flex-col pt-6">
		<p class="flex justify-center px-2 text-sm">
			All rights reserved. &copy; Kevérza 2019-{year}.
		</p>
		<p class="flex justify-center text-sm">Designed by Kevérza.</p>
	</div>
</footer>

<style>
	.link {
		text-decoration: none;
		background-position-y: -0%;
		background-image: linear-gradient(white 50%, gold 50%);
		transition: background 500ms ease;
		background-size: 2px;
		background-size: auto 185%;
		padding: 2px;
		text-transform: uppercase;
	}

	.link:hover {
		background-position-y: 100%;
	}
</style>
