<script>
	import mouseLine from '$lib/images/mouse-line.png';
	import heroImage from '$lib/images/hero.png';
</script>

<section class="pl-4 md:pl-8 xl:pl-[126px] grid gap-[10%]">
	<h1>
		jamstack
		<!-- gradient text -->
		<span class="bg-gradient-to-r from-peach via-orange to-pink bg-clip-text text-transparent"
			>101</span
		>
	</h1>
	<!-- account for margin -->
	<p
		class="ml-4 lg:ml-8 xl:ml-[62px] tracking-wider leading-[195.5%] max-w-[549px] font-light text-[18px] text-surface-500"
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc
		viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
	</p>
</section>
<img src={mouseLine} alt="" class="absolute mt-[87.4px] left-1/4" />
<img src={heroImage} alt="" class="absolute top-[153px] md:top-0 -right-4 -z-10" />
