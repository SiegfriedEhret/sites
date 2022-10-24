<script lang="ts">
	import '../../app.css';
	import Footer from '@packages/ui/Footer.svelte';
	import Header from '@packages/ui/Header.svelte';
</script>

<Header>
	<a slot="title" class="to-home" data-sveltekit:prefetch href="/">ehret.me</a>
	<span slot="links">
		<a data-sveltekit:prefetch href="/notes">/notes</a>
		<a data-sveltekit:prefetch href="/museum">/museum</a>
		<a data-sveltekit:prefetch href="/salary">/salary</a>
	</span>
</Header>

<main>
	<slot />
</main>

<Footer>
	<p slot="awesome">I think you are awesome. Peace.</p>
	<a slot="link" href="https://sieg.fr/ied" title="My website in French"> 🔗 sieg.fr/ied </a>
	<p slot="made-with">
		Made with 💖 and <a href="https://git.sr.ht/~siegfriedehret/sites">⌨️</a>.
	</p>
</Footer>

<style>
	.to-home {
		margin-right: .5rem;
	}

main {
	display: flex;
	flex-direction: column;
	margin: 0 1rem;
}

@media screen and (min-width: 800px) {
	main {
		padding: 1rem 0;
	}
}
</style>