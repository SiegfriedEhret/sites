<script lang="ts">
	import '@packages/ui/v2/app.css';
	import Footer from '@packages/ui/v2/Footer.svelte';
	import Header from '@packages/ui/v2/Header.svelte';
	import Layout from '@packages/ui/v2/Layout.svelte';
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="ehret.me" href="/rss.xml" />
</svelte:head>

<Layout>
	<Header slot="header">
		<a slot="title" class="link" data-sveltekit:prefetch href="/">ehret.me</a>
		<svelte:fragment slot="links">
			<a data-sveltekit:prefetch class="link" href="/notes">/notes</a>
			<a data-sveltekit:prefetch class="link" href="/museum">/museum</a>
			<a data-sveltekit:prefetch class="link" href="/salary">/salary</a>
		</svelte:fragment>
	</Header>

	<main slot="main">
		<slot />
	</main>

	<Footer slot="footer">
		<a slot="link" class="link" href="https://sieg.fr/ied" title="My French website">
			🔗 sieg.fr/ied
		</a>
		<p>I think you are awesome. Peace.</p>
		<p>
			Made with 💖 and <a href="https://git.sr.ht/~siegfriedehret/sites">⌨️</a>.
			<a
				href="https://analytics.ehret.me/share/Oq7kAcFEm322GZ8d/ehret.me"
				target="_blank"
				rel="noreferrer"
			>
				Analytics
			</a>.
		</p>
	</Footer>
</Layout>

<style>
	main {
		max-width: 72ch;
		margin: 0 auto;
	}
</style>
