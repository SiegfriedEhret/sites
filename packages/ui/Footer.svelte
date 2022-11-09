<footer>
	<slot />
</footer>

<style>
	footer {
		border-top: 1px solid var(--prime);
		max-width: 400px;
		margin: 4rem auto 0;
		padding: 0 1rem;
		text-align: center;
	}

	@media screen and (min-width: 800px) {
		footer {
			padding: 0;
		}
	}
</style>
