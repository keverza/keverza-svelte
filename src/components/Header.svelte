<script>
	import Icon from 'svelte-awesome';
	import instagram from 'svelte-awesome/icons/instagram';
	import envelope from 'svelte-awesome/icons/envelope';
	import shoppingBag from 'svelte-awesome/icons/shoppingBag';

	import Logo from './Logo.svelte';

	import { isCartOpen, cartData } from '../stores/overlayStore';
	// import darkModeToggle from './darkModeToggle.svelte';

	//subscribe to page store and track its changes
	import { page } from '$app/stores';
	$: ({ url } = $page);
</script>

<svelte:head>
	<title>Kevérza Cocoa Roasters</title>
</svelte:head>

<!-- Display header when not on home page -->
{#if url.pathname !== '/'}
	<div class="flex flex-col h-20 min-w-full items-center justify-center bg-white">
		<a
			class="flex h-20 min-w-content items-center justify-center "
			sveltekit:prefetch
			href="/"
			aria-label="link to homepage"
		>
			<Logo showSubheading={false} className="p-4 h-20 pb-0" />
		</a>

		<div
			class="flex justify-center gap-x-6 md:absolute md:gap-x-2 md:flex-row-reverse md:min-w-full md:justify-start md:pr-4  "
		>
			<button
				class="hover:text-zinc-800 text-zinc-400  "
				aria-label="shopping cart"
				on:click={() => {
					isCartOpen.set(!$isCartOpen);
				}}
			>
				<Icon data={shoppingBag} scale={1.5} />
			</button>

			<a
				class="hover:text-zinc-800 text-zinc-400 "
				href="https://www.instagram.com/keverza"
				aria-label="Link to Keverza instagram"
			>
				<Icon data={instagram} scale={1.5} />
			</a>

			<a
				class="hover:text-zinc-800 text-zinc-400"
				href="mailto:keverza@keverza.com"
				aria-label="Mail to Keverza"
			>
				<Icon data={envelope} scale={1.5} />
			</a>
		</div>
	</div>
{/if}
