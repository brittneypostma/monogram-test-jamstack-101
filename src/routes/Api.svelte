<script>
	import sphere from '$lib/images/sphere.png';
</script>

<!-- set up grid and styles, offset bottom margin to correct spacing -->
<section class="text-white text-center mx-auto grid gap-11 justify-items-center p-4 xl:p-0 -mb-32">
	<h2>api</h2>
	<p
		class="xl:ml-11 font-normal tracking-normal
 leading-loosest text-xl text-[24px] max-w-[730px]"
	>
		At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs
		can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!
	</p>
	<!-- position image on all devices -->
	<img
		src={sphere}
		alt="a glowing gradient sphere that goes from blue to pink with prismic and supabase logos around the center."
		class="w-[100%] relative transform -translate-x-[5%] lg:-translate-x-[100px] -translate-y-[100px] lg:-translate-y-[180px] -z-10"
	/>
</section>
