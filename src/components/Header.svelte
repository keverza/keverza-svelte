<script>
	import Icon from 'svelte-awesome';
	import instagram from 'svelte-awesome/icons/instagram';
	import envelope from 'svelte-awesome/icons/envelope';
	import shoppingBag from 'svelte-awesome/icons/shoppingBag';

	import Logo from './Logo.svelte';
	import DarkModeToggle from './darkModeToggle.svelte';

	//subscribe to page store and track its changes
	import { page } from '$app/stores';
	$: ({ url } = $page);
</script>

<svelte:head>
	<title>Kevérza Cocoa Roasters</title>
</svelte:head>

<!-- Display header when not on home page -->
{#if url.pathname !== '/'}
<div class="flex h-20 min-w-full items-center justify-center bg-white">
	
	<a class="flex h-20 min-w-full items-center justify-center " sveltekit:prefetch
		href="/" 
		aria-label="link to homepage">
		<Logo showSubheading={false} className="p-2   h-20  pb-0" />
	</a>
	<div class="absolute flex min-w-full flex-row-reverse h-20 a pr-4 pt-0 gap-x-2 items-center">
		<a class="hover:text-zinc-800 text-zinc-400" 
					href="/" 
					aria-label="shopping cart">
					<Icon data={shoppingBag} scale={1.5}/>
				</a>

		<a class="hover:text-zinc-800 text-zinc-400 " 
			href="https://www.instagram.com/keverza" 
			aria-label="Link to Keverza instagram">		
			<Icon data={instagram} scale={1.5}/>
		</a>

		<a class="hover:text-zinc-800 text-zinc-400" 	
			href="mailto:keverza@keverza.com" 
			aria-label="Mail to Keverza">
			<Icon data={envelope} scale={1.5} class="stroke-green-700"/>
		</a>
		
		
	</div>

</div>



	

{/if}
