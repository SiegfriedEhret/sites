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
	<details>
		<summary>{formatDate(item.publicationDate)}</summary>
		Last modified on {formatDate(item.sys.publishedAt)}
	</details>
	{#if headings && headings.length > 0}
	<div class="toc">
		<button
			on:click|preventDefault={() => (show = !show)}
		>
			Shortcuts
		</button>
		{#if show}
			<nav>
				{#each headings as heading}
					<a class:h2={heading.level === "h2"} 
					class:h3={heading.level === "h3"}
					class:h4={heading.level === "h4"}
					class:h5={heading.level === "h5"}
					class:h6={heading.level === "h6"}
					href={`#${heading.id}`}>{heading.title}</a>
				{/each}
			</nav>
		{/if}
		</div>
	{/if}
	{@html html}
	{#if item.contentfulMetadata?.tags}
	<Tags tags={item.contentfulMetadata.tags} />
	{/if}
</article>

<style>
	details {
		margin-bottom: 1rem;
		font-size: var(--fs-small);
	}
	summary {
		text-decoration: underline;
		cursor: pointer;
	}
	.toc button {
		border-radius: .5rem;
		border: 1px solid var(--prime);
		background: transparent;
		color: var(--text);
		padding: .5rem 1rem;
	}
	.toc .h2 {
		padding-left: .5rem;
	}
	.toc .h3 {
		padding-left: 1rem;
	}
	.toc .h4 {
		padding-left: 1.5rem;
	}
	.toc .h5 {
		padding-left: 2rem;
	}
	.toc .h6 {
		padding-left: 2.5rem;
	}
	button:focus,
	button:hover {
		background: var(--prime);
		color: var(--wevet);
	}
	nav {
		display: flex;
		flex-direction: column; 
		 font-size: .875rem;
  		line-height: 1.25rem;
	}
</style>