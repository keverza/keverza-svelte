<script lang="ts">
	import Icon from 'svelte-awesome';
	import close from 'svelte-awesome/icons/close';
	import { blur } from 'svelte/transition';
	import { isOverlayOpen } from '../stores/overlayStore';

	export let imageText: string;
	export let imageAlt: string;
	export let imageSrc: string;
	let transforms = 'ar_1:1,c_fill,g_center,h_800,w_800';

	function handleClick() {
		isOverlayOpen.set(!$isOverlayOpen);
	}
</script>

<img
	transition:blur
	src={`https://res.cloudinary.com/dpbpnidgc/image/upload/${transforms}/v1653929573/kvrz/${imageSrc}`}
	alt={imageAlt}
	class=" h-full absolute w-full object-cover object-center group-hover:opacity-75 aspect-square rounded-md"
/>
<div
	transition:blur
	class="absolute flex flex-col w-full h-full justify-between z-10"
	on:click={() => {
		handleClick();
	}}
>
	<Icon
		data={close}
		scale={3}
		class="text-zinc-600  cursor-pointer hover:text-zinc-800 pr-2 justify-self-end  place-self-end driba "
	/>
	<div
		class="pt-3 text-xl bg- w-full font-light text-center bg-gray-50 opacity-70  text-gray-900  truncate pb-4 uppercase tracking-widest place-self-center"
	>
		<p>{imageText}</p>
	</div>
</div>
