<script context="module">
	import client, { defaultRequestConfig as reqConfig } from '../../storyblokClient';

	export async function preload(page, session) {
		const response = await client.getAll('cdn/stories', reqConfig);

	return { stories: response || [] }
	}

</script>

<script>
	let stories = []
	console.log(stories);
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each stories as story}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a href='work/{story.full_slug}'>{story.name}</a></li>
	{/each}
</ul>