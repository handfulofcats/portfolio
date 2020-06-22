<script context="module">
    import { onMount } from 'svelte';
    import { onDestroy } from 'svelte';
    import { beforeUpdate, afterUpdate } from 'svelte';
    import client, { defaultRequestConfig as reqConfig } from '../storyblokClient';

    const storylist = getStories();
    
    async function getStories() {
        const response = await client.get('cdn/stories', {
            "starts_with":"work/"
            });
        return response.data.stories;
    }
</script>

<script>
    export let currentSlug;

    function randomStory() {
        return storylist[Math.floor(Math.random()*stories.length)];
    }

    async function getRandomStory() {
		const response = await client.get('cdn/stories', {
            "starts_with":"work/"
            });
        let stories = response.data.stories.filter(story => story.slug != currentSlug);
        let randomStory = stories[Math.floor(Math.random()*stories.length)];
	    return randomStory;
    }

    let promise = getRandomStory();

    afterUpdate(() => {
        promise = getRandomStory();
    });
</script>

<style lang="scss">
@import "./static/global.scss";
.nextPostLink {
    display: flex;
    width: 100%;
    height: 112px;
    border-top: 1px solid $vlight-gray; 
    text-decoration: none;
}
.nextPostContainer {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
}
.callout {
    font-family: aktiv-grotesk-extended, sans-serif;
	font-size: 1em;
	font-weight: 500;
	text-transform: uppercase;
    letter-spacing: 1px;
    flex: 0 1 30%;
}
.storyTitle {
    font-family: $lemonde;
    @include u2;
	font-weight: 600;
}
</style>

{#await promise then story}
        <a class="nextPostLink" rel="prefetch" href={story.full_slug}>
            <div class="nextPostContainer">
                <span class="callout">Read something else:</span>
                <span class="storyTitle">{story.content.title}</span>
            </div>
        </a>
    {:catch error}
        <p>huh</p>
{/await}