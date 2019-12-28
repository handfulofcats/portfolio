<script context="module">
	import client, { defaultRequestConfig as reqConfig } from '../../storyblokClient';
	import marked from 'marked';
	export async function preload (page, session) {
		const { slug } = page.params;
		console.log(slug);
		const response = await client.get('cdn/stories/' + slug, reqConfig);
		console.log(response);
		return {story: response.data.story || {} }
	}

	/*export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}*/
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
