<script>
	import Hero from './Hero.svelte';
	import Javascript from './Javascript.svelte';
	import fallingLogos from '$lib/images/falling-logos.png';
	import squigglyDark from '$lib/images/squiggly-dark.png';
	import Api from './Api.svelte';
	import Markup from './Markup.svelte';
	import orangeSquare from '$lib/images/orange-square.png';
</script>

<div class="relative">
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

	<img
		src={orangeSquare}
		alt=""
		class="absolute bottom-[400px] left-1/2 transform -translate-x-1/2 -z-10 mx-auto w-[1397px] h-[893px]"
	/>
</div>
<!-- mid dark section, full width, and postioning -->
<div class="full-bleed col-span-full bg-surface-900 -mt-[640px] pt-[200px] absolute -z-50">
	<div class="relative">
		<img
			src={fallingLogos}
			alt="cascading framework logos that look like they are falling"
			class="relative left-1/2 transform -translate-x-1/2 bg-surface-900 pb-[781.26px]"
		/>
		<img src={squigglyDark} alt="" class="absolute full-bleed" />
	</div>
</div>
<!-- offset full-bleed section -->
<div class="main mt-[70%] xl:mt-[1000px]">
	<!-- each section aligns with grid and takes account for the margin between and height for absolute images -->
	<section>
		<Api />
	</section>
	<section class="pl-[10%] xl:pl-0 xl:h-[970px] xl:mb-72">
		<Markup />
	</section>
</div>
<div class="full-bleed col-span-full bg-surface-900 relative -z-50" />

<style lang="postcss">
	section {
		@apply xl:col-span-6 place-items-start min-h-full relative;
	}

	.main {
		@apply grid xl:grid-cols-minmax col-start-2 col-end-6 max-w-7xl mx-auto;
	}
</style>
