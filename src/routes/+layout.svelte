<script>
	import '../app.postcss';
	import Footer from './Footer.svelte';
</script>

<div class="grid grid-rows-[1fr_auto]">
	<main class="grid-cols-bleed-wrapper">
		<slot />
	</main>

	<Footer />
</div>
