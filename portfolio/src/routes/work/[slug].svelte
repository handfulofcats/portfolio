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
	export let tags = story.tag_list;
	console.log(story);
</script>

<style lang="scss">
@import "./static/global.scss";

#story-headerarea {
	width: 100%;
	padding-top: 152px;
	box-sizing: border-box;
	/* background: linear-gradient(180deg,#000 0%, #000 40%, rgba(255,255,255,1) 40%);*/
}

#header-content {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
}

#story-leadimg {
	width: 100%;
}

#story-title {
	margin-bottom: 48px; 
}

#story-tags li {
	display: inline-block;
	background: $pure-black;
	margin-right: 8px;
	margin-bottom: 8px;
	padding: 0px 8px;
}

#story-tags a {
	color: #fff;
	text-decoration: none;
	font-family: $archivo;
	font-size: 12px;
	font-weight: normal;
	text-transform: uppercase;
}

#header-content h1 {
	font-weight: 600;
	color: $pure-black;
}

#story-summary {
	@include u2;
	font-family:  aktiv-grotesk-extended, sans-serif;
	font-weight: 300;
	width: 85%;
}

#story-client {
	font-size: 14px;
	text-transform: uppercase;
	color: $cool-gray;
	font-weight: 500;
	letter-spacing: 1px;
}
</style>

<svelte:head>
	<title>{story.name}</title>
</svelte:head>
<div id="story-headerarea">
	<div id="header-content">
		<div id="story-title">
			<ul id="story-tags">
				{#each tags as tag}
				<li><a href="#">{tag}</a></li>
				{/each}
			</ul>
			<h1>{story.name}</h1>
			<h4 id="story-client">{story.content.year} / {story.content.client}</h4>
			<p id="story-summary">{story.content.summary}</p>
		</div>
		<img id="story-leadimg" src="{story.content.lead_img}" alt="lead">
	</div>
</div>
<div id="story-body">
{@html marked(story.content.body)}
</div>
