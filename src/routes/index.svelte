<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/all.json');
		const { Products } = await res.json();

		if (res.ok) {
			return {
				props: { Products }
			};
		}

		return {
			status: res.status,
			error: new Error('could not fetch')
		};
	}
</script>

<script>
	import { productStore } from '../stores/productStore';

	export let Products;

	import Logo from '../components/Logo.svelte';
	import ProductList from '../components/ProductList.svelte';
	import { fade } from 'svelte/transition';
</script>

<a in:fade class="flex min-h-screen min-w-full items-center justify-center bg-gray-100" href="/">
	<Logo className="sticky top-1/3 mb-0 max-w-sm pb-0 md:max-w-md lg:max-w-xl" />
</a>

<ProductList {Products} />
<a href="/products/guatemala-cahabon">guatemala-cahabon</a>
<br />
<a href="/products/tanzania-kokoa-kamily">tanzania-kokoa-kamily</a>
