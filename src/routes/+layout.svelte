<script>
	import '../app.postcss';
	import wallOfBlocks from '$lib/images/wall-of-blocks.png';
	import Scores from './Scores.svelte';
	import Footer from './Footer.svelte';
</script>

<!-- grid to place footer correctly -->
<div class="grid grid-rows-[1fr_1743px] items-end h-full">
	<!-- set up grid for full bleed layout -->
	<main class="grid-cols-bleed-wrapper relative">
		<slot />
	</main>

	<!-- offset height for black bg -->
	<div class="transform translate-y-[700px] xl:translate-y-0 w-full bg-surface-900 relative">
		<!-- place blocks directly on top of black bg -->
		<img
			src={wallOfBlocks}
			alt=""
			class="absolute transform -translate-y-full top-0 w-full max-h-[228px]"
		/>
		<!-- set scores section just above black bg -->
		<section class="-mt-16 mb-[245px] mx-auto max-w-[1328px] xl:p-0">
			<Scores />
		</section>
		<Footer />
	</div>
</div>

<!-- white squiggly arrow -->
<!-- bg javascript -->
