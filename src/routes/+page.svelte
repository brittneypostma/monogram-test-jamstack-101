<script>
	import Hero from './Hero.svelte';
	import Javascript from './Javascript.svelte';
</script>

<section class="relative top-10 md:top-[153px]">
	<Hero />
</section>
<section id="javascipt" class="mt-12">
	<Javascript />
</section>

<style lang="postcss">
	section {
		@apply min-h-screen;
	}
</style>
