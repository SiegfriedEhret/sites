<script lang="ts">
	import '@packages/ui/v1/app.css';
	import Footer from '@packages/ui/v1/Footer.svelte';
	import Header from '@packages/ui/v1/Header.svelte';
	import Layout from '@packages/ui/v1/Layout.svelte';
</script>

<Layout withNavLinks={false}>
	<Header slot="header">
		<a slot="title" class="to-home" data-sveltekit:prefetch href="/">meloe.fr</a>
		<svelte:fragment slot="links">
			<a data-sveltekit:prefetch href="/fichiers">/fichiers</a>
			<a data-sveltekit:prefetch href="/a-propos">/a-propos</a>
		</svelte:fragment>
	</Header>

	<main slot="main">
		<slot />
	</main>
</Layout>

<style>
	.to-home {
		font-weight: 800;
		font-size: 2rem;
	}

	main {
		width: 100%;
		padding: 1rem;
	}

	@media screen and (min-width: 60rem) {
		main {
			max-width: 40rem;
		}
	}
</style>
