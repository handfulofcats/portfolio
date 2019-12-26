<script>
</script>

<style>
	main {
		position: relative;
		max-width: 1200px;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (max-width:1279px) {
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

<main>
	<slot></slot>
</main>