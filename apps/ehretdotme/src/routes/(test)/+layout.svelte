<script lang="ts">
	import '@packages/ui/v2/app.css';
</script>

<div class="burrito">
	<slot />
</div>

<style>
	.burrito {
		background: var(--lake-red);
		height: 100dvh;
		width: 100dvw;
		padding: 5rem;
		border: 3rem solid var(--imperial-purple);
		border-top-left-radius: 100rem 80rem;
	}
</style>
