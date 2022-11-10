<script lang="ts">
	import '@packages/ui/app.css';
	import Footer from '@packages/ui/Footer.svelte';
	import Header from '@packages/ui/Header.svelte';
</script>

<div class="sidebar">
	<Header>
		<a slot="title" class="to-home" data-sveltekit:prefetch href="/">ehret.me</a>
		<span slot="links">
			<a data-sveltekit:prefetch href="/notes">/notes</a>
			<a data-sveltekit:prefetch href="/museum">/museum</a>
			<a data-sveltekit:prefetch href="/salary">/salary</a>
		</span>
	</Header>

	<nav>
		<a href="/rss.xml">📫 RSS</a>
		<a href="https://sieg.fr/ied" title="My website in French"> 🔗 sieg.fr/ied </a>
		<a href="https://mastodon.ehret.me/@SiegfriedEhret" rel="me" title="🐘 mastodon">
			🐘 mastodon
		</a>
	</nav>
</div>

<main>
	<slot />
</main>

<Footer>
	<p>I think you are awesome. Peace.</p>
	<p>
		Made with 💖 and <a href="https://git.sr.ht/~siegfriedehret/sites">⌨️</a>.
	</p>
</Footer>

<style>
	.sidebar {
		padding: 1rem;
		background: var(--lake-red);
		color: var(--wevet);
	}

	.to-home {
		font-weight: 800;
		font-size: 2rem;
	}

	main {
		width: 100%;
		padding: 1rem;
	}
</style>
