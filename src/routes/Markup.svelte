<script>
	import blockGraphic from '$lib/images/block-graphic.png';
	import toppledBlocks from '$lib/images/toppled-blocks.png';
</script>

<section class="grid gap-[69px] relative">
	<h2 class="xl:text-[133px]">markup</h2>
	<p class="max-w-[480px] text-[24px] tracking-normal font-normal text-surface-700 pr-4 xl:p-0">
		When ready for deployment, a static-site generator such as Astro or Next.js is used to compile
		the website. The end result is a collection of pre-rendered HTML pages that can be delivered
		lightning-fast over a CDN like Vercel’s Edge Network.
		<img src={toppledBlocks} alt="" class="absolute -left-20 mt-[100px]" />
	</p>
</section>
<img src={blockGraphic} alt="" class="hidden xl:block absolute top-10 -right-[116px] -z-10" />
