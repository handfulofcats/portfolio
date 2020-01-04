<script context="module">
	import client, { defaultRequestConfig as reqConfig } from '../../storyblokClient';
  
	export async function preload(page, session) {
		const response = await client.get('cdn/stories', {"starts_with":"work/"});
	    return { stories: response.data.stories };
    }
</script>

<script>
  import Storygrid from '../../components/Storygrid.svelte';
	export let stories = [];
</script>

<style lang="scss">
@import "./static/variables.scss";
#pageheader {
  display: flex;
  align-items: center;
  margin-bottom: 64px;
}

#pageheader h1 {
  flex: 1 1 60%;
  vertical-align: top;
  margin: 0;
  margin-right: 32px;
}

#pageheader #line {
  width: 100%;
  height: 1px;
  border-bottom: solid 1px $line-gray;
}
</style>

<svelte:head>
	<title>Andrés Canelones / Works / Digital Product</title>
</svelte:head>

<div id="pageheader">
  <h1>01. Digital Product</h1>
  <span id="line"></span>
</div>


<Storygrid {stories}/>