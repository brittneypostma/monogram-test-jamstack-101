<script>
	import scores from '$lib/images/scores.png';
</script>

<section
	class="px-4 xl:px-0 pt-[120.5px] pb-[217px] max-w-[1204px] grid gap-11 justify-items-center score-gradient relative mx-auto"
>
	<h3 class="text-mint">top audit scores</h3>
	<img src={scores} alt="four glowing green audit scores, they are all 100" />
	<p>
		<span>
			Search engines, business stakeholders, and end-users gauge a website’s value using metric
			tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</span
		>
		<span>
			Performance is one of the most difficult scores to get to 100. This is especially true in a
			time when users demand JavaScript-heavy, highly-interactive web experiences.
		</span>

		<span>
			A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises
			higher search-engine ranking and a more positive, responsive end-user experience.
		</span>
	</p>
</section>

<style lang="postcss">
	p {
		/* color-dodge not working, using clip text instead */
		@apply max-w-[756px] bg-clip-text text-clip text-transparent bg-gradient-to-br from-[#739e6a] via-surface-300 to-[#5b5d5b] font-normal text-[26px] tracking-normal grid gap-10;
	}
</style>
