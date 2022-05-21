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
	export let Products;
	import ProductList from '../components/ProductList.svelte';
</script>

<ProductList {Products} />
