<script>
	import retroComputer from '$lib/images/retro-computer.png';
	import squigglyArrow from '$lib/images/squiggly-arrow.png';
</script>

<img src={squigglyArrow} alt="" class="hidden xl:block absolute xl:top-[267.5px] xl:right-12" />
<section class="text-white text-center mt-[93px] grid xl:grid-cols-minmax">
	<div class="xl:col-start-2 xl:col-end-4 grid gap-11 justify-center">
		<h2>javascript</h2>
		<!-- slight left margin to correct spacing on grid and clamp width -->
		<p class="max-w-[578px] ml-5 text-center">
			Statically generated pages are brought to life with client-side JavaScript libraries and
			frameworks, such as Algolia and Next.js.
		</p>
	</div>
</section>
<!-- position image in center horizontally and correct top spacing -->
<img
	src={retroComputer}
	alt="a retro style computer with glowing blue code on the screen"
	class="absolute top-[452px] left-1/2 transform -translate-x-1/2"
/>
