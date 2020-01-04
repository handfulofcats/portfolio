<script>
	import Nav from '../../components/Nav.svelte';
	export let segment;
</script>

<style lang="scss">
@import "./static/global.scss";
	main {
		position: relative;
		max-width: 1200px;
		background-color: white;
		margin: 64px auto;
		box-sizing: border-box;
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
<Nav {segment}/>
<main>
	<slot></slot>
</main>