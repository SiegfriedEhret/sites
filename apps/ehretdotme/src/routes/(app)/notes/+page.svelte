<script lang="ts">
	import type { PageData } from './$types';
	import List from '@packages/ui/List.svelte';
	import type { Post } from '@packages/utils/types/posts';

	export let data: PageData;
	const { items }: { items: Post[] } = data;
</script>

<svelte:head>
	<title>Notes. [ehret.me]</title>
	<meta name="description" content="Some notes." />
</svelte:head>

<nav>
	<h1>Notes.</h1>
	<List {items} />
</nav>
