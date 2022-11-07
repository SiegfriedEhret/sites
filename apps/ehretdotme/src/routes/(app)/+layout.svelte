<script lang="ts">
	import '@packages/ui/app.css';
	import Footer from '@packages/ui/Footer.svelte';
	import Header from '@packages/ui/Header.svelte';
	import Layout from '@packages/ui/Layout.svelte';
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="ehret.me" href="/rss.xml" />
</svelte:head>

<Layout>
	<Header slot="header">
		<a slot="title" class="to-home" data-sveltekit:prefetch href="/">ehret.me</a>
		<svelte:fragment slot="links">
			<a data-sveltekit:prefetch href="/notes">/notes</a>
			<a data-sveltekit:prefetch href="/museum">/museum</a>
			<a data-sveltekit:prefetch href="/salary">/salary</a>
		</svelte:fragment>
	</Header>

	<main slot="main">
		<slot />
		<Footer>
			<p slot="awesome">I think you are awesome. Peace.</p>
			<a slot="link" href="https://sieg.fr/ied" title="My website in French"> 🔗 sieg.fr/ied </a>
			<p slot="made-with">
				Made with 💖 and <a href="https://git.sr.ht/~siegfriedehret/sites">⌨️</a>.
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
