<script lang="ts">
	import { formatDate, getYear } from '@packages/utils/date';
	import type { PageData } from './$types';

	export let data: PageData;
	const { items } = data;
</script>

<svelte:head>
	<title>sieg.fr/ied/notes</title>
	<meta name="description" content="Un peu de tout, et beaucoup de rien." />
</svelte:head>

<h1>Notes.</h1>
<p>Un peu de tout, et beaucoup de rien.</p>

<nav>
	{#each items as item}
		<section class="flex flex-col" data-year={getYear(item.publicationDate)}>
			<a href={`/ied/${item.slug}`} sveltekit:prefetch>
				{item.title}
			</a>
			<span>{item.description}</span>
			<time datetime={item.publicationDate}>{formatDate(item.publicationDate)}</time>
		</section>
	{/each}
</nav>

<style>
	time {
		font-variant: tabular-nums;
	}

	section {
		margin: 1rem 0;
	}

	section > * {
		margin: 0;
	}

	section[data-year]::before {
		display: block;
		background: var(--prime);
		color: var(--wevet);
		padding: 0.5rem 1rem;
		font-weight: bold;
		font-variant: tabular-nums;
	}

	@media screen and (min-width: 768px) {
		section[data-year]::before {
			position: absolute;
			transform: rotate(-90deg) translateX(-1rem) translateY(-5rem);
		}
	}

	section[data-year='2022']::before {
		content: '2022';
	}
	section[data-year='2021']::before {
		content: '2021';
	}
	section[data-year='2020']::before {
		content: '2020';
	}
	section[data-year='2019']::before {
		content: '2019';
	}
	section[data-year='2018']::before {
		content: '2018';
	}
	section[data-year='2017']::before {
		content: '2017';
	}
	section[data-year='2016']::before {
		content: '2016';
	}
	section[data-year='2015']::before {
		content: '2015';
	}
	section[data-year='2014']::before {
		content: '2014';
	}
	section[data-year='2013']::before {
		content: '2013';
	}
	section[data-year='2012']::before {
		content: '2012';
	}
	section[data-year='2011']::before {
		content: '2011';
	}

	section[data-year='2022'] + section[data-year='2022']::before,
	section[data-year='2021'] + section[data-year='2021']::before,
	section[data-year='2020'] + section[data-year='2020']::before,
	section[data-year='2019'] + section[data-year='2019']::before,
	section[data-year='2018'] + section[data-year='2018']::before,
	section[data-year='2017'] + section[data-year='2017']::before,
	section[data-year='2016'] + section[data-year='2016']::before,
	section[data-year='2015'] + section[data-year='2015']::before,
	section[data-year='2014'] + section[data-year='2014']::before,
	section[data-year='2013'] + section[data-year='2013']::before,
	section[data-year='2012'] + section[data-year='2012']::before,
	section[data-year='2011'] + section[data-year='2011']::before {
		content: '';
		padding: 0;
	}
</style>
