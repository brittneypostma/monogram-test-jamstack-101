<script>
	import mouseLine from '$lib/images/mouse-line.png';
	import heroImage from '$lib/images/hero.png';
</script>

<!-- align heading with grid and give correct spacing -->
<section class="pl-[10px] pr-4 xl:pr-0 grid gap-11">
	<h1 class="flex flex-wrap gap-[27px]">
		<span>jamstack</span>
		<!-- gradient text -->
		<span class="bg-gradient-to-r from-peach via-orange to-pink bg-clip-text text-transparent"
			>101</span
		>
	</h1>
	<!-- account for left margin, max width, and font styles -->
	<p class="ml-4 lg:ml-8 xl:ml-[52px] max-w-[549px]  text-surface-500">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc
		viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
	</p>
</section>
<!-- place at bottom, but offset margin on section -->
<img src={mouseLine} alt="" class="absolute bottom-[190px] left-1/4 xl:left-[256px]" />
<img src={heroImage} alt="" class="absolute top-[153px] md:top-0 -right-[116px] -z-10" />
