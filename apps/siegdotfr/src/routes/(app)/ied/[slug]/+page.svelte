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
	<details>
		<summary>{formatDate(item.publicationDate)}</summary>
		Dernière modification le {formatDate(item.sys.publishedAt)}
	</details>
	{#if headings && headings.length > 0}
	<div class="toc">
		<button
				on:click|preventDefault={() => (show = !show)}
		>
			Raccourcis
		</button>
		{#if show}
			<nav>
				{#each headings as heading}
					<a class={heading.level} href={`#${heading.id}`}>{heading.title}</a>
				{/each}
			</nav>
		{/if}
	</div>
	{/if}

	{@html html}
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