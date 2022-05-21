<script>
	const year = new Date().getFullYear();
</script>

<footer class="flex min-w-full justify-center p-5 text-gray-700 ">
	<div class=" flex-col ">
		<ul class="flex flex-row flex-wrap justify-center gap-x-5  px-2">
			<li>
				<a href="/about" class="link">Apie</a>
			</li>
			<li>
				<a href="/products" class="link">Produktai</a>
			</li>
			<li>
				<a href="/payment" class="link">Apmokėjimas</a>
			</li>
			<li>
				<a href="/b2b" class="link">Verslui</a>
			</li>
			<li>
				<a href="/warranty" class="link">Kokybės garantija</a>
			</li>
			<li>
				<a href="/refund" class="link">Pinigų grąžinimas</a>
			</li>
		</ul>
		<p class="flex justify-center px-2  text-sm">
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
		background-size: auto 175%;
	}

	.link:hover {
		background-position-y: 100%;
	}
</style>
