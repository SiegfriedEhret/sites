<script lang="ts">
</script>

<div class="burrito">
	<slot name="header" />
	<slot name="main" />
	<slot name="footer" />
</div>

<style>
	.burrito {
		--burrito-spacing: 16px;
		background: var(--back);
		margin: var(--burrito-spacing);
		padding: var(--burrito-spacing);
	}

	@media screen and (min-width: 40rem) {
		.burrito {
			--burrito-spacing: 32px;
		}
	}
</style>
