<script>
	import Nav from '../../components/Nav.svelte';
	import Footer from '../../components/Footer.svelte';
	import { displaymenu } from '../../stores.js';

	export let segment;
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
	main {
		position: relative;
		width: 100%;
		background-color: white;
		/*margin: 176px auto 96px auto;*/
		box-sizing: border-box;
		flex: 1 0 auto;
	}
	Nav, Footer {
		flex: 0 0 auto;
	}

	@media (max-width:1200px) {
		main {
			padding: 0 32px;
		}
	}

	@media (max-width:767px) {
		main {
			padding: 0 16px;
		}
	}
</style>
<div id="wrapper" class="{$displaymenu ? 'displaynav' : ''}">
	<Nav {segment}/>
	<main>
		<slot></slot>
	</main>
	<Footer/>
</div>
