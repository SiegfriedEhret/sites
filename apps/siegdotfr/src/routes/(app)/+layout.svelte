<script lang="ts">
	import '@packages/ui/v2/app.css';
	import Footer from '@packages/ui/v2/Footer.svelte';
	import Header from '@packages/ui/v2/Header.svelte';
	import Layout from '@packages/ui/v2/Layout.svelte';
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="sieg.fr/ied" href="/ied/rss.xml" />
</svelte:head>

<Layout>
	<Header slot="header">
		<a slot="title" class="link" sveltekit:prefetch href="/ied">sieg.fr/ied</a>
		<svelte:fragment slot="links">
			<a sveltekit:prefetch class="link" href="/ied/notes">/notes</a>
			<a sveltekit:prefetch class="link" href="/ied/mu">/mu</a>
			<a sveltekit:prefetch class="link" href="/ied/causeries">/causeries</a>
		</svelte:fragment>
	</Header>

	<main slot="main">
		<slot />
	</main>

	<Footer slot="footer">
		<a slot="rss" class="link" href="/ied/rss.xml">📫 RSS</a>
		<a slot="link" href="https://ehret.me/" title="Mon site en anglais"> 🔗 ehret.me </a>

		<p>Vous êtes chouettes. Bisous.</p>
		<p>
			Bidouillé avec 💖 et <a href="https://git.sr.ht/~siegfriedehret/sites">⌨️</a>.
			<a
				href="https://analytics.ehret.me/share/4u4ZpdkiBuUCmAvg/sieg.fr"
				target="_blank"
				rel="noreferrer"
			>
				Statistiques
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
