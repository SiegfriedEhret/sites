<script lang="ts">
	import '../../app.css';
	import Footer from '@packages/ui/Footer.svelte';
	import Header from '@packages/ui/Header.svelte';
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="ehret.me" href="/rss.xml" />
</svelte:head>

<Header>
	<a slot="title" class="text-wevet mr-2" data-sveltekit:prefetch href="/">ehret.me</a>
	<span slot="links">
		<a class="text-wevet" data-sveltekit:prefetch href="/notes">/notes</a>
		<a class="text-wevet" data-sveltekit:prefetch href="/museum">/museum</a>
	</span>
</Header>

<main class="prose prose-lg mx-auto my-4 dark:prose-invert px-4 lg:px-0">
	<slot />
</main>

<Footer>
	<p slot="awesome">I think you are awesome. Peace.</p>
	<a slot="link" href="https://sieg.fr/ied" title="My website in French"> 🔗 sieg.fr/ied </a>
	<p slot="made-with">
		Made with 💖 and <a href="https://git.sr.ht/~siegfriedehret/sites">⌨️</a>.
	</p>
</Footer>
