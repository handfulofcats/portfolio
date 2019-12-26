<script>
	import Nav from '../../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 1200px;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (max-width:1999px) {
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