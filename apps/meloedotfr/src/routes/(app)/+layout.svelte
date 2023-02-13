<script lang="ts">
	import '@packages/ui/v2/app.css';
	import Header from '@packages/ui/v2/Header.svelte';
	import Layout from '@packages/ui/v2/Layout.svelte';
</script>

<Layout>
	<Header slot="header">
		<a slot="title" class="link" data-sveltekit:prefetch href="/">meloe.fr</a>
		<svelte:fragment slot="links">
			<a data-sveltekit:prefetch class="link" href="/fichiers">/fichiers</a>
			<a data-sveltekit:prefetch class="link" href="/a-propos">/a-propos</a>
		</svelte:fragment>
	</Header>

	<main slot="main">
		<slot />
	</main>
</Layout>

<style>
	main {
		max-width: 72ch;
		margin: 0 auto;
	}
</style>
