<script>
	import { fly, fade } from 'svelte/transition';
	import { isCartOpen, cartData, cartTotalItems } from '../stores/overlayStore';
	import { productStore } from '../stores/productStore';
	import { formatter } from '../lib/utils/helpers';

	let transforms = 'ar_1:1,c_fill,g_center,h_100,w_100';
	$cartData = [...$cartData];

	const addToCart = (product) => {
		for (let item of $cartData) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cartData = $cartData;
				return;
			}
		}
		$cartData = [...$cartData, product];
	};

	const removeItem = (product) => {
		console.log('item removed: ', product.name);
		for (let item of $cartData) {
			if (item.id === product.id) {
				if (product.quantity > 1) {
					product.quantity -= 1;
					$cartData = $cartData;
				} else {
					$cartData = $cartData.filter((cartItem) => cartItem != product);
				}
				return;
			}
		}
	};

	const addItem = (product) => {
		for (let item of $cartData) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cartData = $cartData;
				return;
			}
		}
	};

	$: total = $cartData.reduce((sum, product) => sum + product.price * product.quantity, 0);
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
	<!--
      Background backdrop, show/hide based on slide-over state.
  
      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
	<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" transition:fade />

	<div
		class="fixed inset-0 overflow-hidden"
		on:click={() => {
			isCartOpen.set(!$isCartOpen);
		}}
	>
		<div class="absolute inset-0 overflow-hidden">
			<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
				<!--
            Slide-over panel, show/hide based on slide-over state.
  
            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
				<div
					class="pointer-events-auto w-screen max-w-md "
					on:click|stopPropagation
					transition:fly={{ x: 400 }}
				>
					<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
						<div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
							<div class="flex items-start justify-between">
								<h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
									Pirkinių krepšelis
								</h2>
								<div class="ml-3 flex h-7 items-center">
									<button
										on:click={() => {
											isCartOpen.set(!$isCartOpen);
										}}
										type="button"
										class="-m-2 p-2 text-gray-400 hover:text-gray-500"
									>
										<span class="sr-only">Close panel</span>
										<!-- Heroicon name: outline/x -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>

							<div class="mt-8">
								<div class="flow-root">
									{#if !$cartTotalItems}
										<p>Jūsų krepšelis tuščias</p>
									{/if}

									<ul class="-my-6 divide-y divide-gray-200">
										{#each $cartData as product}
											<li class="flex py-6">
												<div
													class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
												>
													<img
														src={`https://res.cloudinary.com/dpbpnidgc/image/upload/${transforms}/v1653929573/kvrz/${product.imageSrc}`}
														alt={product.imageAlt}
														class="h-full w-full object-cover object-center"
													/>
												</div>

												<div class="ml-4 flex flex-1 flex-col">
													<div>
														<div class="flex justify-between text-base font-medium text-gray-900">
															<h3>
																<a href={`/products/${product.href}`}> {product.name} </a>
															</h3>
															<p class="ml-4">{formatter.format(product.price)}</p>
														</div>
														<p class="mt-1 text-sm text-gray-500">Produkto aprasas cia</p>
													</div>
													<div class="flex flex-1 items-end justify-between text-sm">
														<p class="text-gray-500">Kiekis: {product.quantity}</p>

														<div class="flex gap-x-2">
															<button
																on:click={() => {
																	removeItem(product);
																}}
																type="button"
																class="font-medium text-red-600 hover:text-indigo-500"
																>Pašalinti</button
															>
															<button
																on:click={() => {
																	addItem(product);
																}}
																type="button"
																class="font-medium text-indigo-600 hover:text-indigo-500"
																>Pridėti</button
															>
														</div>
													</div>
												</div>
											</li>
										{/each}

										<!-- More products... -->
									</ul>
								</div>
							</div>
						</div>

						<div class="border-t border-gray-200 py-6 px-4 sm:px-6">
							<div class="flex justify-between text-base font-light text-gray-900">
								<p />
								<p>{$cartTotalItems} vnt.</p>
							</div>
							<div class="flex justify-between text-base font-medium text-gray-900">
								<p>Viso</p>
								<p>{formatter.format(total)}</p>
							</div>
							<p class="mt-0.5 text-sm text-gray-500">
								Siuntimo kaina apskaičiuojama kitame žingsnyje
							</p>
							<div class="mt-6">
								<a
									disabled={!$cartTotalItems}
									href="#"
									class="  flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900"
									>Toliau</a
								>
							</div>
							<div class="mt-6 flex justify-center text-center text-sm text-gray-500">
								<p>
									arba <button
										on:click={() => {
											isCartOpen.set(!$isCartOpen);
										}}
										type="button"
										class="font-medium text-indigo-600 hover:text-indigo-500"
										>Continue Shopping<span aria-hidden="true"> &rarr;</span></button
									>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
