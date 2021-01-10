<script context="module">
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { stores } from '@sapper/app';
	import client, { defaultRequestConfig as reqConfig } from '../../storyblokClient';
	import marked from 'marked';
	
	import MarkdownText from '../../components/MarkdownText.svelte';
	import ProblemBlock from '../../components/ProblemBlock.svelte';
    import ContentGrid from '../../components/ContentGrid.svelte';
	import Image from '../../components/Image.svelte';
	import ImgCaption from '../../components/ImgCaption.svelte';
	import NextPost from '../../components/NextPost.svelte';
	import ImgReel from '../../components/ImgReel.svelte';

	export async function preload (page, session) {
		const { slug } = page.params;
		const response = await client.get('cdn/stories/work/' + slug, reqConfig);
		return {story: response.data.story || {} }
	}

	const components = {
		"markdown_text" : MarkdownText,
		"grid" : ContentGrid,
		"Image" : Image,
		"problemblock": ProblemBlock,
		"imgcaption" : ImgCaption,
		"imgreel" : ImgReel
	};
</script>

<script>
	const { page } = stores();
	let { slug } = $page.params;

	afterUpdate(() => {
		slug = $page.params.slug;
	});

	export let story = {};
	export let tags = story.tag_list;
	console.log(story);
</script>

<style lang="scss">
@import "./static/blogstyles.scss";

:root {
	--headerBackgroundColor: #FFFFFF;
}

#story-headerarea {
	width: calc(100% - 48px);
	padding-top: 152px;
	box-sizing: border-box;
	/* background: linear-gradient(180deg,#000 0%, #000 40%, rgba(255,255,255,1) 40%);*/
	background: linear-gradient(180deg, var(--headerBackgroundColor) 0%, var(--headerBackgroundColor) 60%, rgba(255,255,255,1) 60%);
	margin: 24px auto 48px auto;
	border-radius: 4px;

	@include md {
		background: linear-gradient(180deg, var(--headerBackgroundColor) 0%, var(--headerBackgroundColor) 80%, rgba(255,255,255,1) 60%);
	}

	@include xs {
		width: 100%;
		margin: 0 auto 48px auto;
		padding-top: 92px;
		background: linear-gradient(180deg, var(--headerBackgroundColor) 0%, var(--headerBackgroundColor) 90%, rgba(255,255,255,1) 60%);
	}

}

#header-content {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;

	@include md {
		width: 90%;
	}
}

#story-leadimg {
	width: 100%;
}

#story-title {
	margin-bottom: 80px; 

	@include xs {
		margin-bottom: 56px;
	}
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
	color: $almost-black;
}

#story-summary {
	@include u2;
	font-family:  aktiv-grotesk-extended, sans-serif;
	font-weight: 300;
	width: 85%;
	color: $almost-black;
	@include xs {
		width: 100%;
	}
}

#story-whenwherewhat {
	display: flex;
	width: 100%;
	flex-wrap: wrap;
}

#story-whenwherewhat>div {
	margin-right: 24px;
	flex: 0 1 25%;

	@include xs {
		flex: 1 1 40%;
	}
}

#story-whenwherewhat h4 {
	font-family:  aktiv-grotesk-extended, sans-serif;
	font-weight: 400;
	color: $dark-gray;
	text-transform: uppercase;
	margin-bottom: 0;
}

#story-whenwherewhat span {
	font-family:  aktiv-grotesk, sans-serif;
	font-weight: 400;
	color: $pure-black;
	font-size: 14px;
	letter-spacing: 0.5px;
}

#story-client {
	font-size: 14px;
	text-transform: uppercase;
	color: $cool-gray;
	font-weight: 500;
	letter-spacing: 1px;
}

#story-body {
	width: 100%;
	margin: 0 auto;
}

.grid {
	margin: 48px 0;
	padding: 48px 0;
}

.gridContainer {
    display:flex;
    flex-wrap: wrap;
    max-width: 1200px;
	margin: 0 auto;
}
.gridColumn {
    display:flex;
    flex: 1 1 47%;
    min-width: 300px;
    justify-content: center;
    align-items: center;
}
.gridColumn:first-child {
    margin-right: 24px;
}

</style>

<svelte:head>
	<title>{story.content.title} | Andrés Canelones</title>
</svelte:head>
<div id="story-headerarea" style="--headerBackgroundColor: {(story.content.color == "") ? "" : story.content.color.color};">
	<div id="header-content">
		<div id="story-title">
			<ul id="story-tags">
				{#each tags as tag}
				<li><a href="#">{tag}</a></li>
				{/each}
			</ul>
			<h1>{story.content.title}</h1>
			<p id="story-summary">{story.content.summary}</p>
			<div id="story-whenwherewhat">
				<div>
					<h4>Year</h4>
					<span>{story.content.year}</span>
				</div>
				<div>
					<h4>Client</h4>
					<span>{story.content.client}</span>
				</div>
				<div>
					<h4>Role</h4>
					<span>{story.content.Role}</span>
				</div>
			</div>
		</div>
		<img id="story-leadimg" src="{story.content.lead_img}" alt="lead">
	</div>
</div>
<div id="story-body">
	{#if "blocks" in story.content}
		{#each story.content.blocks as block}
			{#if block.component == "grid"}
				<div class="grid" style="background:{block.background.color}">
					<div class="gridContainer">
						{#each block.columns as column}
							<div class="gridColumn">
								<svelte:component this={components[column.component]} content={column} />
							</div>
						{/each}
					</div>
				</div>
			{:else if block.component == "section"}
				<div class="contentSection" style="margin:{block.margin}; padding:{block.padding}">
					{#each block.Content as content}
						<svelte:component this={components[content.component]} content={content} />
					{/each}
				</div>
			{:else}
				<span class="{block.component}{block.contentClass ? block.contentClass : ""}">
					<svelte:component this={components[block.component]} content={block} />
				</span>
			{/if}
		{/each}
	{:else}
		<p>This post is empty!</p>
	{/if}
</div>
