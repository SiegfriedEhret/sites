<div class="layout">
	<slot name="header" />
	<slot name="main" />
</div>

<style>
	.layout {
		display: grid;
		gap: 1rem;
		min-height: 100vh;
	}

	@media screen and (min-width: 60rem) {
		.layout {
			grid-template-columns: 15rem 1fr;
		}
	}
</style>
