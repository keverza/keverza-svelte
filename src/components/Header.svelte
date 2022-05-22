<script>
	import Logo from './Logo.svelte';

	//subscribe to page store and track its changes
	import { page } from '$app/stores';
	$: ({ url } = $page);
</script>

<svelte:head>
	<title>Kevérza Cocoa Roasters</title>
</svelte:head>

<!-- Display header when not on home page -->
{#if url.pathname !== '/'}
	<a class="flex h-20 min-w-full items-center justify-center bg-white" href="/">
		<Logo showSubheading={false} className="p-2 h-20 max-w-sm pb-0 " />
	</a>
{/if}
