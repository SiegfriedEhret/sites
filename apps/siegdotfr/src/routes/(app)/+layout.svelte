<script lang="ts">
	import '@packages/ui/v1/app.css';
	import Footer from '@packages/ui/v1/Footer.svelte';
	import Header from '@packages/ui/v1/Header.svelte';
	import Layout from '@packages/ui/v1/Layout.svelte';
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="sieg.fr/ied" href="/ied/rss.xml" />
</svelte:head>

<Layout>
	<Header slot="header">
		<a slot="title" class="to-home" sveltekit:prefetch href="/ied">sieg.fr/ied</a>
		<svelte:fragment slot="links">
			<a sveltekit:prefetch href="/ied/notes">/notes</a>
			<a sveltekit:prefetch href="/ied/mu">/mu</a>
			<a sveltekit:prefetch href="/ied/causeries">/causeries</a>
		</svelte:fragment>
	</Header>

	<a slot="link" href="https://ehret.me/" title="Mon site en anglais"> 🔗 ehret.me </a>

	<main slot="main">
		<slot />
		<Footer>
			<p>Vous êtes chouettes. Bisous.</p>
			<p>
				Bidouillé avec 💖 et <a href="https://git.sr.ht/~siegfriedehret/sites">⌨️</a>.
			</p>
		</Footer>
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
