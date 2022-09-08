<script lang="ts">
	import { formatDate } from '@packages/utils/date';
	import type { PageData } from './$types';

	export let data: PageData;
	const { items } = data;
</script>

<svelte:head>
	<title>sieg.fr/ied/mu</title>
	<meta name="description" content="Musieg, musique, tout ça." />
</svelte:head>

<h1>Musieg.</h1>
<p>Musieg, musique, tout ça.</p>

<ul>
	{#each items.sort((a, b) => a.title.localeCompare(b.title)) as item}
		{#if item.isReviewed}
			<li data-title={item.title} class="grid grid-cols-2">
				<a class="col-span-2" href={`/ied/mu/${item.slug}`} sveltekit:prefetch>
					{item.title}
				</a>
				<span>Sorti le {formatDate(item.releaseDate)}</span>
				<span class="text-right">[{item.note}/10]</span>
			</li>
		{/if}
	{/each}
</ul>

<style>
	ul {
		list-style-type: none !important;
	}
	li::before {
		position: absolute;
		display: block;
		transform: translateX(-2rem);
	}

	li[data-title^='A']::before {
		content: 'A';
	}
	li[data-title^='B']::before {
		content: 'B';
	}
	li[data-title^='C']::before {
		content: 'C';
	}
	li[data-title^='D']::before {
		content: 'D';
	}
	li[data-title^='E']::before {
		content: 'E';
	}
	li[data-title^='F']::before {
		content: 'F';
	}
	li[data-title^='G']::before {
		content: 'G';
	}
	li[data-title^='H']::before {
		content: 'H';
	}
	li[data-title^='I']::before {
		content: 'I';
	}
	li[data-title^='J']::before {
		content: 'J';
	}
	li[data-title^='K']::before {
		content: 'K';
	}
	li[data-title^='L']::before {
		content: 'L';
	}
	li[data-title^='M']::before {
		content: 'M';
	}
	li[data-title^='N']::before {
		content: 'N';
	}
	li[data-title^='O']::before {
		content: 'O';
	}
	li[data-title^='P']::before {
		content: 'P';
	}
	li[data-title^='Q']::before {
		content: 'Q';
	}
	li[data-title^='R']::before {
		content: 'R';
	}
	li[data-title^='S']::before {
		content: 'S';
	}
	li[data-title^='T']::before {
		content: 'T';
	}
	li[data-title^='U']::before {
		content: 'U';
	}
	li[data-title^='V']::before {
		content: 'V';
	}
	li[data-title^='W']::before {
		content: 'W';
	}
	li[data-title^='X']::before {
		content: 'X';
	}
	li[data-title^='Y']::before {
		content: 'Y';
	}
	li[data-title^='Z']::before {
		content: 'Z';
	}
	li[data-title^='A'] + li[data-title^='A']::before,
	li[data-title^='B'] + li[data-title^='B']::before,
	li[data-title^='C'] + li[data-title^='C']::before,
	li[data-title^='D'] + li[data-title^='D']::before,
	li[data-title^='E'] + li[data-title^='E']::before,
	li[data-title^='F'] + li[data-title^='F']::before,
	li[data-title^='G'] + li[data-title^='G']::before,
	li[data-title^='H'] + li[data-title^='H']::before,
	li[data-title^='I'] + li[data-title^='I']::before,
	li[data-title^='J'] + li[data-title^='J']::before,
	li[data-title^='K'] + li[data-title^='K']::before,
	li[data-title^='L'] + li[data-title^='L']::before,
	li[data-title^='M'] + li[data-title^='M']::before,
	li[data-title^='N'] + li[data-title^='N']::before,
	li[data-title^='O'] + li[data-title^='O']::before,
	li[data-title^='P'] + li[data-title^='P']::before,
	li[data-title^='Q'] + li[data-title^='Q']::before,
	li[data-title^='R'] + li[data-title^='R']::before,
	li[data-title^='S'] + li[data-title^='S']::before,
	li[data-title^='T'] + li[data-title^='T']::before,
	li[data-title^='U'] + li[data-title^='U']::before,
	li[data-title^='V'] + li[data-title^='V']::before,
	li[data-title^='W'] + li[data-title^='W']::before,
	li[data-title^='X'] + li[data-title^='X']::before,
	li[data-title^='Y'] + li[data-title^='Y']::before,
	li[data-title^='Z'] + li[data-title^='Z']::before {
		content: '';
	}
	li[data-title^='Y'] + li:not([data-title^='Y'])::before {
		content: 'etc.';
	}
</style>
