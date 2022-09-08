<script lang="ts">
	import type { PageData } from './$types';

	import { filter, getTitle } from '../../../lib/utils/art';
	import { filterArtist } from '../../../lib/store';

	export let data: PageData;
	const { items } = data;

	const artists = Array.from(new Set(items.map((i) => i.artist.name))).sort();
</script>

<svelte:head>
	<title>Museum of Poorly Photographed Art [ehret.me]</title>
	<meta name="description" content="Bad photographs, real art." />
</svelte:head>

<div class="prose max-w-none">
	<h1>Museum of Poorly Photographed Art</h1>
</div>

<div class="filters">
	<button on:click={() => ($filterArtist = '')}>All</button>
	{#each artists as artist}
		<button class:active={artist === $filterArtist} on:click={() => ($filterArtist = artist)}>
			{artist}
		</button>
	{/each}
</div>

<div class="grid">
	{#each filter(items, $filterArtist) as item}
		<a class="item" href={`/museum/${item.slug}`}>
			<figure>
				<figcaption>{getTitle(item)}</figcaption>
				<img loading="lazy" src={item.mediaCollection.items[0].thumbnail} alt={getTitle(item)} />
			</figure>
		</a>
	{/each}
</div>

<style>
	.filters {
		display: flex;
		margin: 1rem 0;
		overflow-x: auto;
	}

	.filters button {
		padding: 0.5rem 1rem;
		border-radius: 0;
		border: 1px solid var(--prime);
		cursor: pointer;
	}

	.filters button.active,
	.filters button:active,
	.filters button:focus,
	.filters button:hover {
		background: var(--prime);
		color: var(--wevet);
	}

	.filters button:first-of-type {
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
	}

	.filters button:last-of-type {
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}

	@media screen and (min-width: 40rem) {
		.grid {
			--cols: 3;
		}

		@supports not (grid-template-rows: masonry) {
			.grid {
				column-count: var(--cols);
				column-gap: 1rem;
				width: 100%;
			}

			.grid > * {
				break-inside: avoid;
				margin-bottom: 1rem;
			}
		}

		@supports (grid-template-rows: masonry) {
			.grid {
				display: grid;
				grid-template-columns: repeat(var(--cols), 1fr);
				grid-template-rows: masonry;
				gap: 1rem;
			}
		}
	}

	@media screen and (min-width: 80rem) {
		.grid {
			--cols: 5;
		}
	}

	.item {
		break-inside: avoid;
	}

	figure {
		break-inside: avoid;
	}

	figure img,
	figure figcaption {
		width: 100%;
	}

	figcaption {
		background: var(--text);
		color: var(--back);
	}
</style>
