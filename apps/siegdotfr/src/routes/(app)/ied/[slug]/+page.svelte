<script lang="ts">
	import { formatDate } from '@packages/utils/date';
	import Figure from '@packages/ui/Figure.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { item, html, headings } = data;

	let show = false;
</script>

<svelte:head>
	<title>{item.title} [sieg.fr/ied]</title>
	<meta property="og:title" content={`${item.title} [sieg.fr/ied]`} />
	<meta property="og:description" name="description" content={item.description} />
	<meta name="description" content={item.description} />
</svelte:head>

<nav>
	<a href="/ied/notes" sveltekit:prefetch>&lt;= toutes les notes</a>
</nav>

<article>
	<h1>{item.title}</h1>
	{#if item.heroImage}
		<Figure item={item.heroImage} />
	{/if}
	<details class="text-sm mb-4">
		<summary class="underline cursor-pointer">{formatDate(item.publicationDate)}</summary>
		Dernière modification le {formatDate(item.sys.publishedAt)}
	</details>
	{#if headings && headings.length > 0}
		<button
				class="border rounded border-prime hover:bg-prime hover:text-wevet py-1 px-2"
				on:click|preventDefault={() => (show = !show)}
		>
			Raccourcis
		</button>
		{#if show}
			<nav class="flex flex-col text-sm">
				{#each headings as heading}
					<a class={heading.level} href={`#${heading.id}`}>{heading.title}</a>
				{/each}
			</nav>
		{/if}
	{/if}

	{@html html}
</article>

<!--<pre>{JSON.stringify(item, null, 2)}</pre>-->
