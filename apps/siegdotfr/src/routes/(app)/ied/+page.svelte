<script lang="ts">
	import type { PageData } from './$types';
	import List from "@packages/ui/List.svelte";

	export let data: PageData;
	const { items } = data;
</script>

<svelte:head>
	<title>/ [sieg.fr/ied]</title>
	<meta property="og:title" content={`/ [sieg.fr/ied]`} />
	<meta property="og:description" name="description" content="Je m'appelle Siegfried. Je suis développeur." />
	<meta name="description" content="Je m'appelle Siegfried. Je suis développeur." />
</svelte:head>

<article>
	<h1>Coucou !</h1>
	<p>Je m'appelle Siegfried Ehret. Je suis développeur.</p>

	<section>
		<h2>Dernières notes.</h2>
		<List {items} page="index" prefix="/ied" />
		<a href="/ied/notes">Toutes mes notes.</a>
	</section>
</article>
