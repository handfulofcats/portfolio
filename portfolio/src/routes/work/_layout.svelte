<script>
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import { stores } from '@sapper/app';
	import Nav from '../../components/Nav.svelte';
	import Footer from '../../components/Footer.svelte';
	import { displaymenu, breakpoint } from '../../stores.js';
	import NextPost from '../../components/NextPost.svelte';

	export let segment;

	let innerWidth, innerHeight;

	const { page } = stores();
	let { slug } = $page.params;

	onMount(()=>{
		updateBreakpoint();
	});

	afterUpdate(() => {
		slug = $page.params.slug;
	});

    function updateBreakpoint() {
        if 		(innerWidth > 1279) { breakpoint.update(value => value = "lg") }
        else if (innerWidth > 768) 	{ breakpoint.update(value => value = "md") }
		else if (innerWidth > 414) 	{ breakpoint.update(value => value = "sm") }
		else 						{ breakpoint.update(value => value = "xs") }
	}

</script>

<style lang="scss" global>
@import "./static/global.scss";
	#wrapper {
		height: 100vh;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
	}
	#wrapper.displaynav {
		overflow:hidden;
	}
	#wrapper.modalOpen {
		/*overflow: hidden;*/
	}
	main {
		position: relative;
		width: 100%;
		background-color: white;
		margin: 0px auto 96px auto;
		box-sizing: border-box;
		flex: 1 0 auto;
	}
	Nav, Footer {
		flex: 0 0 auto;
	}

	@media (max-width:1200px) {
	}

	@media (max-width:767px) {
	}
</style>
<svelte:window bind:innerWidth bind:innerHeight on:resize={updateBreakpoint}/>
<div id="wrapper" class="{$displaymenu ? 'displaynav' : ''}">
	<Nav {segment}/>
	<main>
		<slot></slot>
	</main>
	<div id="thenextpost">
		<NextPost currentSlug={slug}/>
	</div>
	<Footer/>
</div>
