<script lang="ts">
	import type { PageData } from './$types';

	import { filter, getTitle } from '../../../lib/utils/art';
	import { filterArtist } from '../../../lib/store';

	export let data: PageData;
	const { items } = data;

	const artists = Array.from(new Set(items.map((i) => i.artist.name))).sort();

	let showArtists = false;
	function toggle() {
		showArtists = !showArtists;
	}
</script>

<svelte:head>
	<title>/museum [ehret.me]</title>
	<meta property="og:title" content="/museum [ehret.me]" />
	<meta
		name="og:description"
		content="Museum of Poorly Photographed Art - Bad pictures, real art."
	/>
	<meta name="description" content="Museum of Poorly Photographed Art - Bad pictures, real art." />
</svelte:head>

<h1>Museum of Poorly Photographed Art</h1>

<button on:click={toggle}>Show artists</button>

<div class="tacos" class:show-artists={showArtists}>
	{#if showArtists}
		<div class="filters">
			<button on:click={() => ($filterArtist = '')}>All</button>
			{#each artists as artist}
				<button class:active={artist === $filterArtist} on:click={() => ($filterArtist = artist)}>
					{artist}
				</button>
			{/each}
		</div>
	{/if}

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
</div>

<style>
	.tacos {
		display: grid;
		grid-template-columns: 1fr;
		gap: 16px;
	}

	.filters {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.filters button {
		border-radius: 0;
		background-color: var(--lake-red);
		color: var(--wevet);
		border: 2px solid transparent;
	}

	.filters button:is(:active, :focus) {
		border-color: var(--wevet);
	}

	@media screen and (min-width: 40rem) {
		.tacos.show-artists {
			grid-template-columns: 200px 1fr;
		}

		.grid {
			--cols: 3;
		}

		@supports not (grid-template-rows: masonry) {
			.grid {
				column-count: var(--cols);
				gap: 16px;
				width: 100%;
			}

			.grid > * {
				break-inside: avoid;
				margin-bottom: 16px;
			}
		}

		@supports (grid-template-rows: masonry) {
			.grid {
				display: grid;
				grid-template-columns: repeat(var(--cols), 1fr);
				grid-template-rows: masonry;
				gap: 16px;
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
		/*margin: 0;*/
		/*padding: 0;*/
	}

	figure {
		break-inside: avoid;
		margin: 16px auto;
		padding: 0;
	}

	figure img,
	figure figcaption {
		width: 100%;
	}

	figcaption {
		background: var(--text);
		color: var(--back);
		padding: 2px 4px;
		font-size: 0.6rem;
	}
</style>
