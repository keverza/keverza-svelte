<script lang="ts">
	import { page } from '$app/stores';

	import B2B from '../components/faq/b2b.svelte';
	import Payment from '../components/faq/payment.svelte';
	import Refund from '../components/faq/refund.svelte';
	import Quality from '../components/faq/quality.svelte';
	import Delivery from '../components/faq/delivery.svelte';

	let pageSlug: string;
	$: pageSlug = $page.params.slug;

	const navLinkList = [
		{
			slug: 'b2b',
			text: 'Verslui',
			id: 1,
			component: B2B
		},
		{
			slug: 'quality',
			text: 'Kokybės garantija',
			id: 2,
			component: Quality
		},
		{
			slug: 'refund',
			text: 'Pinigų grąžinimas',
			id: 3,
			component: Refund
		},
		{
			slug: 'delivery',
			text: 'Pristatymas',
			id: 4,
			component: Delivery
		},
		{
			slug: 'payment',
			text: 'Apmokėjimas',
			id: 5,
			component: Payment
		}
	];
	// const cols = navLinkList.length;
	let selected = {};
	$: selected = navLinkList.find((link) => link.slug === $page.params.slug);

	console.log('selected', selected);
</script>

<div class="flex flex-row justify-center items-center">
	<ul
		class={`
    mt-10 grid grid-cols-1 md:grid-cols-5  max-w-3xl  gap-3 text-center text-gray-600`}
	>
		{#each navLinkList as { id, slug, text } (id)}
			<li class="w-40">
				<a
					sveltekit:prefetch
					href={`/faq-${slug}`}
					class={pageSlug === slug ? 'underline font-semibold ' : ''}
					aria-label={'Footer tags link'}
				>
					{text}
				</a>
			</li>
		{/each}
	</ul>
</div>

<div class="flex min-h-screen flex-col items-start justify-center py-2">
	<div class="mx-auto text-3xl">
		<svelte:component this={selected.component} />
	</div>
</div>
