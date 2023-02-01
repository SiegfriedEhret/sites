<script lang="ts">
	import type { PageData } from './$types';

	import { getTitle } from '../../../../lib/utils/art';
	import { formatDateHuman } from '@packages/utils/date';

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

<nav>
	<a href="/museum" data-sveltekit:prefetch>&lt;= all works</a>
</nav>

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

	<dl>
		<dt>Name</dt>
		<dd>{artPiece.name}</dd>
		{#if artPiece.description}
			<dt>Info</dt>
			<dd>{artPiece.description}</dd>
		{/if}
		<dt>Artist</dt>
		<dd>
			{artPiece.artist.name} ({artPiece.artist.dateOfBirth} - {artPiece.artist.dateOfDeath ?? ''})
		</dd>
		{#if artPiece.location?.name}
			<dt>Shot</dt>
			<dd>at {artPiece.location.name} on {formatDateHuman(artPiece.shot)}</dd>
		{/if}
	</dl>
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
	figcaption {
		text-align: center;
	}
	dt {
		font-weight: bold;
	}
</style>
