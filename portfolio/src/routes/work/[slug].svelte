<script context="module">
	import client, { defaultRequestConfig as reqConfig } from '../../storyblokClient';
	import marked from 'marked';
	
	export async function preload (page, session) {
		const { slug } = page.params;
		const response = await client.get('cdn/stories/work/' + slug, reqConfig);
		return {story: response.data.story || {} }
	}
</script>

<script>
	export let story = {};
</script>

<svelte:head>
	<title>{story.name}</title>
</svelte:head>

<h1>{story.name}</h1>
<img src="{story.content.lead_img}" alt="lead">
<div>
{@html marked(story.content.body)}
</div>
