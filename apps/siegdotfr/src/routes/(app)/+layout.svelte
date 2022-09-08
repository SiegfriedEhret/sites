<script lang="ts">
	import Footer from '@packages/ui/Footer.svelte';
	import Header from '@packages/ui/Header.svelte';
	import '../../app.css';
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="sieg.fr/ied" href="/ied/rss.xml" />
</svelte:head>

<Header>
	<a slot="title" class="text-wevet mr-2" sveltekit:prefetch href="/ied">sieg.fr/ied</a>
	<span slot="links">
		<a class="text-wevet" sveltekit:prefetch href="/ied/notes">/notes</a>
		<a class="text-wevet" sveltekit:prefetch href="/ied/mu">/mu</a>
		<a class="text-wevet" sveltekit:prefetch href="/ied/causeries">/causeries</a>
	</span>
</Header>

<main class="prose prose-lg mx-auto my-4 dark:prose-invert px-4 lg:px-0">
	<slot />
</main>

<Footer>
	<p slot="awesome">Vous êtes chouettes. Bisous.</p>
	<a slot="link" href="https://ehret.me/" title="Mon site en anglais"> 🔗 ehret.me </a>
	<p slot="made-with">
		Bidouillé avec 💖 et <a href="https://git.sr.ht/~siegfriedehret/sites">⌨️</a>.
	</p>
</Footer>


<div aria-hidden="true" class="hidden mt-16 bg-prime border-t border-t-prime p-4 lg:px-0 mx-2">
	<!-- Some classes to fix styles of imported components -->
</div>
