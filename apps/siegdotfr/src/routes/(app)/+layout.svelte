<script lang="ts">
	import Footer from '@packages/ui/Footer.svelte';
	import Header from '@packages/ui/Header.svelte';
	import '../../app.css';
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="sieg.fr/ied" href="/ied/rss.xml" />
</svelte:head>

<Header>
	<a slot="title" class="to-home" sveltekit:prefetch href="/ied">sieg.fr/ied</a>
	<span slot="links">
		<a sveltekit:prefetch href="/ied/notes">/notes</a>
		<a sveltekit:prefetch href="/ied/mu">/mu</a>
		<a sveltekit:prefetch href="/ied/causeries">/causeries</a>
	</span>
</Header>

<main>
	<slot />
</main>

<Footer>
	<p slot="awesome">Vous êtes chouettes. Bisous.</p>
	<a slot="link" href="https://ehret.me/" title="Mon site en anglais"> 🔗 ehret.me </a>
	<p slot="made-with">
		Bidouillé avec 💖 et <a href="https://git.sr.ht/~siegfriedehret/sites">⌨️</a>.
	</p>
</Footer>

<style>
	.to-home {
		margin-right: .5rem;
	}

main {
	max-width: 800px;
	margin: 0 auto;
	padding: 1rem;
}

@media screen and (min-width: 800px) {
	main {
		padding: 1rem 0;
	}
}
</style>