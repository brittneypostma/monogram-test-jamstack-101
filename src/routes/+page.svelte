<script>
	import Hero from './Hero.svelte';
	import Javascript from './Javascript.svelte';
	import fallingLogos from '$lib/images/falling-logos.png';
	import squigglyDark from '$lib/images/squiggly-dark.png';
	import Api from './Api.svelte';
	import Markup from './Markup.svelte';
	import Scores from './Scores.svelte';
</script>

<!-- group for main grid -->
<div class="main">
	<!-- each section aligns with grid and takes account for the margin between and height for absolute images -->
	<section class="pl-[10%] xl:pl-0 mt-[153px] h-[970px]">
		<Hero />
	</section>
	<section class="mt-[42px] h-[1260px]">
		<Javascript />
	</section>
</div>
<!-- mid dark section, full width, and postioning -->
<div
	class="full-bleed col-span-full bg-surface-900 h-[2315px] -mt-[640px] pt-[200px] relative -z-50"
>
	<img
		src={fallingLogos}
		alt="cascading framework logos that look like they are falling"
		class="relative left-1/2 transform -translate-x-1/2 bg-surface-900"
	/>
</div>

<img src={squigglyDark} alt="" class="full-bleed col-span-full" />
<div class="main">
	<!-- each section aligns with grid and takes account for the margin between and height for absolute images -->
	<section class="-mt-[1500px] md:-mt-[1200px] xl:-mt-[1000px] relative z-10 mx-auto">
		<Api />
	</section>
	<section>
		<Markup />
	</section>
	<section>
		<Scores />
	</section>
</div>

<style lang="postcss">
	section {
		@apply xl:col-span-6 place-items-start min-h-full relative;
	}

	.main {
		@apply grid xl:grid-cols-minmax col-start-2 col-end-6;
	}
</style>
