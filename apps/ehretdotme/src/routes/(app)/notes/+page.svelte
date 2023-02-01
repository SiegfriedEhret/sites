<script lang="ts">
	import type { PageData } from './$types';
	import List from '@packages/ui/v1/List.svelte';
	import type { Post } from '@packages/utils/types/posts';

	export let data: PageData;
	const { items }: { items: Post[] } = data;
</script>

<svelte:head>
	<title>/notes [ehret.me]</title>
	<meta property="og:title" content={`/notes [ehret.me]`} />
	<meta
		property="og:description"
		name="description"
		content="A little of everything and a lot of nothing."
	/>
	<meta name="description" content="A little of everything and a lot of nothing." />
</svelte:head>

<h1>Notes.</h1>
<p>A little of everything and a lot of nothing.</p>

<nav>
	<List {items} />
</nav>
