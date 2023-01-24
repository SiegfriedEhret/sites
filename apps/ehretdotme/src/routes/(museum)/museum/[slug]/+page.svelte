<script lang="ts">
	import type { PageData } from './$types';

	import { getTitle } from '../../../../lib/utils/art';
	import Artist from '../../../../lib/museum/Artist.svelte';
	import Shot from '../../../../lib/museum/Shot.svelte';

	export let data: PageData;
	const { artPiece } = data;
	console.log(artPiece);
</script>

<svelte:head>
	<title>{getTitle(artPiece)} - Museum of Poorly Photographed Art [ehret.me]</title>
	<meta
		property="og:title"
		content={`${getTitle(artPiece)} - Museum of Poorly Photographed Art [ehret.me]`}
	/>
	<meta
		property="og:description"
		name="description"
		content={artPiece.description ?? getTitle(artPiece)}
	/>
	<meta name="description" content={artPiece.description ?? getTitle(artPiece)} />
</svelte:head>

<article>
	{#each artPiece.mediaCollection.items as item}
		<figure>
			<img src={item.url} alt={getTitle(artPiece)} />
			<figcaption>
				<a href={item.url} title={getTitle(artPiece)}>
					{getTitle(artPiece)}
				</a>
			</figcaption>
		</figure>
	{/each}
	<h1>{artPiece.name}</h1>
	{#if artPiece.descriptionHtml}
		<div>{@html artPiece.descriptionHtml}</div>
	{/if}
	<Artist artist={artPiece.artist} />
	<Shot art={artPiece} />
</article>

<style>
	h1 {
		display: none;
	}
	figure,
	img {
		max-width: 100%;
		height: auto;
	}

	figure {
		margin: 1rem 0;
	}
</style>
