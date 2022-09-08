<script lang="ts">
	import Figure from '@packages/ui/Figure.svelte';
	import Tags from '@packages/ui/Tags.svelte';
	import type { PageData } from './$types';
	import {formatDate} from "@packages/utils";

	export let data: PageData;
	const { item, html, headings } = data;

	let show = false;
</script>

<svelte:head>
	<title>{item.title} [ehret.me]</title>
	<meta name="description" content={item.description} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:title" content={`${item.title} [ehret.me]`} />
	<meta property="og:description" name="description" content={item.description} />
	<meta property="og:image" content={`/image/${encodeURIComponent(item.title)}.jpg`} />
</svelte:head>

<nav>
	<a href="/notes" data-sveltekit:prefetch>&lt;= all notes</a>
</nav>

<article>
	<h1>{item.title}</h1>

	{#if item.heroImage}
		<Figure item={item.heroImage} />
	{/if}
	<details class="text-sm mb-4">
		<summary class="underline cursor-pointer">{formatDate(item.publicationDate)}</summary>
		Last modified on {formatDate(item.sys.publishedAt)}
	</details>
	{#if headings && headings.length > 0}
		<button
			class="border rounded border-prime hover:bg-prime hover:text-wevet py-1 px-2"
			on:click|preventDefault={() => (show = !show)}
		>
			Shortcuts
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
	<Tags tags={item.contentfulMetadata.tags} />
</article>
