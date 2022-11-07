<script lang="ts">
	import type { PageData } from './$types';
	import List from "@packages/ui/List.svelte";

	export let data: PageData;
	const { items } = data;
</script>

<svelte:head>
	<title>/notes [sieg.fr/ied]</title>
	<meta property="og:title" content={`/notes [sieg.fr/ied]`} />
	<meta property="og:description" name="description" content="Un peu de tout, et beaucoup de rien." />
	<meta name="description" content="Un peu de tout, et beaucoup de rien." />
</svelte:head>

<h1>Notes.</h1>
<p>Un peu de tout, et beaucoup de rien.</p>

<nav>
	<List {items} prefix="/ied" />
</nav>
