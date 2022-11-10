<script lang="ts">
	import Figure from '@packages/ui/Figure.svelte';
	import { formatDate } from '@packages/utils/date';
	import type { PageData } from './$types';

	export let data: PageData;
	const { item } = data;
</script>

<svelte:head>
	<title>{item.title} [sieg.fr/ied]</title>
	<meta property="og:title" content={`${item.title} [sieg.fr/ied]`} />
	<meta property="og:description" name="description" content={item.description} />
	<meta name="description" content={item.description} />
</svelte:head>

<nav>
	<a href="/ied/mu" sveltekit:prefetch>&lt;= retour à la liste</a>
</nav>

{#if item}
	<article>
		<h1>{item.title}</h1>
		<span>Sorti le {formatDate(item.releaseDate)}</span>
		<p>{item.description}</p>

		<Figure item={item.cover} />

		<h2>Introduction</h2>
		{@html item.reviewIntroductionHtml.html}

		<h2>Causerie</h2>
		{@html item.reviewHtml.html}

		<h2>Conclusion</h2>
		{@html item.reviewConclusionHtml.html}

		<p>Note: {item.note}/10</p>

		<h2>Pistes</h2>
		{@html item.tracksHtml.html}

		<h2>Liens</h2>
		{@html item.linksHtml.html}
	</article>
{:else}
	<p>404 ! Rien de plus sur ce disque.</p>
{/if}

<!--<pre>{JSON.stringify(item, null, 2)}</pre>-->
